import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { GeneralContextProvider } from './Context/GeneralContext';
import { LoginPage } from './pages/LoginPage';
import { Notfound } from './pages/Notfound';
import { Students } from './pages/Students';
import { Teachers } from './pages/Teachers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralContextProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<App />}>
            <Route path="students" element={<Students />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GeneralContextProvider>
  </React.StrictMode>,
);
