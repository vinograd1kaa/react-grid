import React from 'react';
import App from './App';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import {createRoot} from 'react-dom/client';
import GlobalStyles from './globalStyles';

const root = createRoot(document.getElementById('root')!);

root.render(
  <I18nextProvider i18n={i18n}>
    <GlobalStyles />
    <App />
  </I18nextProvider>
);


