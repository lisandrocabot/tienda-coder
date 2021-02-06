import React, {useState, useContext} from "react";
import {Store} from "../../../../../../Store/Store";
import {useHistory} from 'react-router-dom';
import "./ItemCount.css";


const ItemCount = ({item}) => {
   const history = useHistory();
   const [cart, setCart] = useContext(Store)
   const [qty, setQty] = useState(1)

    const HandleClickRestar = () => {
    if (qty > 1 ) {
      setQty(qty - 1)
    }
  }
  const HandleClickAdd = () => {         
          
          if (cart.items.some(prod => prod.item.id === item.id)) {
            const repetedId = cart.items.findIndex((prod) => {return prod.item.id === item.id});
            cart.items[repetedId].cantProd = cart.items[repetedId].cantProd + qty;
            setCart({
              ...cart,
              cantidad: cart.cantidad + qty,
              items: [...cart.items],
              precioTotal: cart.precioTotal + (cart.items[repetedId].price * qty),
        })

          }             
          else {
            setCart({
              ...cart,
              items: [...cart.items, {item: item, cantProd: qty}],
              cantidad: cart.cantidad + qty,
              precioTotal: cart.precioTotal + (item.price * qty),
        })
          }
      history.push('/cart');
      console.log(cart)
}
  return(
    <>
    <div className="itemcount-div">
        <div className="itemcount-buttons">
          <button className="itemcount-button"
          onClick={HandleClickRestar}
          disabled={qty===1? "disable" : null}
          > - </button>
          <input type="text" value={qty} readOnly className="itemcount-input" />
          <button onClick={()=>{setQty(qty + 1)}} className="itemcount-button"> + </button>
        </div>  
        <button onClick={HandleClickAdd} className="add-button">Agregar al carrito</button>   
    </div>
  </>
 ) 
}

export default ItemCount