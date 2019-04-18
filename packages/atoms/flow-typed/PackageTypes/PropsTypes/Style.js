// @flow

declare type ColorsType = {|
  alabaster: string,
  backgroundSeparator: string,
  black: string,
  brandGreen: string,
  brandGreenDark: string,
  errors: string,
  galleryGrey: string,
  graphLineGreen: string,
  grey: string,
  greyBackground: string,
  lightGreen: string,
  lightGreyBackground: string,
  lightRedErrors: string,
  lighterGrey: string,
  lightestGrey: string,
  orange: string,
  roseWhite: string,
  textContent: string,
  white: string,
  wildSandColor: string,
  pink: string,
  brownGrey: string,
  warmGrey: string,
|};

declare type typographyType = {|
  mainTitle: string,
  articleTitle: string,
  wordpressTitle: string,
  fundsheetTitle: string,
  lightText: string,
  menuActive: (color: string) => string,
  menuInactive: string,
  normalText: string,
  boldContent: string,
  content: string,
  disclaimer: string,
  links: (color: string) => string,
  inputValue: string,
|};

declare type assetClassColorsType = {
  EQ: string,
  BL: string,
  BO: string,
  MM: string,
  CB: string,
  AO: string,
  RE: string,
  FI: string,
  safeFund: string,
};

declare type zIndexType = {|
  background: number,
  normal: number,
  dropdown: number,
|};

declare type pageWidthsType = {|
  phoneWidth: string,
  tabletWidth: string,
|};

declare type NormalShadowType = string;
declare type HoverShadowType = string;
declare type FixBaselineType = string;

declare type NumberGridType = (n: number) => number;
declare type GridType = (n: number) => string;
