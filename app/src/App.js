import "./App.css";
import HomePage from "./home_page/home_page.js";
import FoodCard from "./home_page/food_card.js";
import FavoriteFoods from "./home_page/favorite_foods.js";

function App() {
  return (
    <div className="App">
      <FavoriteFoods />
    </div>
  );
}

export default App;
