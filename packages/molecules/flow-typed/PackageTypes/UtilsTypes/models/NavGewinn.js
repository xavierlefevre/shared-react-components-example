// @flow

// Bad naming convention due to legacy
declare type ModelizedNavGewinnPropsType = {
  date: string,
  values: { [string]: number },
};

declare type NavGewinnModelizerType = (
  apiResponse: APIFundsheetResponseType,
  currentCurrency?: string
) => ?ModelizedNavGewinnPropsType;
