import Item from "./Items/Item/Item"
import Products from "./Items/Item/Products";
import "./ItemList.css";
import {useState, useEffect} from "react";

const ItemList = () => {
    const [items, setItems] = useState([]);

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            resolve(Products);
        }, 2000) 
        });
    
    useEffect(() =>{
        getProducts.then(rta => setItems(rta));
        }, []);
    
    return (
    <div className="ItemList">
       
        { items.length ?
       
       <ul>
             { items.map((product, index) => (
                    <li>
                        <Item 
                            key={index}
                            title={product.title}
                            picture={product.pictureUrl}
                            detail={product.detail}
                            price={product.price}

                        />
                    </li>
                ))} 
        </ul> :
            
        <p> Cargando productos...</p>    
        }
    
    </div>     
    );
}
 
export default ItemList;


