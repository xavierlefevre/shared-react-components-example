// @flow

declare type DropdownPropsType = {|
  items: ?{
    [string]: string,
  },
  onSelectedItemUpdate: string => void,
  defaultSelectedItem: ?string,
  disabled?: boolean,
|};
