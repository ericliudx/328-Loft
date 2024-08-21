import sushiPic from "../images/img1.png";
import MenuCard from "./menu_card";
import "./select_menu.css";

function SelectMenu() {
    return (
        <div className="select-menu">
            <div className="select-menu-title">
                Various Cuisines of 328-Loft
            </div>
            <div className="bar"></div>
            <div className="select-menu-menus-container">
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
                <MenuCard 
                    src={sushiPic}
                    alt={"Sushi"}
                    text={"Japanese"}
                />
            </div>
        </div>
    );
}

export default SelectMenu;
