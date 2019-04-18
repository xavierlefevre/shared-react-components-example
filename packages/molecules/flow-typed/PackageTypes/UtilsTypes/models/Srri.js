// @flow

declare type ModelizedSrriType = {|
  risk: number,
  disclaimer: string,
|};

declare type SrriModelizerType = (
  apiResponse: APIFundsheetResponseType
) => ModelizedSrriType;
