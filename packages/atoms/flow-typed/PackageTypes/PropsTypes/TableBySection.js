// @flow

declare type RowsDataType = { [string]: any };

declare type TableBySectionPropsType = {|
  className?: string,
  columnsComponents: ColumnType[],
  numberOfShownLines?: number,
  orderedSections?: ?(string[]),
  resetScroll?: () => void,
  headerTopLimit?: number,
  enableTableHeaderSticky?: boolean,
  rowsDataBySection: ?RowsDataType,
  rowComponent: (
    rowData: string,
    columnsComponents: ColumnType[],
    hasFavorite: boolean
  ) => React$Element<*>,
  sectionHeaderComponent: (
    title: string,
    productIds: ?(string[])
  ) => React$Element<*>,
|};
