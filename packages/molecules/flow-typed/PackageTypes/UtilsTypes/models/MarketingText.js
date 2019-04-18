// @flow

declare type MarketingTextModelizerType = (
  apiResponse: APIMarketingTextsResponseType,
  language: string,
  productId: string,
  qualification: string
) => ModelizedMarketingText;
