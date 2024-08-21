import "@fontsource/poppins";
import "./App.css";
import Header from "./navigation/header.js";
//import HomePage from "./home_page/home_page.js";
import FoodCard from "./no_longer_used/home_page/home_page_components/food_card/food_card.js";
// import FoodCardContainer from "./home_page/home_page_components/food_card_container.js";
import Footer from "./navigation/footer/footer.js";
// import MenuCardContainer from "./home_page/home_page_components/menu_card_container.js";
// import foodPic from "./images/img7.png";
import Slideshow from "./no_longer_used/home_page/home_page_components/slideshow.js";
import Navbar from "./navigation/nav stuff/navbar.js";
import SelectMenu from "./select_menu_page/select_menu.js";
import MenuOfTheDay from "./menu_of_the_day/menu_of_the_day.js";
// import MenuPage from "./menu_page/menu_page.js";

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
<<<<<<< HEAD
            <MenuOfTheDay />
            {/* <SelectMenu /> */}
            {/* <Header/> */}
=======
            <Header/>
>>>>>>> refs/remotes/origin/main
            {/* <FoodCardContainer /> */}
            {/* <MenuCardContainer /> */}
            {/* <Navbar /> */}
            {/* <Slideshow /> */}
<<<<<<< HEAD
            {/* <MenuPage /> */}
=======
            <MenuPage />

            <Footer/>

>>>>>>> refs/remotes/origin/main
        </div>
    );
}

export default App;
