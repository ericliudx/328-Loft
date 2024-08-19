import "./footer-icon.css";


function FooterIcon({ classNamePar, link }) {

	const openInNewTab = (url) => {
		window.open(url, "_blank", "noreferrer");
	  };
	return (
        <button className="footer-icon" 
            role="link"
            onClick={() => openInNewTab(link)}
        >
            <span className={classNamePar}></span>
        </button>
	);
}

export default FooterIcon;