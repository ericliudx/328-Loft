import React, {useState} from "react";
import "./header.css";
import logo1 from "../images/logos/logo3.jpg";
import HeaderNavigator from "./header-navigator.js";

function Header({title, text, picture}) {

    const [menuVisible, setMenuVisible] = useState(false);
    return (
        <header>
            <div className="header">
                <HeaderNavigator></HeaderNavigator>

                <div className="logo">
                    <img src={logo1} alt=""/>
                </div>

                <div className="right_side">
                    <div className="nav_bar" style={{ opacity: menuVisible ? 0 : 1 }}>
                        <li>
                            <a className="nav_bar_link" href="#">Online Menu</a>
                        </li>
                        <li>
                            <a className="nav_bar_link" href="#">Reservations</a>
                        </li>
                    </div>
                    <div className="bar">
                        <i 
                            className="fa-solid fa-bars" 
                            style={{ opacity: menuVisible ? 0 : 1 }}
                            onClick={() => setMenuVisible(true)}
                            ></i>
                        <i className="fa-solid fa-xmark" id="hdcross" onClick={() => setMenuVisible(false)}></i>
                    </div>
                    <div className="nav">
                        <ul>
                            <a href="#">
                                <li>Home</li>
                            </a>
                            <a href="#">
                                <li>Online Menu</li>
                            </a>
                            <a href="#">
                                <li>Reservations</li>
                            </a>
                            <a href="#">
                                <li>About</li>
                            </a>
                        </ul>
                    </div>

                </div>


                    <div className="account">
                        <ul>
                            <a href="#">
                                <li>
                                    <i className="fa-solid fa-house-chimney"></i>
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <i className="fa-solid fa-magnifying-glass searchicon" id="searchicon2"></i>
                                </li>
                            </a>
                            <div className="search" id="searchinput2">
                                <input type="search"/>
                                <i className="fa-solid fa-magnifying-glass searchbaricon2"></i>
                            </div>
                            <a href="#">
                                <li>
                                    <i className="fa-solid fa-user" id="user-lap"></i>
                                </li>
                            </a>
                        </ul>
                    </div>
            </div>
        
        </header>
    );
}

export default Header;