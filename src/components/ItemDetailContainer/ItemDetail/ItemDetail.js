import ItemCount from "../../ItemListContainer/ItemList/Items/Item/ItemCount/ItemCount"
import { Link, useLocation } from "react-router-dom"
import "../ItemDetailContainer.css"

const ItemDetail = ({Item}) => {
  const location = useLocation().pathname.split("/")
        
          return (
            <div className="ItemDetail">
              <h2>{Item.title}</h2>
              <img src={`/${Item.pictureUrl}`} alt="Imagen de producto"/>
              <p>{Item.detail}</p>
              <p>$ {Item.price}</p>
              <br />
              <ItemCount item={Item}/>
              <br />
              <Link to={`/${location[1]}`} className="ReturnButton"> Regresar </Link>
            </div>
    );
  }

  

export default ItemDetail

