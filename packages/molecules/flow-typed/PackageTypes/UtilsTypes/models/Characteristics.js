// @flow
/* eslint-disable no-undef */
import React from 'react';

declare type ModelizedCharacteristicsType = {
  apirCode: ?string,
  assetClass: ?string,
  baseCurrency: ?string,
  bench: ?string,
  bloombergCode: ?string,
  cnvCode: ?string,
  creationDate: ?string,
  delegatedManagement: ?(string[]),
  depositName: ?(string[]),
  domicile: ?string,
  financialService: ?string,
  fvniDate: ?string,
  isinCode: ?string,
  launchDate: ?string,
  legalForm: ?(string | React.Component<>),
  managementCompany: ?(string[]),
  marketingFootNotes: ?string,
  minIniSub: ?string,
  openingDate: ?string,
  precompteMobilier: ?(string | React.Component<>),
  registrationCountries: ?(string[]),
  reutersCode: ?string,
  telekursCode: ?string,
  tob: ?string,
  ucits: ?string,
  wknCode: ?string,
};

declare type CharacteristicsModelizerType = (
  APIFundsheetResponseType
) => ModelizedCharacteristicsType;
