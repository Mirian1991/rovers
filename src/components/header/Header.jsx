import React from 'react';
import { Searchbar } from "../../pages/searchbar/Searchbar";
import { Login } from "../../pages/login/Login";
import { Changelangs } from "../../global/changelangs/Changelangs";
import { Categories } from "../../pages/categories/Categories";
import testicon from "../../global/Images/headericons/shoes.svg";
import watchicon from "../../global/Images/headericons/watch.svg";
import bagicon from "../../global/Images/headericons/bags.svg";
import dishesicon from "../../global/Images/headericons/dishes.svg";
import homeappliancesicon from "../../global/Images/headericons/appliances.svg";
import medicalicon from "../../global/Images/headericons/medical.svg";
import smartphoneicon from "../../global/Images/headericons/smartphone.svg";
import toolsicon from "../../global/Images/headericons/tools.svg";
import Mainlogo from "../../global/Images/main-logo/rovers.svg";

export const Header = () => {
    return (
        <div className="header-container">
            <div className="header-first">
            <a href="/" className="header-logo"> rovers </a>
                <h1>Category List</h1>
                <Categories />
                <Searchbar />
                <Login />
                <Changelangs />
            </div>
            <div className="header-second">
                <ul className="header-second-ul">
                    <li className="header-second-flex">
                        <img src={testicon} alt="shoes icon" width="23px" height="23px" />
                        <a href="#">Shoes</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={watchicon} alt="watches icon" width="20px" height="20px" />
                        <a href="#">Watches</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={bagicon} alt="bags icon" width="20px" height="20px" />
                        <a href="#">Bags</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={dishesicon} alt="dishes icon" width="20px" height="20px" />
                        <a href="#">Dishes</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={homeappliancesicon} alt="home appliances icon" width="20px" height="20px" />
                        <a href="#">Home Appliances</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={medicalicon} alt="medical corner icon" width="20px" height="20px" />
                        <a href="#">Medical Corner</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={smartphoneicon} alt="smartphone icon" width="20px" height="20px" />
                        <a href="#">Smartphone</a>
                    </li>
                    <li className="header-second-flex">
                        <img src={toolsicon} alt="tools icon" width="20px" height="20px" />
                        <a href="#">Tools</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
