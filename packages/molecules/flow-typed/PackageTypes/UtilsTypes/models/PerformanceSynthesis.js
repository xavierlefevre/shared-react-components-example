declare type YTDType = {
  share: ?{ value: number, date: string },
  bench: ?{ value: number, date: string },
  shareWithFEL?: ?{ value: number, date: string },
};

declare type ModelizedPerformanceType = {
  [string]: { value: number, date: string },
};

declare type ModelizedPerformanceByCurrencyType = {
  [string]: ModelizedPerformanceType,
};

declare type ModelizedPerformancesByCurrencyType = {
  defaultCurrency?: string,
  perfWithEuro?: boolean,
  shares: ModelizedPerformanceByCurrencyType,
  sharesWithFEL: ?ModelizedPerformanceByCurrencyType,
  benches: ?ModelizedPerformanceByCurrencyType,
  date: string,
  showBeginDatesForShares: ?boolean,
};

declare type ModelizedPerformancesWithYTDType = {
  defaultCurrency?: string,
  perfWithEuro?: boolean,
  shares: ModelizedPerformanceByCurrencyType,
  sharesWithFEL?: ?ModelizedPerformanceByCurrencyType,
  benches: ?ModelizedPerformanceByCurrencyType,
  ytd: YTDType,
  date: string,
  showBeginDatesForShares: ?boolean,
};

declare type ModelizedPerformancesType = {
  defaultCurrency?: string,
  perfWithEuro?: boolean,
  shares: ModelizedPerformanceType,
  sharesWithFEL?: ?ModelizedPerformanceType,
  benches: ?ModelizedPerformanceType,
  date: string,
};

declare type ModelizedTrimestrialPerformanceType = {
  [string]: number,
};

declare type ModelizedTrimestrialPerformancesType = {
  shares: ModelizedTrimestrialPerformanceType,
  benches: ?ModelizedTrimestrialPerformanceType,
  date: string,
};

declare type ModelizedPerformancesSynthesisType = {
  cumulatedPerformancesData: ?ModelizedPerformancesWithYTDType,
  calendarPerformancesData: ?ModelizedPerformancesType,
  annual360PerformancesData: ?ModelizedPerformancesType,
  annual365PerformancesData: ?ModelizedPerformancesByCurrencyType,
  trimestrialAnnual365PerformancesData: ?ModelizedTrimestrialPerformancesType,
};

declare type PerformanceSynthesisModelizerType = (
  apiResponse: APIFundsheetResponseType,
  currency?: string
) => ?ModelizedPerformancesSynthesisType;
