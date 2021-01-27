import Item from "./Items/Item/Item"
import "./ItemList.css";
import {useEffect, useState} from "react";
import {getFirestore} from "../../../db/index";
import { useLocation } from "react-router-dom";


const ItemList = ({title}) => {
    const [items, setItems] = useState([]);
    const category = useLocation().pathname.slice(1,)
    const db = getFirestore()
    let filter = []

    const getProducts = () => {
        category.length === 0 ? filter = ["featured", "==", true] : filter = ["category", "==", category]
  
        db.collection("products")
        .where(filter[0],filter[1], filter[2]) 
        .get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc =>{
                arr.push({id:doc.id, data:doc.data()})
            })
            setItems(arr);
        })
        .catch(e => console.log(e));
    }
    
useEffect(() => {    
    getProducts()
    //eslint-disable-next-line
}, [filter])

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


