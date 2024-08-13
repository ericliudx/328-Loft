import "./App.css";
import Header from "./navigation/header.js";
import HomePage from "./home_page/home_page.js";
import FoodCard from "./home_page/home_page_components/food_card/food_card.js";
import FoodCardContainer from "./home_page/home_page_components/food_card_container.js";
import Footer from "./navigation/footer.js";
import MenuCardContainer from "./home_page/home_page_components/menu_card_container.js";
import foodPic from "./images/img7.png";
import Slideshow from "./home_page/home_page_components/slideshow.js";

function App() {
    return (
        <div className="App">
            <Header/>
            <FoodCardContainer />
            <MenuCardContainer />
{/*             <Slideshow /> */}
            <Footer/>
        </div>
    );
}

export default App;
