// @flow
/* eslint-disable no-undef */

declare type RawDocType = {
  [string]: string,
};

declare type ParsedDocType = {
  [string]: any,
};

declare type SubscribableDocType = {
  id: string,
  language: string,
  referenceDate: string,
  type: string,
  url: string,
  version: number,
};

declare type ParsedDocsSectionsType = {
  [string]: ParsedDocType[],
};
