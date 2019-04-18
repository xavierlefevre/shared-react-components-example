// @flow

import dateFns from 'date-fns';
import waterfall from 'promise.waterfall';

import { fetchPullRequests, fetchPullRequestDiff } from './fetch';

export function isWeekMoreRecent({ current, compared }) {
  return (
    (current.year === compared.year && current.week >= compared.week) ||
    current.year > compared.year
  );
}

export async function getPRsOverPeriod(
  repo,
  baseBranch,
  untilYear,
  untilWeek,
  page = 1
) {
  const pullRequests = await fetchPullRequests(repo, baseBranch, page);

  // If you call a page with no Pull Request, GitHub will respond with an empty table
  if (!pullRequests.length) {
    return [];
  }

  const oldestPROnPage = pullRequests[pullRequests.length - 1];
  const prYear = dateFns.getISOYear(oldestPROnPage.created_at);
  const prWeek = dateFns.getISOWeek(oldestPROnPage.created_at);

  if (
    isWeekMoreRecent({
      current: { year: prYear, week: prWeek },
      compared: { year: untilYear, week: untilWeek },
    })
  ) {
    pullRequests.push(
      ...(await getPRsOverPeriod(
        repo,
        baseBranch,
        untilYear,
        untilWeek,
        page + 1
      ))
    );
  }

  return pullRequests;
}

function fetchNextPRDiff(repo, pr) {
  return async function(previousResult) {
    const data = await fetchPullRequestDiff(repo, pr.number);
    const updatedData = {
      number: pr.number,
      diff: data,
      created_at: pr.created_at,
    };
    return [...(previousResult || []), updatedData];
  };
}

function getPRsDiffs(projectRepoName, pullRequests, untilYear, untilWeek) {
  const allPRsDiffPromises = [];
  pullRequests.forEach(pr => {
    const prYear = dateFns.getISOYear(pr.created_at);
    const prWeek = dateFns.getISOWeek(pr.created_at);

    // PR can be closed but not merged, we don't want to count those
    // eslint-disable-next-line no-unused-expressions
    pr.merged_at &&
      isWeekMoreRecent({
        current: { year: prYear, week: prWeek },
        compared: { year: untilYear, week: untilWeek },
      }) &&
      allPRsDiffPromises.push(fetchNextPRDiff(projectRepoName, pr));
  });
  // Necessary to bypass GitHub rate limit https://developer.github.com/v3/#abuse-rate-limits
  return waterfall(allPRsDiffPromises);
}

export function findSharedComponentsImportLines(text, addOrRemove = '+') {
  /*
    Test regex: https://regex101.com/
    Rule:
      /^\+import.+?'@shared-components.+/gm
    Test set:
      +import DefaultFundsheet from \'@shared-components/product\';
      +import '@shared-components/atoms/build/style.css';
      +import '@lodash/style.css';
      +import '@shared-components/atoms/build/style.css';
      +import '@shared-components/atoms/build/style.css';
      +11,7 @@ import { fundSelectors } from '@shared-components/entities';
      +11,7 @@ import { fundSelectors } from '@shared-components/entities';
  */
  const importSharedComponentsRegex = new RegExp(
    `^\\${addOrRemove}import.+?'@shared-components.+`,
    'gm'
  );
  const matchingLines = text.match(importSharedComponentsRegex) || [];
  return matchingLines;
}

export function countReuses(allDiff, projectRepoName) {
  return Object.values(
    allDiff.reduce((accumulator, { created_at: createdAt, diff }) => {
      const year = dateFns.getISOYear(createdAt);
      const week = dateFns.getISOWeek(createdAt);
      const yearWeek = `${year}-${week}`;

      return {
        ...accumulator,
        [yearWeek]: {
          project: projectRepoName,
          year,
          week,
          // We decided to count new import lines and substract deleted import lines:
          // If it is a refacto, it won't affect the indicator
          reuses:
            ((accumulator[yearWeek] && accumulator[yearWeek].reuses) || 0) +
            findSharedComponentsImportLines(diff).length -
            findSharedComponentsImportLines(diff, '-').length,
        },
      };
    }, {})
  );
}

export async function getReusesPerProject(
  projectRepoName,
  baseBranch,
  untilYear,
  untilWeek
) {
  const pullRequests = await getPRsOverPeriod(
    projectRepoName,
    baseBranch,
    untilYear,
    untilWeek
  );
  const allDiff = await getPRsDiffs(
    projectRepoName,
    pullRequests,
    untilYear,
    untilWeek
  );
  return countReuses(allDiff, projectRepoName);
}
