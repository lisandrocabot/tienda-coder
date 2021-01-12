import "./ItemDetailContainer.css"
import {useEffect, useState} from "react"; 
import ItemDetail from "./ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom';
import { Products } from "../ItemListContainer/ItemList/Items/Item/Products"

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState();

    const { id } = useParams();

    const getProduct = new Promise((resolve) => {
        setTimeout(() => {
            const clickedProduct = Products.find( product => product.id == id )
            resolve(clickedProduct);
        }, 1000);
    });

    const productCall = () => {
        getProduct.then((response) => setProduct(response));
    };

    useEffect(() => productCall(), []);

    return product ? (
            <ItemDetail Item = {product} />
    ) : ( <p>Cargando producto...</p> )
        
}
    

export default ItemDetailContainer