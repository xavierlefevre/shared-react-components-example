/*-------------------------------------------------------
  This file and folder is only an example. 
  Delete the folder in case you don't need it.
  Put here all Flow types that correspond to the API calls result
--------------------------------------------------------*/

// @flow
/* eslint-disable no-undef */

declare type <%= capitalizeName %>ApiResponseType = {
  entities: [],
  intent: string,
  nlu: string,
  sentence_corrected: string,
  sentence_translated: string,
};
