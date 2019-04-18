// @flow

import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { LoadingIndicator } from '@shared-components/atoms';

export const Loader = () => <LoadingIndicator centered />;

export const FailurePlaceholder = () => (
  <FormattedMessage id="FUNDSHEET_ERROR_FAILED_DATA" />
);

type PlaceholderWrapperPropsType = {
  loading: boolean,
  failed: boolean,
  children: React.Node,
};

export const PlaceholderWrapper = (props: PlaceholderWrapperPropsType) => {
  if (props.loading) {
    return <Loader />;
  }
  if (props.failed) {
    return <FailurePlaceholder />;
  }
  return <React.Fragment>{props.children}</React.Fragment>;
};
