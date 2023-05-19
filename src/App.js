// userscience/src/App.js
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';

import Home from './pages/Home';

Amplify.configure(awsconfig);

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
