import {useEffect, useState} from "react"; 
import ItemDetail from "./ItemDetail/ItemDetail"
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(null)
    
    const getProduct = new Promise((resolve) => {
        setTimeout(()=>{
            resolve({
                id: id,
                title: "Titulo de producto",
                img: "http://placehold.it/500x500" ,
                detail: "Detalles de producto",
                price: 0,
            })
        }, 2000)
    });

    useEffect(() => {
        getProduct
        .then(response =>setProduct(response))
        .catch(error =>console.log(error));
        // eslint-disable-next-line
    }, [])

    return (
    <>
       { 
           product ?

                <section>
                    <h2> Detalles de Producto</h2>
                    <ItemDetail
                        Item = {product}
                    />
                </section>  
             : <p>Cargando producto...</p>
        }
    </>
    )
}

export default ItemDetailContainer