import MenuItem from "./menu_item";
import "./menu_category.css";

function MenuCategory({ title, image }) {
    return (
        <div className="menu-category">
            <div className="menu-category-left">
                <div className="menu-category-title">
                    {title}
                </div>
                <div className="menu-item-container">
                    <MenuItem 
                        foodName="Salmon (raw)"
                        price="5.00"
                        description="eric eats everything including your dog and your cat and no this joke is not old"
                    />
                </div>
            </div>
            <div className="menu-category-right">
                <img className="menu-category-picture" src={image} alt="sushi" />
            </div>
        </div>
    );
}

export default MenuCategory;
