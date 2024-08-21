import React, {useState, useEffect} from "react";
import "./header.css";
import logo1 from "../../images/logos/logo2.jpg";
import HeaderNavigator from "./header-nav.js";

function Header({title, text, picture}) {

    const [menuVisible, setMenuVisible] = useState(false);
    const [showXmark, setShowXmark] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (menuVisible) {
            timeoutId = setTimeout(() => {
                setShowXmark(true);
            }, 700); // Adjust the timeout duration (in milliseconds) as needed
        } else {
            setShowXmark(false);
        }
        
        return () => clearTimeout(timeoutId); // Clean up the timeout if the component unmounts or menuVisible changes
    }, [menuVisible]);

    return (
        <header>
            <div className="header">

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
                    <div className="bar-container">
                        <i 
                            className="fa-solid fa-bars headerbar-bars" 
                            style={{ opacity: menuVisible ? 0 : 1 }}
                            onClick={() => setMenuVisible(true)}
                            ></i>
                        <i 
                            className="fa-solid fa-xmark headerbar-x" 
                            id="hdcross"
                            style={{ display: showXmark ? 'block' : 'none' }}
                            onClick={() => setMenuVisible(false)}>

                        </i>
                    </div>
                    <HeaderNavigator menuVisible={menuVisible} />

                </div>
            </div>
        
        </header>
    );
}

export default Header;