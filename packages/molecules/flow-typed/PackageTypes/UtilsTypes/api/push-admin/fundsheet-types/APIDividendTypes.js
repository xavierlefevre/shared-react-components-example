declare type DividendType = {
  execution_date?: string,
  vl_value?: number,
  payment_date?: string,
  amount?: number,
  currency?: string,
};

declare type ModelizedDividendType = DividendType;

declare type LatestDividendType = {
  [string]: ?DividendType,
};
