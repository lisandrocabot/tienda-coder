import "./ItemListContainer.css"
import ItemList from "./ItemList/ItemList"

const ItemListContainer = ({title}) => {

    return (
        <>
            <section className="item-list-container">
                <h1 className="featured-products"> {title}</h1>
                <ItemList title={title} />
            </section>
        </>
    )
}


export default ItemListContainer

