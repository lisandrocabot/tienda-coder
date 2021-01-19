import Item from "./Items/Item/Item"
import "./ItemList.css";
import {useState, useEffect} from "react";
import {getFirestore} from "../../../db/index";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const db = getFirestore()

    const getProducts = () => {
        db.collection("products").get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc =>{
                arr.push({id:doc.id, data:doc.data()})
            })
            setItems(arr);
        })
        .catch(e => console.log(e));
    }
    
    useEffect(() =>{
        getProducts();
        // eslint-disable-next-line
        }, []);
    
    return (
    <div className="ItemList">
       
        { items.length ?
       
       <ul>
             { items.map((item) => (
                    <li key={item.id}>
                        <Item 
                            id={item.id}
                            item={item.data}

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


