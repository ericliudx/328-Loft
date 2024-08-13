import React, { useState } from 'react';
import "./header-navigator.css";

function HeaderNavigator({title, text, picture, menuVisible}) {

    const [showSearch1, setShowSearch1] = useState(false);
    return (
        <div 
            className="headerbar"
            style={{ right: menuVisible ? '0' : '-100%' }} 
        >
            <div className="account">
                <ul>
                    <a href="#">
                        <li>
                            <i className="fa-solid fa-house-chimney"></i>
                        </li>
                    </a>
                    <a href="#" onClick={() => setShowSearch1(!showSearch1)}>
                        <li>
                            <i className="fa-solid fa-magnifying-glass searchicon" id="searchicon1"></i>
                        </li>
                    </a>
                    {showSearch1 && (
                        <div className="search" id="searchinput1">
                            <input type="search" />
                            <i className="fa-solid fa-magnifying-glass searchbaricon1"></i>
                        </div>
                    )}
                    <a href="#">
                        <li>
                            <i className="fa-solid fa-user" id="user-mb"></i>
                        </li>
                    </a>
                </ul>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="">Home</a></li>
                    <li>
                        <a href="#" className="menus_btn">Online Menus <span className="fas fa-caret-down"></span></a>
                        <ul className="dropdown_menu">
                            <li>
                                <a href="chinese_menu.html">Chinese Menu</a>
                            </li>
                            <li>
                                <a href="">Korean Menu</a>
                            </li>
                            <li>
                                <a href="">Drink Menu</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="">Reservations</a></li>
                    <li><a href="">About</a></li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderNavigator;