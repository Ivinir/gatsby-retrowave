import { createStore } from 'redux';
import { DEBUG } from 'gatsby-env-variables';
import rootReducer from '../reducers/rootReducer';

const isDebug = DEBUG;
let store = null;
if (isDebug) {
  store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  store = createStore(rootReducer);
}

export default store;
