import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import GlobalStyles from './globalStyles';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);


