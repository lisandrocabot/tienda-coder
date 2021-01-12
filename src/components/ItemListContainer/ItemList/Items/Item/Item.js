import ItemCount from "./ItemCount/ItemCount"
import {Link} from "react-router-dom";  

const Item = ({item}) => {

  return (

    <>
      <div>
        <h2>{item.title}</h2>
        <img src={`/${item.pictureUrl}`} alt="imagen de producto"/>
        <p className="ItemDetail">{item.detail}</p>
        <p className="ItemPrice">$ {item.price}</p>
      </div>
    
      <ItemCount item={item}/>
      <Link to={`/detail/${item.id}`}> Ver más </Link>
    </>
    )
  }

export default Item

