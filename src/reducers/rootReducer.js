import { combineReducers } from 'redux';

import someReducer from './someReducer';
import windowsReducer from './windowsReducer';

export default combineReducers({
  someReducer,
  windowsReducer
});
