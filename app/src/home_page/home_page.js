import "./home_page.css";
import "./OLD.js";

function HomePage() {
  return (
    <div className="home-page-container">
        hello world
        <div className="header">
            <div className="headerbar">
                <div className="account">
                    <ul>
                        <a href="#">
                            <li>
                                <i className="fa-solid fa-house-chimney"></i>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <i className="fa-solid fa-magnifying-glass searchicon" id="searchicon1"></i>
                            </li>
                        </a>
                        <div className="search" id="searchinput1">
                            <input type="search" />
                            <i className="fa-solid fa-magnifying-glass searchbaricon1"></i>
                        </div>
                        <a href="#">
                            <li>
                                <i className="fa-solid fa-user" id="user-mb"></i>
                            </li>
                        </a>
                    </ul>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li>
                            <a href="#" className="menus_btn">Online Menus <span className="fas fa-caret-down"></span></a>
                            <ul className="dropdown_menu">
                                <li>
                                    <a href="chinese_menu.html">Chinese Menu</a>
                                </li>
                                <li>
                                    <a href="">Korean Menu</a>
                                </li>
                                <li>
                                    <a href="">Drink Menu</a>
                                </li>
                            </ul>
                        </li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">About</a></li>
                    </ul>
                </div>
            </div>
            <div className="logo">
                <img src="../pictures/logos/logo3.jpg" alt="" />
            </div>

            <div className="right_side">
                <div className="nav_bar">
                    <li>
                        <a className="nav_bar_link" href="#">Online Menu</a>
                    </li>
                    <li>
                        <a className="nav_bar_link" href="#">Reservations</a>
                    </li>
                </div>
                <div className="bar">
                    <i className="fa-solid fa-bars"></i>
                    <i className="fa-solid fa-xmark" id="hdcross"></i>
                </div>
                <div className="nav">
                    <ul>
                        <a href="#">
                            <li>Home</li>
                        </a>
                        <a href="#">
                            <li>Online Menu</li>
                        </a>
                        <a href="#">
                            <li>Reservations</li>
                        </a>
                        <a href="#">
                            <li>About</li>
                        </a>
                    </ul>
                </div>

            </div>


                <div className="account">
                    <ul>
                        <a href="#">
                            <li>
                                <i className="fa-solid fa-house-chimney"></i>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <i className="fa-solid fa-magnifying-glass searchicon" id="searchicon2"></i>
                            </li>
                        </a>
                        <div className="search" id="searchinput2">
                            <input type="search" />
                            <i className="fa-solid fa-magnifying-glass searchbaricon2"></i>
                        </div>
                        <a href="#">
                            <li>
                                <i className="fa-solid fa-user" id="user-lap"></i>
                            </li>
                        </a>
                    </ul>
                </div>
        </div>
    <div className="home">
        <div className="main_slide">
            <div>
                <h1>The Experience of <span>328 Loft</span> Right in <br />Livi C</h1>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                
                <button className="red_btn">Visit Now <i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
            <div>
                <img src="../images/team-1.jpg" alt="" />
            </div>
        </div>

        <div className="food_items">
            <div className="item">
                <div>
                    <img src="../images/img2.png" alt="food item" />
                </div>
                <h3>Food name</h3>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                <button className="white_btn" >See Menu</button>
            </div>
            <div className="item">
                <div>
                    <img src="../images/img3.png" alt="food item" />
                </div>
                <h3>Food name</h3>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                <button className="white_btn" >See Menu</button>
            </div>
            <div className="item">
                <div>
                    <img src="../images/img4.png" alt="food item" />
                </div>
                <h3>Food name</h3>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                <button className="white_btn" >See Menu</button>
            </div>
            <div className="item">
                <div>
                    <img src="../images/img5.png" alt="food item" />
                </div>
                <h3>Food name</h3>
                <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                <button className="white_btn" >See Menu</button>
            </div>
        </div>

        <div className="main_slide2">
            <div className="foodimg">
                <img src="../images/img5.png" alt="" />
            </div>
            <div className="question">
                <div>
                    <h2>Why Us?</h2>
                </div>
                <div>
                    <div className="q_ans">
                        <div>
                            <img src="../images/img6.png" alt="" />
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."</p>
                        </div>
                    </div>
                    <div className="q_ans">
                        <div>
                            <img src="../images/img7.png" alt="" />
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."</p>
                        </div>
                    </div>
                    <div className="q_ans">
                        <div>
                            <img src="../images/img7.png" alt="" />
                        </div>
                        <div>
                            <h4>Choose your favorite</h4>
                            <p>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="main_slide3">
            <div className="fav_head">
                <h3>Our Hottest Items</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo placeat eveniet, est possimus at blanditiis, ipsum expedita sapiente quidem nulla reprehenderit animi fugit repellendus doloremque perspiciatis beatae? Fugit, facilis necessitatibus.</p>
            </div>
            <div className="fav_food">
                <div className="item">
                    <div>
                        <img src="../images/img7.png" alt="" />
                    </div>
                    <h3>Food name</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, aspernatur.</p>
                    <p className="fav_price">$2.90</p>
                </div>
                <div className="item">
                    <div>
                        <img src="../images/img7.png" alt="" />
                    </div>
                    <h3>Food name</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, aspernatur.</p>
                    <p className="fav_price">$2.90</p>
                </div>
                <div className="item">
                    <div>
                        <img src="../images/img7.png" alt="" />
                    </div>
                    <h3>Food name</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, aspernatur.</p>
                    <p className="fav_price">$2.90</p>
                </div>
                <div className="item">
                    <div>
                        <img src="../images/img7.png" alt="" />
                    </div>
                    <h3>Food name</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, aspernatur.</p>
                    <p className="fav_price">$2.90</p>
                </div>
            </div>
            <div className="dsgn"> </div>
        </div>

        <div className="main_slide4">
            <div className="chef_feed">
                <h2>Customer <span style="color: red;">Feedback</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deserunt magni eum exercitationem dolore beatae optio. Assumenda consectetur quaerat quidem?</p>
                <div className="chef_detail">
                    <div>
                        <img src="../images/team-2.jpg" />
                    </div>
                    <div>
                        <h6>Eric Liu Alex Feng</h6>
                        <p>Rrestaurant Owners</p>
                    </div>
                </div>
                <div className="chef_vic">
                    <div>
                        <i className="fa-solid fa-hand-peace"></i>
                        <h4>68</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, aliquid.</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-trophy"></i>
                        <h4>956</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, sequi!</p>
                    </div>
                </div>
            </div>
            <div className="chef">
                <img src="../images/team-4.jpg" />
            </div>
        </div>

        <div className="letter">
            <div className="letter_head">
                <h2>Subscribe <span>Newsletter</span></h2>
            </div>
            <div className="letter_input">
                <div>
                    <input type="email" placeholder="Example@example.com" />
                </div>
                <button className="red_btn">Subscribe</button>
            </div>
        </div>
        
    </div>

    <div className="footer">
        <div className="footer_1">
            <div className="logo">
                <img src="../images/official logo text bl.png" alt="" />
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
            <img src="../images/official logo text bl.png" alt="" />
            <h2>Powered by <em>Emmaus</em></h2>
        </div>
    </div>
    </div>
  );
}

export default HomePage;
