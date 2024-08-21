import "@fontsource/poppins";
import "./App.css";
import Header from "./navigation/header/header.js";
//import HomePage from "./home_page/home_page.js";
import FoodCard from "./home_page/home_page_components/food_card/food_card.js";
// import FoodCardContainer from "./home_page/home_page_components/food_card_container.js";
import Footer from "./navigation/footer/footer.js";
// import MenuCardContainer from "./home_page/home_page_components/menu_card_container.js";
// import foodPic from "./images/img7.png";
import SelectMenu from "./select_menu_page/select_menu.js";
import MenuOfTheDay from "./menu_of_the_day/menu_of_the_day.js";
import FoodPage from "./food_page/food_page"
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
    // <BrowserRouter>
    //     <Routes>
    //         <Route path="/" element={<Layout />}>
    //         <Route index element={<Home />} />
    //         <Route path="blogs" element={<Blogs />} />
    //         <Route path="contact" element={<Contact />} />
    //         <Route path="*" element={<NoPage />} />
    //         </Route>
    //     </Routes>
    //   </BrowserRouter>
        
        <div className="App">
            <Header/>
            {/* <FoodCardContainer /> */}
            {/* <MenuCardContainer /> */}
            {/* <Navbar /> */}
            {/* <Slideshow /> */}
            

            <Footer/>

        </div>
    );
}

export default App;
