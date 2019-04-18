// @flow

import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const githubAuthToken = process.env.GITHUB_AUTH_TOKEN;

export function fetchPullRequests(repo, baseBranch, page = 1) {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/${repo}/pulls?state=closed&page=${page}&base=${baseBranch}`,
    headers: {
      Authorization: `token ${githubAuthToken}`,
      Accept: 'application/json',
    },
  })
    .then(({ data }) => data)
    .catch(err => {
      console.log('Get PRs Error');
      throw err;
    });
}

export function fetchPullRequestDiff(repo, prNumber) {
  return axios({
    method: 'GET',
    url: `https://api.github.com/repos/${repo}/pulls/${prNumber}`,
    headers: {
      Authorization: `token ${githubAuthToken}`,
      Accept: 'application/vnd.github.diff',
    },
  })
    .then(({ data }) => data)
    .catch(err => {
      console.log('Get Diff Error');
      throw err;
    });
}
