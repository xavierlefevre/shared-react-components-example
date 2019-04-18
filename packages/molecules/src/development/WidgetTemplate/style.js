// @flow

import styled from 'styled-components';
import { withDefaultTheme } from '@shared-components/atoms';

import DefaultTheme from './theme';

const themeConfig = {
  defaultTheme: DefaultTheme,
  name: 'widgetTemplate',
};

export default {
  Container: withDefaultTheme(
    styled.div`
      font-family: ${props => props.theme.fontFamily};
      font-size: ${props => props.theme.fontSize};
      color: ${props => props.theme.fontColor};
      line-height: 18px;
    `,
    themeConfig
  ),
  Data: withDefaultTheme(
    styled.div`
      font-weight: 300;
    `,
    themeConfig
  ),
};
