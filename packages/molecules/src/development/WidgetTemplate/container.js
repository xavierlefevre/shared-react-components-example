// @flow

import React from 'react';

import { PlaceholderWrapper } from 'shared-components-molecules/sharedComponents';

import WidgetTemplate from './component';

type PropsType = {
  fundsheetParams: FundsheetParamsType,
  showTitle?: ?boolean,
};

type StateType = {
  loading: boolean,
  failed: boolean,
  fundData: ?Object,
};

export const widgetTemplateName = 'WidgetTemplate';

export default class Container extends React.Component<PropsType, StateType> {
  state = {
    fundData: null,
    loading: true,
    failed: false,
  };

  render() {
    const { loading, failed, fundData } = this.state;
    return (
      <PlaceholderWrapper loading={loading} failed={failed}>
        <WidgetTemplate fundData={fundData} showTitle={this.props.showTitle} />
      </PlaceholderWrapper>
    );
  }
}
