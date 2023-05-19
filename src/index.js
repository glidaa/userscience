//userscience/src/index.js
// import Amplify from 'aws-amplify';
// import config from './aws-exports';

// Amplify.configure(config);

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
);

reportWebVitals();
