import "./home_page.css";
import img1 from "../images/spicy boiled fish.jpg";
import img2 from "../images/tastetestpeople.jpg";

import img3 from "../images/spicyboiledfishrice.jpg";
import img4 from "../images/bulgogifinal.jpg";
import menu_item_3 from "../images/spicycucumbersalad.jpg"
import img5 from "../images/bromance.jpg";
import img6 from "../images/chefhorizontal.jpg";
import img7 from "../images/spice prep.jpg";

import Header from "../navigation/header/header";
import HomePage1 from "./home-page-1/home-page-1";
import HomePageMenu from "./home-page-menu/home-page-menu";
import Footer from "../navigation/footer/footer";
import HomePageMeetChefs from "./home-page-meet-chefs/home-page-meet-chefs";

function HomePage() {
    return (
        <div className="home-page-container">
            <Header/>
            <HomePage1 image = {img1}/>
            <div className="home-page-2-container">
                <img className="home-page-2-img" src={img2}></img>
                <div className="home-page-2-text-container">
                    <div className="home-page-2-title">
                        Unbeatable Affordability with Uncompromising Flavor
                    </div>
                    <div className="home-page-2-about">
                        At 328 Loft, our mission is to introduce you to our favorite flavors, without the burdening costs and with a positive atmosphere. 
                    </div>
                </div>
            </div>
            <div className="home-page-3-container">
                <div className="home-page-3-title">
                    A Taste of Our Hottest Items
                </div>

                <div className="home-page-3-menu-imgs">
                    <div className="home-page-3-img-text-container">
                        <a href="#" className="home-page-3-link">
                            <img className="home-page-3-img" src={img3}></img>
                        </a>
                        <div className="home-page-3-img-text">Spicy Boiled Fish</div>
                    </div>
                    <div className="home-page-3-img-text-container">
                        <a href="#" className="home-page-3-link">
                            <img className="home-page-3-img" src={img4}></img>
                        </a>
                        <div className="home-page-3-img-text">Beef Bulgogi</div>
                    </div>
                    <div className="home-page-3-img-text-container">
                        <a href="#" className="home-page-3-link">
                            <img className="home-page-3-img" src={menu_item_3}></img>
                        </a>
                        <div className="home-page-3-img-text">Cold Cucumber Salad</div>
                    </div>
                </div>
            </div>
            
            <HomePageMenu image = {img5}/>
            <HomePageMeetChefs image = {img6}/>
            <HomePage1 image = {img7}/>
            <Footer/>
        </div>
    );
}

export default HomePage;
