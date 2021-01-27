import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList"

const ItemListContainer = ({title}) => {

    return (
        <>
            <section className="ItemListContainer">
                <h1 className="FeaturedProducts"> {title}</h1>
                <ItemList title={title} />
            </section>
        </>
    )
}


export default ItemListContainer

