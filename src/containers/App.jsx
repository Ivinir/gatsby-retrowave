import 'typeface-press-start-2p';
import 'typeface-vt323';
import 'typeface-major-mono-display';

import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import store from '../store/store';

import Layout from './Layout';

const App = ({ children }) => (
  <Provider store={store}>
    <Layout>
      { children }
    </Layout>
  </Provider>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
