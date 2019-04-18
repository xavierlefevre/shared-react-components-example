// @flow

type HOCCellComponent<T> = T | (any => T);

declare type ColumnType = {|
  columnName: string | React$Element<*>,
  HeaderComponent: HOCCellComponent<React$Element<*>>,
  CellComponent: HOCCellComponent<React$Element<*>>,
|};

declare type TablePropsType = {|
  className?: string,
  columnsComponents: ColumnType[],
  isScrollable?: boolean,
  rowsData: { [string]: any }[],
  rowComponent: (
    rowData: { [string]: any },
    columnsComponents: ColumnType[],
    hasFavorite: boolean
  ) => React$Element<*>,
|};
