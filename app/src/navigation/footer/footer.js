import "./footer.css";
import logo2 from '../../images/logos/logo2.jpg';
import logo1 from '../../images/logos/a.jpg';
function Footer() {
	return (
		<div className="footer-container">
			<div className="logo-container">
				<img className="logo-img" src={logo1} alt="" />
			</div>
			<div className="text-container first">

				<p>Email: ericliudx@gmail.com</p>
				<p>Youtube: none</p>
				<p>Livingston Apartments C, Room 328<br />Rutgers New Brunswick</p>

			</div>
			<div className="text-container second">
				<div className="icon-container">
					<div className="fa fa-instagram">
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
