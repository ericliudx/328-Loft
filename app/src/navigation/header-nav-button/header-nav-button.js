import "./header-nav-button.css";

function HeaderNavButton({title, text, picture, link}) {
    return (
        <a href={link} className="header-nav-button">
            {text}
        </a>
    );
}

export default HeaderNavButton;
