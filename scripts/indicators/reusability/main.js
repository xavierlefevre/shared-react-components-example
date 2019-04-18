// @flow

import ora from 'ora';
import { Parser } from 'json2csv';
import fs from 'fs';
import lodash from 'lodash';

import { getReusesPerProject } from './logic';

const githubTeam = 'shared-components';
// Lists projects repos and staging branches:
// Where the code is first and foremost merged on
const githubProjectsRepos = {
  // We don't want to count SharedComponents reuses in the indicator as we
  // already catch reuses here with the contribution on SharedComponents indicator
  // 'shared-components': 'develop',
};

function exportCSV(data, year, week, project) {
  const csvFields = Object.keys(data[0]);
  const json2csvParser = new Parser({ fields: csvFields });
  const csv = json2csvParser.parse(data);

  const csvsFolder = `${__dirname}/csvs`;
  if (!fs.existsSync(csvsFolder)) {
    fs.mkdirSync(csvsFolder);
  }

  const csvOutput = `${csvsFolder}/reuses-${project ||
    'global'}-${year}-${week}.csv`;
  fs.writeFile(csvOutput, csv, function(createFileError) {
    if (createFileError) {
      console.log('Error writing file', createFileError);
    }
    console.log(`Created the csv here: `, csvOutput);
  });
}

async function getDataAndStatusPerProject(
  untilYear,
  untilWeek,
  projectRepoName
) {
  const spinner = ora().start([`Fetching for ${projectRepoName}`]);

  try {
    const projectData = await getReusesPerProject(
      `${githubTeam}/${projectRepoName}`,
      githubProjectsRepos[projectRepoName],
      untilYear,
      untilWeek
    );

    spinner.succeed([`Finished for ${projectRepoName}`]);

    console.log('     ');
    console.log('--Data--');
    console.log(projectData);
    console.log('     ');

    return projectData;
  } catch (error) {
    spinner.fail([`Failed for ${projectRepoName}`]);

    console.log('     ');
    console.log(error);
    console.log('     ');

    return [];
  }
}

export default async function outputReuses(
  untilYear,
  untilWeek,
  specifiedProject
) {
  if (untilYear && untilWeek) {
    if (!specifiedProject) {
      const reuses = await Promise.all(
        Object.keys(githubProjectsRepos).map(project =>
          getDataAndStatusPerProject(untilYear, untilWeek, project)
        )
      );
      exportCSV(lodash.flatten(reuses), untilYear, untilWeek);
      return;
    }
    if (githubProjectsRepos[specifiedProject]) {
      const reuses = await getDataAndStatusPerProject(
        untilYear,
        untilWeek,
        specifiedProject
      );
      exportCSV(lodash.flatten(reuses), untilYear, untilWeek, specifiedProject);
      return;
    }
    console.log('The entered project does not exist');
  } else {
    console.log(`Enter a year and week - a project optionnaly`);
  }
}
