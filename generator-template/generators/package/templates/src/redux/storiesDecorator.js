import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

export const withReduxProvider = story => (
  <Provider store={store}>{story()}</Provider>
);
