import MenuCard from "./menu_card";
import sushiPic from "../images/img1.png"
import anotherPic from "../images/img2.png"
import "./menu_page.css";

function MenuPage() {
    return (
        <div className="menu-page">
            <div className="menu-page-title">
                Menus
            </div>
            <div className="menu-card-container">
                <span className="menu-page-dark">
                    <MenuCard 
                        title={"Chinese Food"}
                        text={"We eat everything... beef, pork, dog, your dog, your cat, and even sometimes bats!!! \
                               We eat everything... beef, pork, dog, "}
                        buttonText={"See Chinese Food Menu"}
                        picture={sushiPic}
                        lightBool={false}
                    />
                </span>
                <span className="menu-page-light">
                    <MenuCard 
                        title={"Japanese Food"}
                        text={"We eat everything... beef, pork, dog, your dog, your cat, and sometimes even bats!!!"}
                        buttonText={"See Chinese Food Menu"}
                        picture={anotherPic}
                        lightBool={true}
                    />
                </span>
                <span className="menu-page-dark">
                    <MenuCard 
                        title={"Dog Food"}
                        text={"We eat everything... beef, pork, dog, your dog, your cat, and even sometimes bats!!!"}
                        buttonText={"See Chinese Food Menu"}
                        picture={anotherPic}
                        lightBool={false}
                    />
                </span>
            </div>
        </div>
    );
}

export default MenuPage;
