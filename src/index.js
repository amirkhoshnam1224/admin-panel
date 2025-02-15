import React from 'react';
import { createRoot } from 'react-dom/client'; // تغییر در این خط
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')); // تغییر در این خط
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();


