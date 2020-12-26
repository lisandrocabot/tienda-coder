import Item from "./Items/Item/Item"
import Products from "./Items/Item/Products";
import "./ItemList.css"

const ItemList = () => {
    return (
    <div className="ItemList">
        <ul>
            { Products.map((product, index) => (
                <li>
                    <Item 
                        key={index}
                        title={product.title}
                        detail={product.detail}
                        price={product.price} 
                    />
                </li>
            ))}
        </ul>
    </div>     
    );
}
 
export default ItemList;


