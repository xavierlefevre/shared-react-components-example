// @flow

declare type ApplicationSegmentsType = Array<{
  country: string,
  category: string,
  denomination: string,
  segment_langs: Array<{ locale: string }>,
}>;

declare type SignupInfoType = {|
  country: string,
  language: string,
  denomination: string,
  category: string,
  firstname: string,
  lastname: string,
  email: string,
  uid: string,
  password: string,
|};

declare type RouterType = {
  location: LocationType,
  push: (path: string) => void,
  goBack: () => void,
};

declare type LocationType = {
  action: string,
  basename: string,
  hash: string,
  key: string,
  pathname: string,
  query: {
    [key: string]: string,
  },
  search: string,
  state: Object,
};
