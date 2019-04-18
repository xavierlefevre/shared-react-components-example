// @flow

declare type ModelizedNavSubscriptionType = {
  closingDate: ?string,
  hideNavSubscription: boolean,
};

declare type NavSubscriptionModelizerType = (
  fundsheet: APIFundsheetResponseType
) => ModelizedNavSubscriptionType;
