import React from 'react';

/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';
import { object, boolean, withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';

import {
  fundsheetParams,
  getStoriesParams,
  folderStructure as folders,
} from 'shared-components-storybook-utils'; // eslint-disable-line
import { WidgetTitleDefaultTheme } from 'shared-components-molecules/sharedComponents';

import WidgetTemplate from './container';
import WidgetTemplateDefaultTheme from './theme';

const defaultTheme = {
  widgetTemplate: {
    ...WidgetTemplateDefaultTheme,
    title: WidgetTitleDefaultTheme,
  },
  widgetTitle: WidgetTitleDefaultTheme,
};

storiesOf(`${folders.title}/${folders.development.title}`, module)
  .addDecorator(withKnobs)
  .add('Widget Template', () => {
    const { fund } = getStoriesParams('fr_FR-FR0010668145 (classic)');
    return (
      <ThemeProvider theme={object('Theme', defaultTheme)}>
        <WidgetTemplate
          fundsheetParams={object('Fundsheet params', {
            ...fundsheetParams[fund],
          })}
          showTitle={boolean('Show title', true)}
        />
      </ThemeProvider>
    );
  });
