import "./ItemDetailContainer.css"
import {useEffect, useState} from "react"; 
import ItemDetail from "./ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../db";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
  
    const { id } = useParams();
    
    const db = getFirestore(); 

    useEffect(() => {
        db.collection("products").doc(id).get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data())
            }
        })   
        .catch(e => console.log(e))    
    }, []);

    return product ? (
            <ItemDetail Item = {product} />
    ) : ( <p>Cargando producto...</p> )
        
}
    

export default ItemDetailContainer