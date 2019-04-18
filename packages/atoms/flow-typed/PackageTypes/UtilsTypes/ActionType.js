// @flow

declare type ActionType<PayloadType> = { type: string } & PayloadType;

declare type ActionCreatorType<PayloadType> = (args: any) => ActionType<PayloadType>;
