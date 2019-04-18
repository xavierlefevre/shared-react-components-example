// @flow

import styled from 'styled-components';

import { SharedComponentsColors, Grid } from 'shared-components-atoms/style';

import CheckIcon from './check-icon.svg';

const StyledCheckbox = styled.span`
  border: 2px solid
    ${props =>
      props.showError
        ? SharedComponentsColors.errors
        : SharedComponentsColors.greyBackground};
  background-color: ${props =>
    props.showError
      ? SharedComponentsColors.roseWhite
      : SharedComponentsColors.white};
  cursor: pointer;
  display: inline-block;
  height: ${Grid(3)};
  width: ${Grid(3)};
  flex-shrink: 0;

  ${props =>
    props.checked
      ? `
      background-color: ${props.theme.checkColor};
      background-image: url(${CheckIcon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 90%;
      border-color: ${props.theme.checkColor};
      `
      : ''}

  ${props =>
    props.disabled
      ? `
      background-color: #bdc3c7;
      border-color: #bdc3c7;
      cursor: default;
      `
      : ''}
`;

export default {
  Checkbox: StyledCheckbox,
  Container: styled.label`
    align-items: center;
    display: flex;
    cursor: pointer;

    // The IE 11 user-agent stylesheet styles input[type='checkbox'] which is
    // more specific than a class. Thus we need to use this rule to overwrite
    // the user agent stylesheet
    input[type='checkbox'] {
      display: none;
    }
  `,
  Label: styled.span`
    margin-left: ${Grid(2)};
    pointer-events: none;
  `,
};
