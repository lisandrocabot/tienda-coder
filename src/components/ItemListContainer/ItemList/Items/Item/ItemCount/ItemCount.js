import React, {useState, useContext} from "react";
import {Store} from "../../../../../../store/Store";
import {useHistory} from 'react-router-dom';


const ItemCount = ({item}) => {
   const history = useHistory();
   const [data, setData] = useContext(Store)
   const [qty, setQty] = useState(1)  

    const HandleClickRestar = () => {
    if (qty > 1 ) {
      setQty(qty - 1)
    }
  }

  const HandleClickAdd = () => {
    setData({
      ...data, 
      cantidad: data.cantidad + qty,
      items: [...data.items, item],
    });
    history.push('/cart');
    }    
    
  return(
    <>
    <div>
          <button className="ItemCountButton"
        onClick={HandleClickRestar}
        disabled={qty===1? "disable" : null}
        > - </button>
        <input type="text" value={qty} readOnly className="ItemCountInput" />
        <button onClick={()=>{setQty(qty + 1)}} className="ItemCountButton"> + </button>
        <br />
        <button onClick={HandleClickAdd} className="AddButton">Agregar al carrito</button>   
    </div>
  </>
 ) 
}

export default ItemCount