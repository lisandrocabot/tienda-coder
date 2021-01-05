import ItemCount from "../../ItemListContainer/ItemList/Items/Item/ItemCount/ItemCount"
import { Link } from "react-router-dom"
import "../ItemDetailContainer.css"

const ItemDetail = ({Item}) => {
        
          return (
            <div className="ItemDetail">
              <h2>{Item.title}</h2>
              <img src={`/${Item.pictureUrl}`} alt="Imagen de producto"/>
              <p>{Item.detail}</p>
              <p>$ {Item.price}</p>
              <br />
              <ItemCount />
              <br />
              <Link to="/camisas" className="ReturnButton"> Regresar </Link>
            </div>
    );
  }

  

export default ItemDetail

