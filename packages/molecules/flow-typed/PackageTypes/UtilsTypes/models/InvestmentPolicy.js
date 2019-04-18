declare type ModelizedInvestmentPolicy = {
  investmentPolicy: ?string,
  showKiidWarning: ?boolean,
  hideInvestmentPolicyNoKiid: ?boolean,
};

declare type InvestmentPolicyModelizerType = (
  apiResponse: APIFundsheetResponseType
) => ModelizedInvestmentPolicy;
