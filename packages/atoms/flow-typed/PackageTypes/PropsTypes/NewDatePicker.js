// @flow

import type { MessageDescriptor } from 'react-intl';
import type Moment from 'moment';

declare type NewDatePickerPropsType = {
  label: string,
  maxDate?: Moment,
  minDate?: Moment,
  onChange: (newDate: Moment) => void,
  placeholder?: MessageDescriptor,
  value: Moment,
  dateColor?: string,
  dateBorderRadius?: number,
  disabled?: boolean,
  showError?: boolean,
  showValidate?: boolean,
  width?: number,
};
