// @flow

import styled from 'styled-components';

import {
  SharedComponentsColors,
  typography,
  Grid,
} from 'shared-components-atoms/style';

import Button from './Button.component';

type StyledPropsType = {
  disabled: boolean,
  light: boolean,
  small: boolean,
};

export default styled(Button)`
  ${({ light, disabled, small }: StyledPropsType) => `
    border: 1px solid ${SharedComponentsColors.brandGreen};
    border-radius: 3px;
    ${disabled ? '' : 'cursor: pointer;'}
    height: ${small ? '18px' : Grid(10)};
    line-height: 17px;
    ${
      light
        ? `
      ${typography.lightText}
      background-color: transparent;
      color: ${SharedComponentsColors.brandGreen};
    `
        : `${typography.normalText}
      background-color: ${SharedComponentsColors.brandGreen};
      color: ${SharedComponentsColors.white};
    `
    }
    ${
      small
        ? `
        font-weight: 300;
        font-size: 12px
        `
        : `width: 100%`
    }
    :disabled {
      background: #8ED0AF;
      border-color: #8ED0AF;
    }`};
`;
