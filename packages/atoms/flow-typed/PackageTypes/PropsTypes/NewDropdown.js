// @flow

declare type NewDropdownPropsType = {|
    backgroundColor?: string,
    onChange: (option: OptionType) => void,
    className?: string,
    isDisabled?: boolean,
    isError?: boolean,
    label?: string,
    placeholder?: string,
    options: OptionType[],
    value?: ?string,
    width?: number,
|};
