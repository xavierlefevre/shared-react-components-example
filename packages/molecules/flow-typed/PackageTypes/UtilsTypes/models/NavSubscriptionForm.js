// @flow

declare type ModelizedNavSubscriptionFormType = {
  currenciesSelectorData: ?SelectorDataType,
  shareSelectorData: ?SelectorDataType,
};

declare type NavSubscriptionFormModelizerType = (
  fundsheet: APIFundsheetResponseType
) => ModelizedNavSubscriptionFormType;
