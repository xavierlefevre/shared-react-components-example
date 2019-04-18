import glob
import json
import re
import os

GREEN = "\033[0;32;40m "
YELLOW = "\033[1;33;40m "
RED = "\033[1;31;40m "
RESET = "\033[0;37;40m "

def printInColor(color, msg):
    print color + msg

def resetColor():
    print RESET

def getPackagesList():
    """
    Retrieves the list of packages as declared in the "workspaces" property of
    package.json

    :return: Object whose keys represent the packages' location (relative to
    package.json) and values are the packages' name.
    """
    all_packages = {}
    with open('package.json', 'r') as f:
        package_folders = json.loads(f.read())["workspaces"]
        for package_folder in package_folders:
            packages = glob.glob(package_folder)
            for package_path in packages:
                all_packages[package_path] = os.path.split(package_path)[1]
    return all_packages

def parseFlowDeclarationFile(flow_typed_file_content):
    """
    Parses the content of a flow declaration file to extract the module export
    declaration.

    This is made to work only within shared-components. The file content must
    follow specific guidelines in order for this function to work as expected
    - Only one "declare module" per file
    - The module declaration must be the last thing in the file (if you need
     to declare other things, like type and so on, do it BEFORE the module
     declaration)
    """
    flow_typed_export_declarations = flow_typed_file_content\
      .replace('\n', '')\
      .split("declare module")[1]\
      .split("declare export")[1:]
    return flow_typed_export_declarations

def generateCSV(package_exports):
    """
    Create a CSV file based on the exported data
    
    It expects to receive a list of objects with the following keys:
    - package
    - name
    - type
    """
    csv_content = ""
    for package_export in package_exports:
        csv_content += "%s,%s,%s\n"%(
            package_export["package"],
            package_export["name"],
            package_export["type"]
        )
    return csv_content

def main():
    # Retrieve all packages in the repo
    packages = getPackagesList()
    printInColor(GREEN, "[INFO] Packages retrieved")
    out_data = []
    for (package_path, package_name) in packages.items():
        # For each package, look for the index.json snapshot listing the
        # exported objects
        json_snapshot_path = os.path.join(
            package_path,
            'src/__snapshots__/index.json'
        )
        if not os.path.exists(json_snapshot_path):
            # If the file does not exist, there is nothing we can do.
            # Show an error and skip to the next package
            printInColor(RED, "[ERROR] No JSON snapshot on " + package_name)
            continue

        printInColor(GREEN, "[INFO] Found JSON snapshot for " + package_name)

        # Read the index.json snapshot to get the exported object names
        with open(json_snapshot_path, 'r') as _f:
            exported_objects = json.loads(_f.read())

        # For each package, look for the file exporting the module declaration
        flow_typed_path = os.path.join(
            package_path,
            'flow-typed/PackageTypes/'+package_name+'_vx.x.x.js'
        )
        if not os.path.exists(flow_typed_path):
            # If the file does not exist, just print a warning and keep going.
            printInColor(YELLOW, "[WARN] No export of flow types on " + package_name)
            flow_typed_export_declarations = []
        else:
            printInColor(GREEN, "[INFO] Found export of flow types for " + package_name)
            with open(flow_typed_path, 'r') as _f:
                flow_typed_file_content = _f.read()
            flow_typed_export_declarations = parseFlowDeclarationFile(flow_typed_file_content)

        for exported_element in exported_objects:
            for flow_typed_declaration in flow_typed_export_declarations:
                if exported_element + ": any;" in flow_typed_declaration:
                    # Mark the object as declared but with "any" type
                    out_data.append(
                        dict(
                            package=package_name,
                            name=exported_element,
                            type="any"
                        )
                    )
                    break # skip to the next exported_element
                elif exported_element in flow_typed_declaration:
                    # Mark the object as declared and properly typed
                    out_data.append(
                        dict(
                            package=package_name,
                            name=exported_element,
                            type="typed"
                        )
                    )
                    break # skip to the next exported_element
            else:
                # We arrive here only if we did not break
                # (ie we did not find the exported object in flow declarations)
                out_data.append(
                    dict(
                        package=package_name,
                        name=exported_element,
                        type="none"
                    )
                )
    printInColor(GREEN, "[INFO] Export results")
    with open("flow_exports.json", "w") as _json:
        json.dump(out_data, _json)
    with open("flow_exports.csv", "w") as _csv:
        _csv.write(generateCSV(out_data))

    printInColor(GREEN, "[INFO] Done.")
    resetColor() # This is necessary for bash

if __name__ == "__main__":
    main()
