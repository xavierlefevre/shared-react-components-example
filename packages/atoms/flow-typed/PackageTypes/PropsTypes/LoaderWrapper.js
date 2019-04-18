// @flow

declare type LoaderWrapperPropsType = {|
  children: React$Element<*> | React.ChildrenArray<*>,
  className?: string,
  color?: string,
  elementName: string | string[],
  isLoading?: boolean,
  loaderSize?: number,
  loaderStatePath?: string[],
|};

declare type LoaderWrapperComponentPropsType = {|
  children: React$Element<*> | React.ChildrenArray<*>,
  className?: string,
  color?: string,
  elementName: string | string[],
  isLoading: boolean,
  loaderSize?: number,
  loaderStatePath?: string[],
|};
