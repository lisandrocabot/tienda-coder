import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) => {
    return (
    <div>
        <section className="ItemListContainer">{greeting}</section>
        <ItemCount />        
    </div>
    )
}

export default ItemListContainer

