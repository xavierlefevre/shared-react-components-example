// @flow
/* eslint-disable no-undef */

declare type fetchDataWidgetListType = Array<string>;

declare type callParamsType = {|
  fundsheetParams?: FundsheetParamsType,
  marketingTextParams?: { profile: string },
  navGraphParams?: { granularity: string },
  performancesGraphParams?: { granularity: string },
|};

declare type widgetParamsType = {|
  DividendExport?: {
    exportType: ExportType,
  },
  NavExport?: {
    exportType: ExportType,
  },
  Export?: {
    exportType: ExportType,
  },
  FavoriteButton?: {
    showFavoriteButton: boolean,
    isFavorite: boolean,
  },
  HeaderBackButton?: {
    showButton: boolean,
  },
  MarketingText?: {
    language: string,
    productId: string,
  },
  MediaHeaderButtons?: {
    displayDocumentsButtons: boolean,
    showVideoButton: boolean,
  },
  NavGraph?: NAVGraphParamsType,
  PerformanceGraph?: PerformancesGraphParamsType,
  RiskAnalysis?: {
    headerLinkgs: {
      [string]: string,
    },
  },
  Selector?: {
    type: SelectorType,
  },
|};

declare type fundsheetModelizerType = (FundsheetParamsType) => Object;

declare type customModelizersType = {
  [string]: fundsheetModelizerType,
};

type currency = string;

declare type modelizedWidgetDataType = {
  Annual360PerformancesTable?: ModelizedPerformancesType,
  Annual365PerformancesTable?: ModelizedPerformancesByCurrencyType,
  CalendarPerformancesTable?: ModelizedPerformancesType,
  ContactAdvisorButton?: ModelizedContactAdvisorButton,
  CumulatedPeformancesTable?: ModelizedPerformancesWithYTDType,
  Dashboard?: ModelizedDashboardType,
  Dividends?: ModelizedDividendType,
  DividendExport?: ModelizedExportType,
  DocSubscription?: ModelizedDocSubscriptionType,
  DocSubscriptionForm?: ModelizedDocSubscriptionFormType,
  EasyFutureSimulatorButton?: ModelizedEasyFutureSimulatorButton,
  Export?: ModelizedExportType,
  Fees?: ModelizedFeesType,
  Flags?: FlagsType,
  FundCharacteristics?: ModelizedCharacteristicsType,
  FundDetails?: ModelizedFundDetailsType,
  FundDocuments?: ParsedDocsSectionsType,
  HeaderTitle?: ModelizedHeaderTitle,
  InvestmentPolicy?: ModelizedInvestmentPolicy,
  KeyFacts?: ModelizedKeyFactsType,
  ManagementCommentary?: ModelizedManagementCommentary,
  Manager?: ModelizedFundManagerType,
  MarketingText?: ModelizedMarketingText,
  MediaHeaderButtons?: ModelizedMediaHeaderButtons,
  MorningstarRating?: ModelizedMorningstarRatingType,
  NarrativeRisks?: ModelizedNarrativeRisks,
  NavExport?: ModelizedExportType,
  NavGewinn?: ModelizedNavGewinnPropsType,
  NavGraph?: ModelizedGraphNavType,
  NavSubscription?: ModelizedNavSubscriptionType,
  NavSubscriptionForm?: ModelizedNavSubscriptionFormType,
  NavTable?: ModelizedNavTableType,
  PerformanceGraph?: ModelizedGraphPerformanceType,
  PerformanceSynthesis?: ModelizedPerformancesSynthesisType,
  RiskAnalysis?: ModelizedTableData,
  RiskDetails?: ModelizedRiskDetailsType,
  Selector?: SelectorDataType,
  Srri?: ModelizedSrriType,
  TrimestrialAnnual365PerformancesTable?: ModelizedTrimestrialPerformancesType,
  WidgetTemplate?: ModelizedWidgetTemplateType,
};

declare type widgetDataType = {
  defaultCurrency: string,
  [currency]: modelizedWidgetDataType,
};

declare type fetchWidgetDataType = (
  fetchDataWidgetListType,
  callParamsType,
  ?widgetParamsType,
  ?customModelizersType
) => Promise<widgetDataType>;
