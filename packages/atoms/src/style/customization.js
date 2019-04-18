// @flow

import * as React from 'react';
import { withTheme } from 'styled-components';
import type { Theme } from 'styled-components';

/*
 * This function is used within a component. Its purpose is to overwrite the
 * theme for children widgets.
 */
export const themeMerger = (
  currentComponent: string,
  subThemeKey: string,
  themedComponent: string
) => (parentTheme: Object) => {
  if (
    parentTheme &&
    parentTheme[currentComponent] &&
    parentTheme[currentComponent][subThemeKey]
  ) {
    return {
      ...parentTheme,
      [themedComponent]: {
        ...parentTheme[themedComponent],
        ...parentTheme[currentComponent][subThemeKey],
      },
    };
  }
  return parentTheme || { [themedComponent]: {} };
};

/*
 * This mechanic with several components is necessary due to the fact
 * that only styled-components and components wrapped in 'withTheme' actually
 * receive the theme..
 */
const ComponentThemeBuilder = props => {
  const { render, name, theme, defaultTheme } = props;
  const specificTheme = (theme && theme[name]) || {};
  const finalTheme = {
    ...defaultTheme,
    ...specificTheme,
  };
  return render(finalTheme);
};

const ComponentThemeProvider = withTheme(ComponentThemeBuilder);

ComponentThemeBuilder.defaultProps = {
  theme: {},
};

type ConfigType = {
  defaultTheme: Theme,
  name: string,
};

export const withDefaultTheme = (
  WrappedComponent: React.Node,
  config: ConfigType
) => (props: any) => (
  <ComponentThemeProvider
    defaultTheme={config.defaultTheme}
    name={config.name}
    render={theme => <WrappedComponent {...props} theme={theme} />}
  />
);
