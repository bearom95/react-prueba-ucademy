import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { App } from './App';
import { LoginPage } from './pages/LoginPage';
import { Notfound } from './pages/Notfound';
import { Students } from './pages/Students';
import { Teachers } from './pages/Teachers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<LoginPage />} />
          <Route path="dashboard/students" element={<Students />} />
          <Route path="dashboard/teachers" element={<Teachers />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
