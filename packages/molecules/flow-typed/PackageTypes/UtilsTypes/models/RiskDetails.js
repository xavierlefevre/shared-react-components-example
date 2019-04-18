// @flow

declare type ModelizedRiskDetailsType = {
  narrativeRisks: ?ModelizedNarrativeRisks,
  srri: ?ModelizedSrriType,
};

declare type RiskDetailsModelizerType = (
  apiResponse: APIFundsheetResponseType
) => ModelizedRiskDetailsType;
