/*-------------------------------------------------------
  This file and folder is only an example. 
  Delete the folder in case you don't need it.
  Put here all Flow types that correspond to the Redux States
--------------------------------------------------------*/

// @flow
/* eslint-disable no-undef */

declare type <%= capitalizeName %>StateType = {
  fooList: { [string]: number },
  // This part is an example when using redux-async-action-factory
  // https://github.com/bamlab/redux-async-actions-factory
  requests: {
    [string]: {
      loading: boolean,
      failed: boolean,
    },
  },
};
