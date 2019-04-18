// @flow

import request from 'superagent';

import apiConfig from '@shared-components/api-config';

export function apiCall(sentence: string): Promise<any> {
  return request
    .post(`${apiConfig.SMARTBOT_URL}/predict`)
    .send({ sentence })
    .then(res => res.body);
}
