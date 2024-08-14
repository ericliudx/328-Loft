import "./footer.css";
import logo2 from '../../images/logos/logo2.jpg';
import logo1 from '../../images/logos/a.jpg';
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


		</div>
	);
}

export default Footer;
