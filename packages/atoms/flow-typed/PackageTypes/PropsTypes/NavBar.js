// @flow

declare type NavBarTabPropsType = {|
  id: string,
  label: string | React$Element<*>,
  icon?: ?React$Node,
|};

declare type NavBarPropsType = {|
  children?: ?React$Node,
  className?: string,
  onChange?: string => void,
  theme?: any,
  value: string,
  withIcons?: boolean,
|};
