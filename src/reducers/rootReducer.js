import { combineReducers } from 'redux';

import someReducer from './someReducer';
import windowsReducer from './windowsReducer';
import startMenuReducer from './startMenuReducer';

export default combineReducers({
  someReducer,
  windowsReducer,
  startMenuReducer
});
