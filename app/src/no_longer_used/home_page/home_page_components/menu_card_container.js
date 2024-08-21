import { useEffect, useState } from "react";
import "./menu_card_container.css";
import MenuCard from "./menu_card/menu_card.js";
import sushiPic from "../../images/img7.png";
import burgerPic from "../../images/img9.png";
import ramenPic from "../../images/menu-2.jpg";
import pizzaPic from "../../images/menu-7.jpg";


function MenuCardContainer() {
    const [text, setText] = useState("But I must explain to you how all this mistaken idea of denouncing \
                      pleasure and praising pain was born and I will give you a complete \
                      account of the system, and expound the actual teachings of the great \
                      explorer of the truth, the master-builder of human happiness. No one \
                      rejects, dislikes, or avoids pleasure itself, because it is pleasure, \
                      but because those who do not know how to pursue pleasure rationally \
                      encounter consequences that are extremely painful. Nor again is there \
                      anyone who loves or pursues or desires to obtain pain of itself, because \
                      it is pain, but because occasionally circumstances occur in which toil \
                      and pain can procure him some great pleasure. To take a trivial example, \
                      which of us ever undertakes laborious physical exercise, except to obtain \
                      some advantage from it? But who has any right to find fault with a man \
                      who chooses to enjoy a pleasure that has no annoying consequences, or one \
                      who avoids a pain that produces no resultant pleasure?");
    return (
        <div className="food-card-container">
            <MenuCard
                title="Sushi"
                text={text}
                picture={sushiPic}
            />
            <MenuCard
                title="Burger"
                text={text}
                picture={burgerPic}
            />
            <MenuCard
                title="Pizza"
                text={text}
                picture={pizzaPic}
            />
            <MenuCard
                title="Pasta" 
                text={text}
                picture={ramenPic}
            />
        </div>
    );
}

export default MenuCardContainer;
