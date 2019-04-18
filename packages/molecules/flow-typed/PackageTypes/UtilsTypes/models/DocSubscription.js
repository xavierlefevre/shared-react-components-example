// @flow

declare type ModelizedDocSubscriptionType = {
  closingDate: ?string,
  hideDocSubscription: boolean,
};

declare type DocSubscriptionModelizerType = (
  fundsheet: APIFundsheetResponseType
) => ModelizedDocSubscriptionType;
