// @flow
/* eslint-disable no-undef */

declare type PerformanceValueType = {
  begin: string,
  currency: string,
  value: ?number,
  type: string,
};

declare type APIPerformancesYTDType = {
  benches: ?{
    [string]: {
      end_date: string,
      value: number,
    },
  },
  shares: ?{
    [string]: {
      end_date: string,
      value: number,
    },
  },
  shares_with_FEL?: ?{
    [string]: {
      end_date: string,
      value: number,
    },
  },
};
