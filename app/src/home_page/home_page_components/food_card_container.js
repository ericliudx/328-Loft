import "./food_card_container.css";
import FoodCard from "./food_card/food_card.js";
import sushiPic from "../../images/img7.png";
import burgerPic from "../../images/img9.png";
import ramenPic from "../../images/menu-2.jpg";
import pizzaPic from "../../images/menu-7.jpg";

function FoodCardContainer() {
    return (
        <div className="food-card-container">
            <FoodCard
                title="Sushi"
                text="Japenese people am i right or am i right"
                price="$12.99"
                picture={sushiPic}
            />
            <FoodCard
                title="Burger"
                text="A juicy beef burger with lettuce and tomato."
                price="$10.99"
                picture={burgerPic}
            />
            <FoodCard
                title="Pizza"
                text="A delicious cheese and tomato pizza."
                price="$12.99"
                picture={pizzaPic}
            />
            <FoodCard
                title="Pasta" 
                text="Creamy Alfredo pasta with garlic bread."
                price="$13.99"
                picture={ramenPic}
            />
        </div>
    );
}

export default FoodCardContainer;
