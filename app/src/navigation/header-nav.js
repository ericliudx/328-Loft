import React, { useState } from 'react';
import "./header-nav.css";
import NavbarButton from './nav stuff/navbar_button';
import HeaderNavButton from './header-nav-button/header-nav-button';
import HeaderNavDropdown from './header-nav-dropdown/header-nav-dropdown';
import HeaderNavIcon from './header-nav-icons/header-nav-icon';

function HeaderNavigator({title, text, picture, menuVisible}) {
    const [boldButtonText, setSmallNavBar] = useState(true);
    const [showSearch1, setShowSearch1] = useState(false);

    return (
        <div 
            className="headerbar"
            style={{ right: menuVisible ? '0' : '-100%' }} 
        >
            <div className='account'>
                <div className='icon-list-container'>
                    <div className='icon-container'>
                        <HeaderNavIcon link='#' name='fa-solid fa-house-chimney' id=''/>
                    </div>
                    <div className='icon-container'>
                        <HeaderNavIcon link='#' name='fa-solid fa-magnifying-glass searchicon' id='searchicon1'/>
                    </div>
                    <div className='icon-container'>
                        <HeaderNavIcon link='#' name='fa-solid fa-user' id='user-mb'/>
                    </div>
                </div>
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