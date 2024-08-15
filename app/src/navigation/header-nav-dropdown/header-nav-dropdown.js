import "./header-nav-dropdown.css";
import React, { useState } from "react";

function HeaderNavDropdown({title, text, picture, bold, link}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="header-nav-dropdown">
            <a
                href={link}
                className="header-nav-dropdown-button"
                onClick={toggleDropdown}
            >
                {text} <span className={`fas fa-caret-down ${isOpen ? 'rotated' : ''}`}></span>
            </a>
            <ul className="dropdown_menu" style={{ display: isOpen ? 'block' : 'none' }}>
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

        </div>

    );
}

export default HeaderNavDropdown;
