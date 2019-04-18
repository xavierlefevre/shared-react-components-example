// flow-typed signature: e95e6950417c4e6e54ad760c67306c7e
// flow-typed version: 47ccb61898/react-onclickoutside_v6.x.x/flow_>=v0.57.1

declare module 'react-onclickoutside' {
  declare export var IGNORE_CLASS_NAME: 'ignore-react-onclickoutside';

  declare export default function onClickOutsideHOC<Props: {}>(
    WrappedComponent: React$ComponentType<Props>,
    config?: { excludeScrollbar?: boolean }):
      React$ComponentType<$Diff<Props, {
        disableOnClickOutside?: () => void,
        enableOnClickOutside?: () => void,
        eventTypes?: Array<string>,
        excludeScrollbar?: boolean,
        outsideClickIgnoreClass?: string,
        preventDefault?: boolean,
        stopPropagation?: boolean,
      }>>;
}
