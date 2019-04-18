// @flow

declare type APIWithoutType = {|
  value: ?number,
  start_date: ?string,
|};

declare type APIWithType = {|
  value: ?number,
  start_date: ?string,
  type: ?string,
|};

declare type APIFeeType = APIWithoutType | APIWithType;

declare type withoutType = {
  value: ?number,
  startDate: ?string,
};

declare type withType = {
  value: ?number,
  startDate: ?string,
  type: ?string,
};

declare type FeeType = withoutType | withType;
