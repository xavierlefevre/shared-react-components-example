// @flow

declare type ModelizedMediaHeaderButtons = {
  showPrintButton: boolean,
  documents: ModelizedButtonDocumentsType
};

declare type MediaHeaderButtonsModelizerType = (
  apiResponse: APIFundsheetResponseType,
  language: string
) => ModelizedMediaHeaderButtons;
