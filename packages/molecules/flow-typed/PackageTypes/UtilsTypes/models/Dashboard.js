// @flow

declare type ModelizedDashboardType = {
  subAssetClass?: string,
  threeYearAnnualPerf?: {
    value?: number,
    date?: string,
    benchmark?: number,
  },
  fundSize?: {
    value?: number,
    date?: string,
  },
  ytdPerf?: {
    value?: number,
    date?: string,
    benchmark?: number,
  },
  risk?: number,
  morningStar?: {
    rating?: number,
    date?: ?string,
  },
};
