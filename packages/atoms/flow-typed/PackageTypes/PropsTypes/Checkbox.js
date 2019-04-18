// @flow

declare type CheckboxPropsType = {
  checked: ?boolean,
  children?: React$Node,
  className?: string,
  disabled?: boolean,
  name?: string,
  theme?: any,
  id?: string,
  onChange: EventType => void,
  showError?: boolean,
};
