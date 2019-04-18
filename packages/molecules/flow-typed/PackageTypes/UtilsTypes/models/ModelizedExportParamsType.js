// @flow
/* eslint-disable no-undef */

declare type ExportType = 'nav' | 'dividend';

declare type ModelizedExportParamsType = {|
  currency: string,
  fundshareId: string,
|};

declare type FullExportParamsType = {|
  segment: string,
  exportType: ExportType,
  hideWidget?: boolean,
  ...ModelizedExportParamsType,
|};
