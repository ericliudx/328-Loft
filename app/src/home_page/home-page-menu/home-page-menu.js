import "./home-page-menu.css";
import HomePageMenuItem from "./home-page-menu-item/home-page-menu-item";

function HomePageMenu({image}) {
    return (
        <div className="home-page-menu-container">
            <div className="home-page-menu-left">
                <div className="home-page-menu-title">
                    Menu Favorites
                </div>
                <div className="home-page-menu-items-column-container">
                    <div className="home-page-menu-items-column">
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                    </div>
                    <div className="home-page-menu-items-column right-column">
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                        <HomePageMenuItem title="Dog Meat" body="Yummmmmmmmmmmmmmmmy so so yummy. Harvested fresh from neighbor's dog."/>
                    </div>
                </div>


                <button className="home-page-menu-view-full-menu">
                    View our full menu
                </button>
            </div>
            <img className="home-page-menu-right" src={image}></img>
        </div>
        );
    }
    
    export default HomePageMenu;

