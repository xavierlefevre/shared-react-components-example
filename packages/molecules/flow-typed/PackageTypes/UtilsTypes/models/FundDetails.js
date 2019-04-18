declare type HedgedDataType = {
  isShareHedged: ?boolean,
  hasCompartHedgedShares: ?boolean,
};

declare type ModelizedFundDetailsType = {
  mainCode: ?string,
  mainCodeType: ?string,
  shareSelectorData: ?SelectorDataType,
  currenciesSelectorData: ?SelectorDataType,
  morningstarRating: ?ModelizedMorningstarRatingType,
  manager: ?ModelizedFundManagerType,
  hedged: HedgedDataType,
  flags: ?FlagsType,
};

declare type FundDetailsModelizerType = (
  apiResponse: APIFundsheetResponseType,
  apiPictures: APIPictureResponseType,
  currentCurrency?: string
) => ModelizedFundDetailsType;
