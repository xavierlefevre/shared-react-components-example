// @flow

export const modelize<%= capitalizeName %>Response = (
  apiResponse: <%= capitalizeName %>ApiResponseType
): <%= capitalizeName %>ModelType => ({
  keyOne: apiResponse,
});
