// @flow

declare type TextAreaPropsType = {|
  className?: string,
  name?: string,
  onBlur?: (event: EventType) => void,
  onChange?: (event: EventType) => void,
  placeholderLabel: string,
  showError?: boolean,
  value?: any,
  width?: number,
  height?: number,
  disableResize?: boolean,
|};
