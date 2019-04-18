// @flow

/*
 *  This component is exposed to be used outside of ComponentStudio, change it carefully
 */

import * as React from 'react';
import uniqueId from 'lodash/uniqueId';
import { ThemeProvider } from 'styled-components';
import DefaultStyleTheme from './Checkbox.theme';
import Style from './Checkbox.style';

const Checkbox = (props: CheckboxPropsType) => {
  const checkboxDefaultId = props.id || uniqueId('checkbox_');

  const additionnalProps = {};
  if (props.name) {
    additionnalProps.name = props.name;
  }

  return (
    // $FlowFixMe props.theme cannot be undefined because there is a default props
    <ThemeProvider theme={props.theme}>
      <Style.Container htmlFor={checkboxDefaultId} className={props.className}>
        <input
          type="checkbox"
          id={checkboxDefaultId}
          onChange={props.onChange}
          checked={props.checked}
          disabled={props.disabled}
          {...additionnalProps}
        />
        <Style.Checkbox
          checked={props.checked}
          disabled={props.disabled}
          showError={props.showError}
        />
        {props.children ? <Style.Label>{props.children}</Style.Label> : null}
      </Style.Container>
    </ThemeProvider>
  );
};

Checkbox.defaultProps = {
  disabled: false,
  className: '',
  id: null,
  onChange: () => {},
  theme: DefaultStyleTheme,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
