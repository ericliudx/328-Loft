import React, { useState } from 'react';
import "./header-nav.css";
import NavbarButton from './nav stuff/navbar_button';
import HeaderNavButton from './header-nav-button/header-nav-button';
import HeaderNavDropdown from './header-nav-dropdown/header-nav-dropdown';

function HeaderNavigator({title, text, picture, menuVisible}) {
    const [boldButtonText, setSmallNavBar] = useState(true);
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
                <div className='nav-list-container'>
                    <div
                        className="button-container"
                        style={{ fontWeight: boldButtonText ? 'bold' : 'normal' }}
                    >                        
                        <HeaderNavButton text="Home" link=""/>
                    </div>
                    <div
                        className="button-container"
                    >                        
                        <HeaderNavDropdown text="Online Menus" link="#"/>
                    </div>
                    <div
                        className="button-container"
                    >                        
                        <HeaderNavButton text="Reservations" link=""/>
                    </div>
                    <div
                        className="button-container"
                    >                        
                        <HeaderNavButton text="About" link=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderNavigator;