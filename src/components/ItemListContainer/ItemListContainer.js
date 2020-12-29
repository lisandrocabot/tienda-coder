import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList"
import {useParams} from "react-router-dom"
import {useEffect} from "react"

    const ItemListContainer = () => {
        const {featured_products} = useParams();
    
    useEffect(() => {
        console.log(featured_products);
    }, [featured_products])

    return (
        <>
            <section className="ItemListContainer">
                <h1 className="FeaturedProducts"> Productos Destacados </h1>
                <ItemList />
            </section>
        </>
    )
}


export default ItemListContainer

