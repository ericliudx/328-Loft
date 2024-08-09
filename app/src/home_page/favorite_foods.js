import "./favorite_foods.css";
import FoodCard from "./food_card.js";
import foodPic from "../images/img7.png";

function FavoriteFoods() {
  return (
    <div className="favorite-foods-container">
      <FoodCard
        title="Sushi"
        text="Japenese people am i right or am i right"
        price="$12.99"
        picture={foodPic}
      />
      <FoodCard
        title="Burger"
        text="A juicy beef burger with lettuce and tomato."
        price="$10.99"
        picture={foodPic}
      />
      <FoodCard
        title="Pizza"
        text="A delicious cheese and tomato pizza."
        price="$12.99"
        picture={foodPic}
      />
      <FoodCard
        title="Pasta" 
        text="Creamy Alfredo pasta with garlic bread."
        price="$13.99"
        picture={foodPic}
      />
    </div>
  );
}

export default FavoriteFoods;
