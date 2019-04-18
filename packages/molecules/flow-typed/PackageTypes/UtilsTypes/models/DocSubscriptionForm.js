// @flow

declare type ModelizedDocSubscriptionFormType = {
  documentsByLanguage: {
    [string]: SubscribableDocType[],
  },
  languageNames: { [string]: string },
  shareId: string,
};

declare type DocSubscriptionFormModelizerType = (
  fundsheet: APIFundsheetResponseType
) => ModelizedDocSubscriptionFormType;
