// @flow

import type { MessageDescriptor } from 'react-intl';
import type Moment from 'moment';

declare type DatePickerPropsType = {
  label: React$Node,
  maxDate?: Moment,
  minDate?: Moment,
  onChange: (newDate: Moment) => void,
  placeholder?: MessageDescriptor,
  value: Moment,
  dateColor?: string,
  dateBorderRadius?: number,
};
