import React, { useState } from "react";
import {Redirect} from "react-router-dom";

const ItemCount = () => {
  const [qty, setQty] = useState(1)  
  
  const [redirect, setRedirect] = useState(false)
  
    const HandleClickRestar = () => {
    if (qty > 1 ) {
      setQty(qty - 1)
    }
  }

  const HandleClickAdd = () => {
    return (setRedirect(true))
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

   {redirect && <Redirect to='/cart' />}
  </>
 ) 
}

export default ItemCount