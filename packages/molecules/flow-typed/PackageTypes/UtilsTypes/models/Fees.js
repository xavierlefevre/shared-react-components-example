// @flow

declare type ModelizedFeesType = {
  compartmentCurrency: ?string,
  feesTimed: {
    TER: ?{ value: ?number, startDate: ?string },
    atLaunchOngoingCharges: ?{
      value: ?number,
      startDate: ?string,
    },
    estimatedOngoingCharges: ?{
      value: ?number,
      startDate: ?string,
    },
    maximumIndirectManagementFees: ?{
      value: ?number,
      startDate: ?string,
    },
    maximumManagementFees: ?{
      value: ?number,
      startDate: ?string,
    },
    maximumRedemptionFixedFees: ?{
      value: ?number,
      startDate: ?string,
    },
    maximumSubscriptionFixedFees: ?{
      value: ?number,
      startDate: ?string,
    },
    maximumRedemptionFixedFeesAcquired: ?{
      value: ?number,
      startDate: ?string,
    },
    maximumSubscriptionFixedFeesAcquired: ?{
      value: ?number,
      startDate: ?string,
    },
    minimumInitialSubscriptionAmount: ?{
      value: ?number,
      type: ?string,
      startDate: ?string,
    },
    minimumInitialSubscriptionShareNumber: ?{
      value: ?number,
      type: ?string,
      startDate: ?string,
    },
    minimumRedemptionFixedFees: ?{
      value: ?number,
      startDate: ?string,
    },
    minimumSubscriptionFixedFees: ?{
      value: ?number,
      startDate: ?string,
    },
    minimumRedemptionFixedFeesAcquired: ?{
      value: ?number,
      startDate: ?string,
    },
    minimumSubscriptionFixedFeesAcquired: ?{
      value: ?number,
      startDate: ?string,
    },
    minimumSubsequentSubscriptionAmount: ?{
      value: ?number,
      type: ?string,
      startDate: ?string,
    },
    minimumSubsequentSubscriptionShareNumber: ?{
      value: ?number,
      type: ?string,
      startDate: ?string,
    },
    performanceFees: ?{
      value: ?number,
      startDate: ?string,
    },
    realManagementFees: ?{
      value: ?number,
      startDate: ?string,
    },
    realOngoingCharges: ?{
      value: ?number,
      startDate: ?string,
    },
    targetOngoingCharges: ?{
      value: ?number,
      startDate: ?string,
    },
  },
  fundshareCurrency: ?string,
  marketingFootnotes: ?string,
  feesComment: ?string,
};

declare type FeesModelizerType = (
  apiResponse: APIFundsheetResponseType
) => ModelizedFeesType;
