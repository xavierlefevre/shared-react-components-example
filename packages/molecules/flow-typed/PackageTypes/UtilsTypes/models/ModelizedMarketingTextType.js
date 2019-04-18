declare type MarketingTextType = {
  primaryText?: string,
  secondaryText?: string,
};

declare type ModelizedMarketingText = {
  [qualification: string]: ?MarketingTextType,
};
