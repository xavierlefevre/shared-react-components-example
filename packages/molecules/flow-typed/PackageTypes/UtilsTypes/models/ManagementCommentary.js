// @flow

declare type ModelizedManagementCommentary = ?{
  commentaryText: string,
  publishDate: string,
};

declare type ManagementCommentaryModelizerType = (
  apiResponse: APIFundsheetResponseType
) => ModelizedManagementCommentary;
