import "./header-nav-icon.css";

function HeaderNavIcon({title, name, picture, link, id}) {
    return (
        <a href={link}>
            <i className={name} id={id}>

            </i>
        </a>
    );
}

export default HeaderNavIcon;