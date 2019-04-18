// @flow

declare type DividendsModelizerType = (
  APIFundsheetResponseType,
  currency: ?string
) => ?ModelizedDividendType;
