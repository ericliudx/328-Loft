import "./description.css"
function Description({name, price, buy, imgsrc}){
  return(
    <>

      <div className="food-page-description">
        <img className = "food-page-image" src={imgsrc} />
        <p className="food-page-line">{name}</p>
        <p className="food-page-line">{price}</p>
        <p className="food-page-line">{buy}</p>
      </div></>
  );
}
export default Description;