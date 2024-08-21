import Description from "./food_page_description";
import Clock from "./clock.js";
import "@fontsource/abel";
import img1 from "../images/VULTURES.webp";
function FoodPage(){
  return (
    <div className = "foodpage">
      <Clock />
      <Description name = "Ryan is cool" price = "$10" buy = "BUY NOW" imgsrc={img1}/>
      <Description name = "Ryan is cool" price = "$10" buy = "BUY NOW" imgsrc={img1}/>
      <Description name = "Ryan is cool" price = "$10" buy = "BUY NOW" imgsrc={img1}/>
    </div>

  );
}
export default FoodPage;