// @flow

import React from 'react';
import { Loader } from 'react-loaders';
import 'loaders.css/loaders.min.css';

import { SharedComponentsColors } from 'shared-components-atoms/style';

import Style from './LoadingIndicator.style';

const LoadingIndicator = (props: LoadingIndicatorPropsType) => (
  <Style {...props}>
    <Loader color={props.color} type="ball-spin-fade-loader" />
  </Style>
);

LoadingIndicator.defaultProps = {
  className: null,
  color: SharedComponentsColors.brandGreen,
  loaderSize: 70,
};

export default LoadingIndicator;
