// @flow

declare type NewTextAreaPropsType = {|
    name?: string,
    onChange?: (event: EventType) => void,
    placeholder?: string,
    label?: string,
    showError?: boolean,
    showValidate?: boolean,
    disabled?: boolean,
    value?: any,
    width?: number,
    height?: number,
    disableResize?: boolean,
|};
