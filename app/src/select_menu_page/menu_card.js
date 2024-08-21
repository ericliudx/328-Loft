import "./menu_card.css";

function MenuCard({ src, alt, text }) {
    return (
        <div className="menu-card">
            <img className="menu-card-image" src={src} alt={alt} />
            <div className="menu-card-text">
                {text}
            </div>
        </div>
    );
}

export default MenuCard;
