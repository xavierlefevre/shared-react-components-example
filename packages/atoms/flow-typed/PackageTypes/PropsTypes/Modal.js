// @flow

declare type ModalPropsType = {|
  closeOnOutsideClick?: boolean,
  children?: ?React$Node,
  isOpen: boolean,
  onCloseClick: () => void,
|};
