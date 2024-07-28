import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './head';
import './index.css';
import Sobremim from './sobremim';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Sobremim />
  </React.StrictMode>
);