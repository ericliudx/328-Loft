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
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                    </div>
                    <div className="home-page-menu-items-column right-column">
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
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

