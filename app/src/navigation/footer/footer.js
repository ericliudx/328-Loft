import "./footer.css";
import FooterIcon from "./footer-icon/footer-icon";
import FooterNav from "./footer-nav/footer-nav";
import logo2 from '../../images/logos/logo2.jpg';
import logo1 from '../../images/logos/logo3.jpg';


function Footer() {
	return (
		<div className="footer-container">
			<div className="top-footer-container">
				<div className="footer-logo-container">
					<a href="home_page.html"> <img className="footer-logo-img" src={logo1} alt="" /></a>
				</div>
				
				<FooterNav/>

				<div className="connect-container">
{/* 					<div className="connect-title">
						Contact Us
					</div> */}
					<div className="footer-icon-container">
						<FooterIcon classNamePar='fa fa-instagram media' link='https://www.instagram.com/328.loft/'/>
						<FooterIcon classNamePar='fa fa-youtube media' link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'/>
						<FooterIcon classNamePar='fa fa-envelope media' link='https://www.youtube.com/watch?v=dQw4w9WgXcQ'/>
					</div>
				</div>
			</div>

			<div className="bottom-container"> 328 Loft 2024
				<span className="fa fa-copyright rights"></span>
				All rights reserved
			</div>
		</div>

	);
}

export default Footer;
