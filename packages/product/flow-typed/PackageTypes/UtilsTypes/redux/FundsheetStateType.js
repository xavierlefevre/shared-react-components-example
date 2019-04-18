// @flow

declare type FundsheetStateType = {
  currentCurrency: string,
  data: FundsheetDataType,
  requests: {
    [string]: {
      loading: boolean,
      failed: boolean,
    },
  },
};
