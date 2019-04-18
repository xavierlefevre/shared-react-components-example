declare type ModelizedWidgetTemplateType = {
  id: string,
};

declare type WidgetTemplateModelizerType = (
  apiResponse: APIFundsheetResponseType,
  currentCurrency?: string
) => ?ModelizedWidgetTemplateType;
