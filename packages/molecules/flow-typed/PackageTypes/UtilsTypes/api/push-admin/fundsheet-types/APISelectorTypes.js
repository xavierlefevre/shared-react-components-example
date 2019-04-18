import { SELECTOR_TYPES } from 'shared-components-molecules/fund/components/headerAndSelector/Selector/constants';

declare type SelectorType =
  | SELECTOR_TYPES.CURRENCY_TYPE
  | SELECTOR_TYPES.SHARE_TYPE;

declare type SelectorItemsListType = {
  [string]: string,
};

declare type SelectorDataType = {
  itemsList: SelectorItemsListType,
  defaultItem: ?string,
};
