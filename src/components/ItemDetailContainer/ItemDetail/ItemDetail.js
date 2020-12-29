import ItemCount from "../../ItemListContainer/ItemList/Items/Item/ItemCount/ItemCount"
import { Link } from "react-router-dom"

const ItemDetail = ({Item}) => {
        
          return (
            <div className="ItemDetail">
              <h2>{Item.title}</h2>
              <img src={Item.pictureUrl} alt="Imagen de producto"/>
              <p>{Item.detail}</p>
              <p>$ {Item.price}</p>
              <br />
              <ItemCount />
              <br />
              <button><Link to="/featured-products"> Regresar </Link></button>
            </div>
    );
  }

  

export default ItemDetail

