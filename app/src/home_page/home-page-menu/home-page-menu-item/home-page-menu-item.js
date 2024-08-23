import "./home-page-menu-item.css";

function HomePageMenuItem({title, body}) {
    return (
        <div className="home-page-menu-left-item">
            <div className="home-page-menu-left-item-title">
                {title}
            </div>
            <div className="home-page-menu-left-item-body">
                {body}
            </div>
        </div>
        );
    }
    
    export default HomePageMenuItem;

