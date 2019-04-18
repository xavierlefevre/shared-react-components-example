// @flow
/* eslint-disable no-undef */

declare type ModelizedNarrativeRisks = ?({|
  riskType: string,
  riskText: string,
|}[]);

declare type NarrativeRisksModelizerType = (
  apiResponse: APIFundsheetResponseType
) => ?ModelizedNarrativeRisks;
