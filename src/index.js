import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Entre from './Entre';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Utilisez useState pour gérer l'état de l'authentification (true/false)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Entre/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
