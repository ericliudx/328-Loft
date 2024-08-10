import "./footer.css";
import logo1 from "../images/logos/logo2.jpg";
import logo2 from "../images/logos/logo3.jpg";

function Footer() {
	return (
		<div className="footer-container">
			<div className="footer_1">
				<div className="logo">
					<img src={logo1} alt="" />
				</div>
				<div>
					<address>
						<p>Email: ericliudx@gmail.com</p>
						<p>Youtube: none</p>
						<p>Livingston Apartments C, Room 328<br />Rutgers New Brunswick</p>
					</address>
				</div>
			</div>

			<div className="footer_2">
				<img src={logo2} alt="" />
				<h2>Powered by <em>Emmaus</em></h2>
			</div>
		</div>
	);
}

export default Footer;
