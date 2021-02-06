import ItemCount from "./ItemCount/ItemCount"
import {Link} from "react-router-dom";  

const Item = ({id, item}) => {

  return (

    <>
      <div>
        <h2 className="item-title">{item.title}</h2>
        <img src={`/${item.pictureUrl}`} alt={item.title}/>
        <p className="item-detail">{item.detail}</p>
        <p className="item-price">$ {item.price}</p>
      </div>
    
      <ItemCount item={item}/>
      <Link to={`/${item.category}/${id}`}> Ver más </Link>
    </>
    )
  }

export default Item

