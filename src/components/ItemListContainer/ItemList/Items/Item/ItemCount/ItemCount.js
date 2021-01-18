import React, {useState, useContext} from "react";
import {Store} from "../../../../../../store/Store";
import {useHistory} from 'react-router-dom';


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
              items: [...cart.items]
        })

          }             
          else {
            setCart({
              ...cart,
              items: [...cart.items, {item: item, cantProd: qty}],
              cantidad: cart.cantidad + qty,
        })
          }
      history.push('/cart');
      console.log(cart)
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