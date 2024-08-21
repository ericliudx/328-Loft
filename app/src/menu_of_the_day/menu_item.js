import { useState, useEffect } from "react";
import sushiPic from "../images/img1.png";
import "./menu_category.css";

function MenuItem({ foodName, price, description }) {
    const [menuString, setMenuString] = useState("");
    const numCharacters = 102;

    useEffect(() => {
        const periodsNeeded = numCharacters - (foodName.length + price.length + 3); // 3: 2 spaces + 1 dollar sign
        const temp = foodName + " " + ".".repeat(periodsNeeded) + " $" + price;
        setMenuString(temp)
    }, []);

    return (
        <div className="menu-item">
            <div className="menu-item-text">
                {menuString}
            </div>
            <div className="menu-item-description">
                {description}
            </div>
        </div>
    );
}

export default MenuItem;
