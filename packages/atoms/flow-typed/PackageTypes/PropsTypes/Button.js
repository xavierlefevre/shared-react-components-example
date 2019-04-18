// @flow

import React from 'react';

declare type ButtonPropsType = {|
  children: React.Node,
  className?: string,
  disabled?: boolean,
  light?: boolean,
  onClick?: (event: EventType) => void,
  type?: string,
  small?: boolean,
|};
