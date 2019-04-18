// @flow

import * as React from 'react';

const Button = (props: ButtonPropsType) => (
  <button
    disabled={props.disabled}
    onClick={props.onClick}
    type={props.type}
    className={props.className}
  >
    {props.children}
  </button>
);

Button.defaultProps = {
  disabled: false,
  children: null,
};
Button.displayName = 'Button';

export default Button;
