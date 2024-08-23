import "./home_page.css";
import img1 from "../images/img1.png";
import img2 from "../images/img1.png";

import img3 from "../images/about-4.jpg";
import img4 from "../images/about-4.jpg";
import img5 from "../images/about-4.jpg";
import img6 from "../images/about-4.jpg";
import Header from "../navigation/header/header";
import HomePage1 from "./home-page-1/home-page-1";
import HomePageMenu from "./home-page-menu/home-page-menu";
import Footer from "../navigation/footer/footer";

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
                        At Ikigai Sushi and Ramen, our mission is to introduce you to our favorite flavors using expert techniques and authentic Japanese ingredients.
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
                        <div className="home-page-3-img-text">This is Menu Item 1</div>
                    </div>
                    <div className="home-page-3-img-text-container">
                        <a href="#" className="home-page-3-link">
                            <img className="home-page-3-img" src={img4}></img>
                        </a>
                        <div className="home-page-3-img-text">This is Menu Item 2</div>
                    </div>
                    <div className="home-page-3-img-text-container">
                        <a href="#" className="home-page-3-link">
                            <img className="home-page-3-img" src={img4}></img>
                        </a>
                        <div className="home-page-3-img-text">This is Menu Item 3</div>
                    </div>
                </div>
            </div>
            
            <HomePageMenu image = {img5}/>

            <Footer/>
        </div>
    );
}

export default HomePage;
