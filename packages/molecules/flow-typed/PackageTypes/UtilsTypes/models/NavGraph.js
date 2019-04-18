// @flow

declare type ModelizedGraphNavSerieType = [number, number];

// Bad naming convention due to legacy
declare type ModelizedGraphNavType = {
  navData: ModelizedGraphNavSerieType[],
  currency: string,
  disclaimers: ModelizedNavGraphDisclaimersType,
  hideNavGraph: boolean,
};

declare type NavGraphModelizerType = (
  fundsheet: APIFundsheetResponseType,
  navs: APINavGraphResponseType[],
  currentCurrency?: string
) => ModelizedGraphNavType;
