// @flow

declare type RadioPropsType = {|
  checked: boolean,
  children: React.Node,
  className?: string,
  disabled?: boolean,
  id: string,
  isError?: boolean,
  onChange: EventType => void,
  theme?: any,
  value: string,
|};
