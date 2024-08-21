import MenuCategory from "./menu_category";
import sushiPic from "../images/img1.png";
import "./menu_of_the_day.css";

function MenuOfTheDay() {
    return (
        <div className="menu-of-the-day">
            <div className="menu-of-the-day-title">
                Menu Of The Day
            </div>
            <div className="bar"></div>
            <MenuCategory 
                title={"Appetizers"}
                image={sushiPic}
            />
        </div>
    );
}

export default MenuOfTheDay;
