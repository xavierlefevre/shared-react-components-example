// @flow

import { type Node } from 'react';

declare type PageOverviewTagPropsType = {|
  color?: string,
  name: string,
|};

declare type PageOverviewPropsType = {|
  backgroundColor?: ?string,
  className?: string,
  date?: ?string,
  excerpt?: ?Node,
  featuredImage?: ?string,
  height: number,
  iconColor?: ?string,
  iconSlug?: ?string,
  link: string,
  readingTime?: ?number,
  showTags?: ?boolean,
  tags?: ?(PageOverviewTagPropsType[]),
  title: Node,
  width?: ?number,
|};
