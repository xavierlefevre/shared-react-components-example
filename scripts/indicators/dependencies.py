from datetime import datetime, timedelta
from distutils.version import StrictVersion
import json
import subprocess

def getOutdatedDependencies():
    """Get the list of outdated dependencies"""
    p = subprocess.Popen(["yarn", "outdated", "--json"], stdout=subprocess.PIPE)
    r = p.communicate()[0]
    res = json.loads(r.split('\n')[1])
    return res['data']['body']

def getPackageVersionsListWithReleaseDates(package_name):
    """
    Get the list of available version of a package with their release date

    :param: Package name (str)
    :return: List of tuples in the form ('2.7.1', '2018-07-24T13:58:06.365Z')
    """
    p = subprocess.Popen(["yarn", "info", "--json", package_name], stdout=subprocess.PIPE)
    r = p.communicate()[0]
    res = json.loads(r.split('\n')[0])
    return res['data']['time'].items() # transform the map into a list of tuple

def transformLeadingZerosVersionsTagToRegularTags(version):
    """
    Transform version number to make the major update visible when the leading version is 0

    :param: Version number to check (str)
    :return: A curated version number (str)
    """
    if version.startswith("0."):
        return version[2:] + ".0"
    else:
        return version

def getStrictVersion(version):
    """
    Read the version number

    :param: Version number to read (str)
    :return: A version object
    """
    return StrictVersion(transformLeadingZerosVersionsTagToRegularTags(version))

def isVersionValid(tested_version):
    """
    Returns True if the given version is valid

    Given version is valid if it follows the pattern MAJOR.MINOR.PATCH
    and has no prerelease part

    :param: Version number to test (str)
    :return: True or False
    """
    try:
        evaluated_version = getStrictVersion(tested_version)
        return (evaluated_version.prerelease is None)
    except ValueError:
        return False

def isOlderThanTwoMonths(p_given_date):
    """Returns True if the given date is older than two months ago"""
    twoMonthsAgo = datetime.today() - timedelta(60)
    return datetime.strptime(p_given_date, "%Y-%m-%dT%H:%M:%S.%fZ") < twoMonthsAgo

def removeOldAndUnvalidVersions(current_version, versions_list):
    """
    Returns a copy of versions_list without invalid versions and versions
    older than current_version

    :param: Current major version of the package
    :param: List of existing versions of the package
    :return: List of valid versions more recent than the current one
    """
    return filter(lambda x: isVersionValid(x[0]) and (current_version < getStrictVersion(x[0])), versions_list)

def findNewMinorsAndPatches(current_major, new_versions):
    """
    Return a list of versions newer than the current one but where the MAJOR id
    is the same as the current version's one

    :param: Current major version of the package
    :param: New versions of the package
    :return: List of package versions newer than the current with same major id
    """
    return filter(lambda x: getStrictVersion(x[0]).version[0] == current_major, new_versions)

def findNewMajors(current_major, new_versions):
    """
    Return a list of versions where the MAJOR id is different than on the
    current version

    :param: Current major version of the package
    :param: New versions of the package
    :return: List of package versions whose major is bigger than the current one
    """
    return filter(lambda x: getStrictVersion(x[0]).version[0] != current_major, new_versions)

def generateCSV(dependencies):
    csv = ""
    for dependency in dependencies:
        csv += "%s,%s,%s,%s,%s,%s\n"%(
            dependency["name"],
            dependency["current_version"],
            dependency["requesting_package"],
            dependency["upgrade_type"],
            dependency["next_version"],
            dependency["next_major_date"],
        )
    return csv

def main():
    """Retrieve newest available versions of SharedComponents dependencies"""
    output = []

    # Retrieve the list of outdated packages
    outdated_dependencies = getOutdatedDependencies()
    for (dep_name, dep_current_version, _, _, dep_requesting_package, _, _) in outdated_dependencies:
        current_version = getStrictVersion(dep_current_version)
        dependency = dict(
            name=dep_name,
            current_version=dep_current_version,
            requesting_package=dep_requesting_package,
            upgrade_type="",
            next_version="",
            next_major_date=""
        )
        dep_versions_list = getPackageVersionsListWithReleaseDates(dep_name)

        # Remove older versions and non-official releases (alpha, beta and so on)
        new_versions = removeOldAndUnvalidVersions(current_version, dep_versions_list)
        if len(new_versions) == 0:
            continue

        current_major = current_version.version[0]
        new_minors = findNewMinorsAndPatches(current_major, new_versions)
        new_majors = findNewMajors(current_major, new_versions)
        if new_minors:
            dependency["upgrade_type"] = "Minor"
            dependency["next_version"] = sorted(
                new_minors,
                reverse=True,
                key=lambda x: getStrictVersion(x[0])
            )[0][0]
        if new_majors:
            # Are they old enough ?
            stable_new_majors = filter(lambda x: isOlderThanTwoMonths(x[1]), new_majors)
            if stable_new_majors:
                newest_stable_major = sorted(
                    stable_new_majors,
                    reverse=True,
                    key=lambda x: getStrictVersion(x[0])
                )[0]
                dependency["upgrade_type"] = "Major"
                dependency["next_version"] = newest_stable_major[0]
            else:
                next_available_major = sorted(
                    new_majors,
                    key=lambda x: getStrictVersion(x[0])
                )[0]
                availability_date =  datetime.strptime(
                                         next_available_major[1],
                                         "%Y-%m-%dT%H:%M:%S.%fZ"
                                     ).date() + timedelta(60)
                dependency["next_major_date"] = str(availability_date)
        output.append(dependency)
        print dependency
    with open("dependencies.json", "w") as _json:
        json.dump(output, _json)
    with open("dependencies.csv", "w") as _csv:
        _csv.write(generateCSV(output))

if __name__ == "__main__":
    main()
