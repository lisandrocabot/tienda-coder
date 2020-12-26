import React, { useState } from "react";

const ItemCount = () => {
  const [qty, setQty] = useState(1)  
  
    const HandleClickRestar = () => {
    if (qty > 1 ) {
      setQty(qty - 1)
    }
  }

  const onAdd = () => {
    return alert(`Has agregado ${qty} productos al Carrito`)
  }

  return(
  <div>
        <button 
      onClick={HandleClickRestar}
      disabled={qty===1? "disable" : null}
      > - </button>
      <input type="text" value={qty} readOnly/>
      <button onClick={()=>{setQty(qty + 1)}}> + </button>
      <button onClick={()=>{onAdd()}}>Agregar a carrito</button>
  </div>
 ) 
}

export default ItemCount