// @flow

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { themeMerger } from '@shared-components/atoms';

import Style from './style';

type PropsType = {
  fundData: ?Object,
  showTitle?: ?boolean,
};

export default (props: PropsType) => {
  if (!props.fundData) {
    return null;
  }

  return (
    <Style.Container>
      <ThemeProvider
        theme={parentTheme =>
          themeMerger('widgetTemplate', 'title', 'widgetTitle')(parentTheme)
        }
      >
        {props.showTitle && (
          <di>
            <FormattedMessage id="TEMPLATE_WIDGET_TITLE" />
          </di>
        )}
      </ThemeProvider>
      <Style.Data>{JSON.stringify(props.fundData, null, 2)}</Style.Data>
    </Style.Container>
  );
};
