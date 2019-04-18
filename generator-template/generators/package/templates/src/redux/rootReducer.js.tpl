// @flow

import { combineReducers } from 'redux';

import { reducer as <%= capitalizeName %> } from './<%= capitalizeName %>';

export default combineReducers({ <%= capitalizeName %> });
