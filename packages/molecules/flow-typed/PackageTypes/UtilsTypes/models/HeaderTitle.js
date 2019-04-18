// @flow
/* eslint-disable no-undef */

declare type ModelizedHeaderTitle = {|
  assetClass: ?string,
  investmentStrategy: ?string,
  currency: string,
  managementCompany: ?string,
  name: string,
  previousName: ?string,
  region: ?string,
  shareType: string,
  subAssetClass: ?string,
|};

declare type HeaderTitleModelizerType = (
  apiResponse: APIFundsheetResponseType,
  currentCurrency?: string
) => ModelizedHeaderTitle;
