// @flow
/* eslint-disable no-undef */

declare type EventType = {
  target: {
    value: string,
    select: () => void,
  },
  preventDefault: () => void,
};
