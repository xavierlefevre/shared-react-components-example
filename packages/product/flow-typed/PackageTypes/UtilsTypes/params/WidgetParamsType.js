// @flow

declare type HeaderBackButtonType = {
  showButton: boolean,
  onBackButtonClick: () => {},
};

declare type WidgetParamsType = {
  RiskAnalysis: { headerLinks: { [string]: string } },
  PerformanceGraph: PerformancesGraphParamsType,
  NavGraph: NAVGraphParamsType,
  MediaHeaderButtons: {
    displayDocumentsButtons: boolean,
    showVideoButton: boolean,
    videoUrl: ?string,
  },
  FavoriteButton: FavoriteParamsType,
  HeaderBackButton: HeaderBackButtonType,
};
