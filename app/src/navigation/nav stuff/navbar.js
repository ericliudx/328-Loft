import { useState } from "react";
import NavbarButton from "./navbar_button.js";
import menuIcon from "./menu.svg";
import "./navbar.css";


function Navbar() {
    const [smallNavBar, setSmallNavBar] = useState(false);

    const handleMenu = () => {
        setSmallNavBar(!smallNavBar);
    }

    return (
        <div className="navbar-container" id="myTopnav">
            <div className={`button-container ${smallNavBar ? "hidden" : "show"}`}>
                <NavbarButton text="Home" />
            </div>
            <div className={`button-container ${smallNavBar ? "hidden" : "show"}`}>
                <NavbarButton text="News" />
            </div>
            <div className={`button-container ${smallNavBar ? "hidden" : "show"}`}>
                <NavbarButton text="Contact" />
            </div>
            <div className={`button-container ${smallNavBar ? "hidden" : "show"}`}>
                <NavbarButton text="About" />
            </div>
            <img className="icon" onClick={handleMenu} src={menuIcon} alt="menu icon" />
        </div>
    );
}

export default Navbar;