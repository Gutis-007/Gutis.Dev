import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './head';
import './index.css';
import Sobremim from './sobremim';
import Blog from './projetos';
import Tecnologias from './Tecnologias';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Sobremim />
    <Tecnologias/>
    <Blog/>
  </React.StrictMode>
);