// @flow

declare type LatestNavType = { nav: ?number, date: string, currency: string }[];

declare type ModelizedNavTableType = {
  assetClassCode: string,
  navInfo: ?{
    compartSize: ?number,
    compartmentCurrency: ?string,
    shareSize: ?number,
    sharesNumber: ?number,
    currency: string,
    date: string,
  },
  disclaimers: {
    info: string,
    lvnav?: string,
  },
  latestNav: LatestNavType,
  latestProtectedNav: LatestNavType,
  latestLVNav: LatestNavType,
  applicationPrice: ?{
    [string]: {
      currency: string,
      date: string,
      value: number,
    },
  },
  redemptionPrice: ?{
    [string]: {
      currency: string,
      date: string,
      value: number,
    },
  },
};

declare type NavTableModelizerType = (
  apiResponse: APIFundsheetResponseType,
  currentCurrency?: string
) => ?ModelizedNavTableType;
