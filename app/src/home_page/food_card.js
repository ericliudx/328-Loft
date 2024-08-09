import "./food_card.css";

function FoodCard({title, text, price, picture}) {
  return (
    <div className="food-card-container">
      <img className="food-card-picture" src={picture} alt="sushi pic"/>
      <div className="food-card-title">{title}</div>
      <div className="food-card-text">{text}</div>
      <div className="food-card-price">{price}</div>
    </div>
  );
}

export default FoodCard;
