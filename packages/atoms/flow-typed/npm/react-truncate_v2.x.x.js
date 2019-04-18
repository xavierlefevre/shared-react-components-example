// flow-typed signature: c91f0cb89659ff31afa73b97322d0174
// flow-typed version: a5b6184080/react-truncate_v2.x.x/flow_>=v0.25.x

// @flow

declare module 'react-truncate' {
  declare export type TruncateProps = {
    lines?: number | false,
    ellipsis?: React$Node,
    trimWhitespace?: boolean,
    children: React$Node,
    onTruncate?: (isTruncated: boolean) => void
  };

  declare export default class Truncate extends React$Component<TruncateProps> {}
}
