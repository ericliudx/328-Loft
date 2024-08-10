import "./menu_card.css";

function MenuCard({title, text, picture}) {
    return (
        <div className="menu-card">
            <img className="menu-card-picture" src={picture} alt="sushi pic"/>
            <div className="menu-card-title">{title}</div>
            <div className="menu-card-text">{text}</div>
            <button className="menu-card-button">See Menu</button>
        </div>
    );
}

export default MenuCard;
