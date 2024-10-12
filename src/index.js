import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Totalmente from './App.js';


// Asigură-te că fișierul HTML are un element cu ID-ul 'root'
const continut = ReactDOM.createRoot(document.getElementById('continut'));
continut.render(
  <React.StrictMode>
    <Totalmente />
  </React.StrictMode>
);
