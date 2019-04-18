declare type ModelizedGraphPerformanceSerieType = [number, number];

declare type ModelizedGraphPerformanceType = {
  legalName: string,
  benchName: string,
  hidePerfGraphPercentage: boolean,
  displayFiveLastYears: boolean,
  firstPerfDate: ?string,
  hidePerfGraph: boolean,
  hidePerfGraphMifid: boolean,
  disclaimerPerfGraph: ?string,
  disclaimerPerfGraphSecondary: ?string,
  perfData: ModelizedGraphPerformanceSerieType[],
  benchData: ModelizedGraphPerformanceSerieType[],
};

declare type PerformanceGraphModelizerType = (
  fundsheet: APIFundsheetResponseType,
  performances: APIPerformancesGraphResponseType[]
) => ?ModelizedGraphPerformanceType;
