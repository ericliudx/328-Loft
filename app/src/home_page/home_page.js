import "./home_page.css";
import img1 from "../images/img1.png";
import Header from "../navigation/header/header";
import Footer from "../navigation/footer/footer";

function HomePage() {
    return (
        <div className="home-page-container">
            <Header/>
            <div className="home-page-1-container">
                <img className="home-page-1-img" src={img1}></img>
            </div>
            <div className="home-page-2-container">

            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;
