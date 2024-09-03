import "./home-page-menu.css";
import HomePageMenuItem from "./home-page-menu-item/home-page-menu-item";

import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePageMenu({image}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/food-page');
    };

    return (
        <div className="home-page-menu-container">
            <div className="home-page-menu-left">
                <div className="home-page-menu-title">
                    Menu Favorites
                </div>
                <div className="home-page-menu-items-column-container">
                    <div className="home-page-menu-items-column">
                        <HomePageMenuItem title="Cold Cucumber Salad" body="Chopped Cucumbers tossed in a Chinese dressing mix."/>
                        <HomePageMenuItem title="Seafood Pancake" body="Crispy seafood pancake topped with squid, shrimp and green onions."/>
                        <HomePageMenuItem title="Salt and Pepper Fish" body="Chinese slow-braised pork belly."/>
                    </div>
                    <div className="home-page-menu-items-column right-column">
                        <HomePageMenuItem title="Braised Pork Belly" body="A spicy Korean stew filled with spam, sausage, ramen, and enoki mushrooms."/>
                        <HomePageMenuItem title="Korean Army Stew" body="Chinese fried fish tossed in sichuan chilis and chili peppers."/>
                        <HomePageMenuItem title="Beef Bulgogi" body="Thinly-sliced marinated beef."/>
                    </div>
                </div>

                <div className="home-page-menu-button-container">
                    <button className="home-page-menu-view-full-menu" onClick = {handleClick}>
                        <div className="home-page-menu-button-text">
                            View our full menu
                        </div>
                    </button>
                </div>

            </div>
            <img className="home-page-menu-right" src={image}></img>
        </div>
        );
    }
    
    export default HomePageMenu;

