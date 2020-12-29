import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList"

const ItemListContainer = () => {

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

