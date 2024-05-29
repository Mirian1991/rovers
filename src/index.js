import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global/reset.css"
import './index.css';
import "./components/header/header.css";
import "./components/footer/footer.css";
import "./components/header/headercomponents/searchbar.css";
import "./components/header/headercomponents/login.css";
import {App} from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 