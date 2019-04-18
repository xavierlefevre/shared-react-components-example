// @flow

declare type ModelizedExportType = {|
  currency: string,
  fundshareId: string,
  hideWidget: boolean,
|};

declare type ExportModelizerType = (
  APIFundsheetResponseType,
  ExportType,
  ?string
) => ModelizedExportType;
