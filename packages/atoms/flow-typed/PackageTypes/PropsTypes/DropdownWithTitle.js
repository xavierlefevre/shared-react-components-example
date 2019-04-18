// @flow

declare type DropdownWithTitlePropsType = {|
  backgroundColor?: string,
  changeValue: (option: OptionType) => void,
  className?: string,
  disabled?: boolean,
  isError?: boolean,
  label?: string,
  options: OptionType[],
  value?: ?(OptionType | OptionsType),
  width?: number,
|};
