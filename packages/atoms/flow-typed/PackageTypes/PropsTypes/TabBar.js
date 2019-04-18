// @flow

declare type TabBarPropsType = {|
  children?: ?React$Node,
  hideBottomTriangleOnSelectedTab?: boolean,
  onChange: string => void,
  value: string,
|};
