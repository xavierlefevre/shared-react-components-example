// @flow
import moment from 'moment';

declare type ModelizedRiskDetailsType = {
  narrativeRisks: ?ModelizedNarrativeRisks,
  srri: ?ModelizedSrriType,
};

declare type ModelizedDisclaimers = {
  compartmentDisclaimer: string,
  footerDisclaimers: string[],
  navDisclaimers: string[],
  performancesDisclaimers: string[],
  publicationsDisclaimers: string[],
};

declare type ModelizedHiddenTabs = {
  isPerformancesTabHidden: boolean,
  isNavTabHidden: boolean,
};

declare type ManagementCommentaryType = {
  commentaryText: string,
  publishDate: moment,
};

declare type FundsheetDataType = {
  ClosingDate: ?string,
  ContactAdvisorButton: ?boolean,
  Disclaimers: ?ModelizedDisclaimers,
  DividendExport: ?ModelizedExportParamsType,
  Dividends: ?ModelizedDividendType,
  DocSubscription: ?ModelizedDocSubscriptionType,
  DocSubscriptionForm: ?ModelizedDocSubscriptionFormType,
  EasyFutureSimulatorButton: ?ModelizedEasyFutureSimulatorButton,
  Fees: ?ModelizedFeesType,
  Flags: ?FlagsType,
  FundCharacteristics: ?ModelizedCharacteristicsType,
  FundDetails: ?ModelizedFundDetailsType,
  FundDocuments: ?ParsedDocsSectionsType,
  HeaderTitle: ?ModelizedHeaderTitle,
  HiddenTabs: ModelizedHiddenTabs,
  InvestmentPolicy: ?ModelizedInvestmentPolicy,
  KeyFacts: ModelizedKeyFactsType,
  ManagementCommentary: ?ManagementCommentaryType,
  MediaHeaderButtons: ?ModelizedButtonDocumentsType,
  NavExport: ?ModelizedExportParamsType,
  NavGewinn: ?ModelizedNavGewinnPropsType,
  NavGraph: ?ModelizedGraphNavType,
  NavSubscription: ?ModelizedNavSubscriptionType,
  NavSubscriptionForm: ?ModelizedNavSubscriptionFormType,
  NavTable: ?ModelizedNavTableType,
  PerformanceGraph: ?ModelizedGraphPerformanceType,
  PerformanceSynthesis: ?ModelizedPerformancesSynthesisType,
  RiskAnalysis: ?ModelizedTableData,
  RiskDetails: ?ModelizedRiskDetailsType,
  ShowEasyFutureSimulatorButton: ?boolean,
};
