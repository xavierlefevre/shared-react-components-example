// eslint-disable-next-line import/no-extraneous-dependencies
import { select } from '@storybook/addon-knobs';
import keys from 'lodash/keys';

const fundsheetParams = {
  'fr_FR-FR0010668145 (classic)': {
    segment: 'IP_FR-IND',
    language: 'FRE',
    country: 'FRA',
    isin: 'FR0010668145',
  },
  'fr_FR-LU1165135523 (dividend)': {
    segment: 'PV_FR-FSE',
    language: 'FRE',
    country: 'FRA',
    isin: 'LU1165135523',
  },
  'fr_FR-LU1165135523 (easy-future)': {
    segment: 'PV_FR-FSE',
    language: 'FRE',
    country: 'FRA',
    isin: 'LU0930018691',
  },
  'fr_FR-LU0823397368 (hedged-warning)': {
    segment: 'PV_FR-FSE',
    language: 'FRE',
    country: 'FRA',
    isin: 'LU0823397368',
  },
  'fr_BE-BE6209471166 (classic)': {
    segment: 'PV_BE-IND',
    language: 'FRE',
    country: 'BEL',
    isin: 'BE6209471166',
  },
  'fr_BE-BE0026480963 (characteristics-disclaimers)': {
    segment: 'PV_BE-IND',
    language: 'FRE',
    country: 'BEL',
    isin: 'BE0026480963',
  },
  'fr_BE-BE0163304539 (narrative-risks)': {
    segment: 'PV_BE-IND',
    language: 'FRE',
    country: 'BEL',
    isin: 'BE0163304539',
  },
  'fr_BE-LU1080341065 (perf-with-euro)': {
    segment: 'PV_BE-IND',
    language: 'FRE',
    country: 'BEL',
    isin: 'LU1080341065',
  },
  'fr_BE-LU1165135440 (kiid-warning)': {
    segment: 'PV_BE-IND',
    language: 'FRE',
    country: 'BEL',
    isin: 'LU1165135440',
  },
  'it_IT-LU0347711466 (classic)': {
    segment: 'IP_IT-IND',
    language: 'ITA',
    country: 'ITA',
    isin: 'LU0347711466',
  },
  'nl_NL-LU1165135879 (classic)': {
    segment: 'PV_NL-FSE',
    language: 'DUT',
    country: 'NLD',
    isin: 'LU1165135879',
  },
  'de_DE-LU0406802339 (nav-gewinn)': {
    segment: 'IP_DE-FAD',
    language: 'GER',
    country: 'DEU',
    isin: 'LU0406802339',
  },
  'en_EN-LU0325598166 (classic)': {
    segment: 'EX_GL-FFL',
    language: 'ENG',
    country: 'USA',
    isin: 'LU0325598166',
  },
  'fr_LU-LU0154361405 (closed share)': {
    segment: 'IP_LU-IND',
    language: 'FRE',
    country: 'LUX',
    isin: 'LU0154361405',
  },
  'en_US-LU1165135440 (performances with FEL)': {
    segment: 'IP_SG-IND',
    language: 'ENG',
    country: 'SGP',
    isin: 'LU1165135440',
  },
  'fr_FR-LU0212992357 (LV Navs)': {
    segment: 'PV_FR-FSE',
    language: 'FRE',
    country: 'FRA',
    isin: 'LU0212992357',
  },
  'en_AU-ETL0434AU (APIR code)': {
    segment: 'IP_AU-NSG',
    language: 'ENG',
    country: 'AUS',
    isin: 'ETL0434AU',
  },
};
const getStoriesParams = (fundKey: string) => {
  const fund = select('Samples', keys(fundsheetParams), fundKey);
  const locale = fund.split('-')[0];
  return {
    fund,
    locale,
  };
};

const folderStructure = {
  title: 'Molecules',
  development: { title: 'Development' },
};

const toolsProjectTranslationsGuid = '028f4662-cf40-4f60-98c6-dda0daf48e23';

export {
  getStoriesParams,
  fundsheetParams,
  folderStructure,
  toolsProjectTranslationsGuid,
};
