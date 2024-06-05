import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global/reset.css"
import './index.css';
import "./components/header/header.css";
import "./components/footer/footer.css";
import "./pages/searchbar/searchbar.css";
import "./pages/login/login.css";
import "./pages/basket/basket.css";
import "./global/changelangs/changelangs.css";
import "./pages/homepage/homepage.css";
import "./pages/section1/sectionone.css";
import "./pages/section2/sectiontwo.css";
import "./pages/section3/sectionthree.css";
import "./pages/notfoundpage/notfoundpage.css";
import "./pages/aboutuspage/aboutuspage.css";
import "./pages/questionpage/questionpage.css";
import "./pages/privecypage/privecypage.css";
import "./pages/deliverypage/deliverypage.css";
import "./pages/helppage/helppage.css";
import "./pages/contactuspage/contactuspage.css";

import {App} from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 