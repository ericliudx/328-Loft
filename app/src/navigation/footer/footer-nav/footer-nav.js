import "./footer-nav.css";

function FooterNav({title}) {
    
    return (
        <div className="footer-nav-container">
            <div className="footer-nav-link">
                Home
            </div>
            <div className="footer-nav-bar">
                |
            </div>
            <div className="footer-nav-link">
                About
            </div>
            <div className="footer-nav-bar">
                |
            </div>
            <div className="footer-nav-link">
                Daily Menu
            </div>
        </div>
    );
}

export default FooterNav;
