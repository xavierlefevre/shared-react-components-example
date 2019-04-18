// @flow

type CommonPropsType = {
  autoFocus?: boolean,
  className?: string,
  disabled?: boolean,
  name?: string,
  onBlur?: (event: EventType) => void,
  placeholderLabel?: string,
  showError?: boolean,
  showValidate?: boolean,
  step?: number,
  tabIndex?: number,
  unit?: string,
  width?: number,
};

declare type SimpleInputPropsType = CommonPropsType & {
  value?: any,
  type: InputType,
  onChange?: (event: EventType) => void,
  onFocus?: (envent: EventType) => void,
};

declare type NewInputPropsType = CommonPropsType & {
  value?: any,
  type: InputType,
  placeholder?: string,
  label?: string,
  onChange?: (event: EventType) => void,
  onFocus?: (event: EventType) => void,
};

declare type SharedInputPropsType = NewInputPropsType & {
  iconName?: string,
  autoComplete?: string,
  onClick?: (event: EventType) => void,
};

declare type InputPropsType = CommonPropsType & {
  value?: any,
  type: InputType,
  onChange?: (event: EventType) => void,
};

declare type CurrencyInputPropsType = CommonPropsType & {
  value?: any,
  currency?: string,
  onChange?: (event: EventType) => void,
};

declare type NumberInputPropsType = CommonPropsType & {
  value: string,
  onChange: (e: EventType) => void,
};
