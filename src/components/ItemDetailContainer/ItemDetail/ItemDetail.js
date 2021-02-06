import ItemCount from "../../ItemListContainer/ItemList/Items/Item/ItemCount/ItemCount"
import { Link, useLocation } from "react-router-dom"
import "../ItemDetailContainer.css"

const ItemDetail = ({Item}) => {
  const location = useLocation().pathname.split("/")
        
          return (
            <div className="item-detail">
              <h2>{Item.title}</h2>
              <img src={`/${Item.pictureUrl}`} alt="Imagen de producto"/>
              <p>{Item.detail}</p>
              <p>$ {Item.price}</p>
              <ItemCount item={Item}/>
              <Link to={`/${location[1]}`} className="return-button"> Regresar </Link>
            </div>
    );
  }

  

export default ItemDetail

