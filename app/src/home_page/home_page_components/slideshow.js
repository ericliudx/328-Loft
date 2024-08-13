import { React } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./slideshow.css";
// read here to learn more
// https://react-slideshow-image.netlify.app/?path=/story/introduction--page


function Slideshow() {
    // ------
    // images
    // ------
    // list of images
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    // -------
    // buttons
    // -------
    // this changes buttons style
    const buttonStyle = {
        width: "30px",
        margin: "0 30px",
        background: 'none',
        border: '0px',
        MozUserSelect: "none",
        WebkitUserSelect: "none",
        msUserSelect: "none"
    };
    // this is prob geometry of the arrow icon for the buttons on the slideshow
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
        nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
    }

    // ----------
    // indicators
    // ----------
    const indicators = (index) => (<div className="indicator">{index + 1}</div>);

    return (
        <Slide {...properties}
            duration={1000}                     // int: miliseconds of before next slide animation starts
            transitionDuration={500}            // int: miliseconds of how long animation lasts
            defaultIndex={0}                    // int: what image it starts on
            indicators={true}                   // bool: the things on the bottom showing which slide its on
            arrows={true}                       // bool: show the arrows
            autoplay={true}                     // bool: automatically switch to next picture
            infinite={true}                     // bool: makes autoplay infinite
            pauseOnHover={false}                 // bool: slide pauses when mouse hovers
            canSwipe={true}                     // bool: can go next by swipping 
            easing={"ease-out"}                 // string: type of animation (linear, ease, ease-in, ease-out, cubic, cubic-in, cubic-out)
            slidesToShow={1}                    // int: number of slides to show on at a time
            slidesToScroll={1}                  // int: number of slides to scroll
            vertical={false}                    // bool: if it should scroll vertically
            // onStartChange={funct}            // function: runs on start
            // onChange={funct}                 // funciton: runs on end
            // responsive={true}                // bool: changes num slidesToShow based on screen size
            // cssClass={""}                    // string: custom css class
            // prevArrow={<Component />}        // react component: custom compent for the left arrow
            // nextArrow={<Component />}        // react component: custom compent for the right arrow
            >
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide>
    );
}

export default Slideshow;