// flow

declare type FavoritePropsType = {|
  isFavorite: ?boolean,
  toggleFavorite: any => void,
|};

declare type FavoriteParamsType = FavoritePropsType & {|
  showFavoriteButton: ?boolean,
|};
