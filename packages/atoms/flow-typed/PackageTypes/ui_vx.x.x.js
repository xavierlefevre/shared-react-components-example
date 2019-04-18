import type { Theme } from 'styled-components';

declare type TableElementType = {|
  Cell: any,
  ProductLink: any,
  Row: any,
  SortIcon: any,
  TableCellPerformance: any,
  TableCellText: any,
  TableHeader: any,
  TableHeaderTitle: any,
|};

declare type TableActionType = {|
  columnName: string,
  tableName: string,
  isAscending: boolean,
|};

declare type isLoadingSelector = (state: string) => boolean;

declare module '@shared-components/atoms' {
  // = Components ===
  declare export var Button: Class<React$Component<ButtonPropsType>>;
  declare export var Checkbox: Class<React$Component<CheckboxPropsType>>;
  declare export var CurrencyInput: Class<
    React$Component<CurrencyInputPropsType>
  >;
  declare export var CustomDatePickerInput: Class<
    React$Component<CustomDatePickerInputPropsType>
  >;
  declare export var DatePicker: Class<React$Component<DatePickerPropsType>>;
  declare export var Dropdown: Class<React$Component<DropdownPropsType>>;
  declare export var DropdownWithTitle: Class<
    React$Component<DropdownWithTitlePropsType>
  >;
  declare export var HTMLView: Class<React$Component<HTMLViewPropsType>>;
  declare export var ExpandingBottomDrawer: Class<
    React$Component<ExpandingBottomDrawerPropsType>
  >;
  declare export var ExpansionPanel: Class<
    React$Component<ExpansionPanelPropsType>
  >;
  declare export var FormErrors: Class<React$Component<FormErrorsPropsType>>;
  declare export var FormSuccess: Class<React$Component<FormSuccessPropsType>>;
  declare export var Icon: Class<React$Component<IconPropsType>>;
  declare export var Input: Class<React$Component<InputPropsType>>;
  declare export var SimpleInput: Class<React$Component<SimpleInputPropsType>>;
  declare export var NewInput: Class<React$Component<NewInputPropsType>>;
  declare export var NumberInput: Class<React$Component<NumberInputPropsType>>;
  declare export var LinkButton: Class<React$Component<LinkButtonPropsType>>;
  declare export var LoaderWrapper: Class<
    React$Component<LoaderWrapperPropsType>
  >;
  declare export var LoadingIndicator: Class<
    React$Component<LoadingIndicatorPropsType>
  >;
  declare export var Modal: Class<React$Component<ModalPropsType>>;
  declare export var MorningStarFormatter: Class<
    React$Component<MorningStarFormatterPropsType>
  >;
  declare export var MobileSwiper: Class<
    React$Component<MobileSwiperPropsType>
  >;
  declare export var NavBar: Class<React$Component<NavBarPropsType>>;
  declare export var NavBarTab: Class<React$Component<NavBarTabPropsType>>;
  declare export var NewDropdown: Class<React$Component<NewDropdownPropsType>>;
  declare export var NewTextArea: Class<React$Component<NewTextAreaPropsType>>;
  declare export var P: Class<React$Component<PContextType>>;
  declare export var PageOverview: Class<
    React$Component<PageOverviewPropsType>
  >;
  declare export var Radio: Class<React$Component<RadioPropsType>>;
  declare export var SearchBar: Class<React$Component<SearchBarPropsType>>;
  declare export var StarRating: Class<React$Component<StarRatingPropsType>>;
  declare export var Tab: Class<React$Component<TabPropsType>>;
  declare export var TabBar: Class<React$Component<TabBarPropsType>>;
  declare export var Table: Class<React$Component<TablePropsType>>;
  declare export var TableBySection: Class<
    React$Component<TableBySectionPropsType>
  >;
  declare export var TableElement: TableElementType;
  declare export var TextArea: Class<React$Component<TextAreaPropsType>>;
  declare export var Tooltip: Class<React$Component<TooltipPropsType>>;
  declare export var BrandNewTable: Class<React$Component<any>>;
  declare export var BrandNewTableElements: {
    TableRow: Class<React$Component<any>>,
    TableHeader: Class<React$Component<any>>,
    TableBody: Class<React$Component<any>>,
    TableHeaderCell: Class<React$Component<any>>,
    TableCell: Class<React$Component<any>>,
  };
  declare export var NewDatePicker: Class<
    React$Component<NewDatePickerPropsType>
  >;

  // = Redux Loader ===
  declare export function loaderReducer(state: any, action: ActionType<*>): any;
  declare export var loaderSelectors: Object;
  declare export function withLoader(saga: any, key: string): any;
  declare export function selectIsElementListLoading(
    keys: string[],
    loadingPath: string[]
  ): isLoadingSelector;
  declare export function selectIsElementLoading(
    key: string,
    loadingPath: string[]
  ): (state: any) => boolean;
  declare export function addLoader(
    key: string
  ): {
    type: string,
    key: string,
  };
  declare export function removeLoader(
    key: string
  ): {
    type: string,
    key: string,
  };

  // = Redux Table ===
  declare export function tableActions(
    ...args: TableActionType
  ): { type: string, payload: TableActionType };
  declare export function tableReducer(state: any, action: ActionType<*>): any;
  declare export var tableSelectors: Object;

  // = Style ===
  declare export var assetClassColors: assetClassColorsType;
  declare export var SharedComponentsColors: ColorsType;
  declare export var pageWidths: pageWidthsType;
  declare export var typography: typographyType;
  declare export var zIndex: zIndexType;
  declare export var normalShadow: NormalShadowType;
  declare export var hoverShadow: HoverShadowType;
  declare export var fixBaseline: FixBaselineType;

  declare export var NumberGrid: NumberGridType;
  declare export var Grid: GridType;

  declare export function themeMerger(
    currentWidget: string,
    subThemeKey: string,
    themedWidget: string
  ): (parentTheme: Object) => Theme;

  declare export function withDefaultTheme(
    WrappedComponent: React.Node,
    config: {
      defaultTheme: Theme,
      name: string,
    }
  ): (props: any) => React$Element<any>;

  declare export var style: {
    assetClassColors: assetClassColorsType,
    SharedComponentsColors: ColorsType,
    pageWidths: pageWidthsType,
    typography: typographyType,
    zIndex: zIndexType,
    normalShadow: NormalShadowType,
    hoverShadow: HoverShadowType,
    fixBaseline: FixBaselineType,
    NumberGrid: NumberGridType,
    Grid: GridType,
    themeMerger: (
      currentWidget: string,
      subThemeKey: string,
      themedWidget: string
    ) => (parentTheme: Object) => Theme,
    withDefaultTheme: (
      WrappedComponent: React.Node,
      config: {
        defaultTheme: Theme,
        name: string,
      }
    ) => (props: any) => React$Element<any>,
  };

  // = Utils ===
  declare export function formatMoneyValueToMillion(
    number: number,
    culture: string,
    currency: ?string
  ): string;
}
