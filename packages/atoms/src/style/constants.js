// @flow

/**
 * Graphical Charter
 */
export const SharedComponentsColors: ColorsType = {
  alabaster: '#FAFAFA',
  backgroundSeparator: '#EBF7F2',
  black: '#000000',
  brandGreen: '#00965E',
  brandGreenDark: '#05462A',
  errors: '#FF4348',
  galleryGrey: '#EEEEEE',
  graphLineGreen: '#b4d021',
  grey: '#444444',
  greyBackground: '#626262',
  lightGreen: '#A2D1C1',
  lightGreyBackground: '#FBFBFB',
  lightRedErrors: '#FFEAEA',
  lighterGrey: '#DFDFDF',
  lightestGrey: 'rgba(98,98,98, 0.1)', // same as greyBackground but with 0.1 opacity
  orange: '#F1875A',
  roseWhite: '#FFF9F9',
  textContent: '#424242',
  white: '#FFFFFF',
  wildSandColor: '#F5F5F5',
  pink: '#BF114D',
  brownGrey: '#999999',
  warmGrey: '#777777',
};

/**
 * Colors associated to asset class
 */
export const assetClassColors = {
  EQ: '#c2454b',
  BL: '#61c3d7',
  BO: '#08d06F',
  MM: '#8acabb',
  CB: '#00957a',
  AO: '#f8bc95',
  RE: '#f1875a',
  FI: '#165a6f',
  safeFund: '#61696E',
};

/**
 * Typography synchronized with the UX Team (10/01/2018)
 */
export const typography = {
  mainTitle: `
    font-family: 'Lato';
    font-size: 31px;
    font-weight: 400;
    color: ${SharedComponentsColors.black};
  `,
  articleTitle: `
    font-family: 'Lato';
    font-size: 24px;
    font-weight: 400;
    color: ${SharedComponentsColors.black};
  `,
  wordpressTitle: `
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 400;
    color: ${SharedComponentsColors.black};
  `,
  fundsheetTitle: `
    font-family: 'Lato';
    font-size: 31px;
    font-weight: 400;
    color: ${SharedComponentsColors.black};
  `,
  lightText: `
    color: ${SharedComponentsColors.greyBackground};
    font-family: "Lato";
    font-size: 14px;
    font-weight: 300;
  `,
  menuActive: (color: string) => `
    font-family: 'Lato';
    font-size: 18px;
    font-weight: 400;
    color: ${color};
  `,
  menuInactive: `
    font-family: 'Lato';
    font-size: 16px;
    font-weight: 300;
    color: ${SharedComponentsColors.textContent};
  `,
  normalText: `
    color: ${SharedComponentsColors.greyBackground};
    font-family: "Lato";
    font-size: 14px;
    font-weight: 400;
  `,
  boldContent: `
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 400;
    color: ${SharedComponentsColors.textContent};
  `,
  content: `
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 300;
    color: ${SharedComponentsColors.textContent};
  `,
  disclaimer: `
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 300;
    color: ${SharedComponentsColors.textContent};
  `,
  links: (color: string) => `
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 400;
    text-decoration: underline;
    color: ${color};
  `,
  inputLabel: `
    font-family: 'Lato';
    font-size: 12px;
    font-weight: 300;
    color: ${SharedComponentsColors.textContent};
  `,
  inputValue: `
    font-family: 'Lato';
    font-size: 14px;
    font-weight: normal;
    color: ${SharedComponentsColors.black};
  `,
};

const GridSize = 5;
export const NumberGrid: NumberGridType = n => n * GridSize;
export const Grid: GridType = n => `${NumberGrid(n)}px`;

export const fixBaseline: FixBaselineType = 'margin-top: 0.2em;';

export const pageWidths = {
  tabletWidth: '850px',
  phoneWidth: '375px',
};

export const zIndex: zIndexType = {
  background: 1,
  normal: 10,
  dropdown: 100,
};

export const normalShadow: NormalShadowType =
  'box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.29);';
export const hoverShadow: HoverShadowType =
  'box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.5);';
