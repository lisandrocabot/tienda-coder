import ItemCount from "./ItemCount/ItemCount"
import {Link} from "react-router-dom";  

const Item = ({id, title, detail, price, picture}) => {

  return (

    <>
      <div>
        <h2>{title}</h2>
        <img src={`/${picture}`} alt="imagen de producto"/>
        <p className="ItemDetail">{detail}</p>
        <p className="ItemPrice">$ {price}</p>
      </div>
    
      <ItemCount />
      <Link to={`/detail/${id}`}> Ver más </Link>
    </>
    )
  }

export default Item

