import "./home-page-meet-chefs.css";
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePageMeetChefs({image}){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/food-page');
    };
    return (
        <div className="home-page-meet-chefs-container">
            <img className="home-page-chefs-picture" src={image}>

            </img>
            <div className="home-page-chefs-text">
                <div className="home-page-chefs-title">
                    Our Story
                </div>
                <div className="home-page-chefs-body">
                    What started just as two friends with a passion for cooking for others is now realized in 328 Loft. Eric Liu and Alexander Feng have both extensively refined their skill in cooking through countless invalueable experiences. Both understanding that food is one of the best, if not the best, way to fellowship with others, this project was born as a means to connect people and as an outlet for their passion of cooking.
                </div>
                <button 
                className="home-page-chefs-button"
                onClick={handleClick}>Visit Our About Page</button>
            </div>
        </div>
    );
}

export default HomePageMeetChefs;