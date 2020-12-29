import ItemCount from "./ItemCount/ItemCount"
import {Link} from "react-router-dom";  

const Item = ({id, title, detail, price}) => {

  return (

    <>

      <div>
        <h2>{title}</h2>
        <img src="https://placehold.it/350x350" alt="imagen de producto"/>
        <p>{detail}</p>
        <p>$ {price}</p>
      </div>
    
      <ItemCount />
      <Link to={`/detail/${id}`}> Ver más </Link>
    </>
    )
  }

export default Item

