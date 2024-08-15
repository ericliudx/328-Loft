import MenuCard from "./menu_card";
import someImage from "../images/img1.png"
import "./menu_page.css";

function MenuPage() {
    return (
        <div className="menu-page">
            <div className="menu-page-title">
                Menus
            </div>
            <div className="menu-card-container">
                <MenuCard 
                    title={"Chinese Food"}
                    text={"We eat everything... beef, pork, dog, your dog, your cat, and even sometimes bats!!!"}
                    picture={someImage}
                />
                <MenuCard 
                    title={"Chinese Food"}
                    text={"We eat everything... beef, pork, dog, your dog, your cat, and even sometimes bats!!!"}
                    picture={someImage}
                />
                <MenuCard 
                    title={"Chinese Food"}
                    text={"We eat everything... beef, pork, dog, your dog, your cat, and even sometimes bats!!!"}
                    picture={someImage}
                />
            </div>
        </div>
    );
}

export default MenuPage;
