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
        // eslint-disable-next-line
        }, []);
    
    return (
    <div className="ItemList">
       
        { items.length ?
       
       <ul>
             { items.map((product, index) => (
                    <li>
                        <Item 
                            key={index}
                            id={product.id}
                            title={product.title}
                            picture={product.pictureUrl}
                            detail={product.detail}
                            price={product.price}

                        />
                    </li>
                ))} 
        </ul> :
            
        <p className="LoadingProducts"> Cargando productos...</p>    
        }
    
    </div>     
    );
}
 
export default ItemList;


