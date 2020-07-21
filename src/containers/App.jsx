import 'typeface-press-start-2p';
import 'typeface-vt323';
import 'typeface-major-mono-display';

import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { I18nextProvider } from "react-i18next";
import common_en from "../translations/en/common.json";
import common_es from "../translations/es/common.json";

import i18next from "i18next";

import store from '../store/store';

import Layout from './Layout';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    es: {
      common: common_es
    },
  },
});

const App = ({ children }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <Layout>
        {children}
      </Layout>
    </I18nextProvider>
  </Provider>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
