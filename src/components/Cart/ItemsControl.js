import {useContext} from "react";
import {Store} from "../../Store/Store"



const ItemControl = ({productId}) => {

    const [cart, setCart] = useContext(Store)
    const totalProd = cart.items.reduce((acc, curr) => acc + curr.cantProd, 0)
    

    const AddItem = () => {
            cart.items[productId].cantProd ++
            setCart({
                    ...cart,
                    cantidad: cart.cantidad + 1,
                    items: [...cart.items]
                    }) 
    }

    const RemoveItem = () => {
        if (cart.items[productId].cantProd > 0) {      
        cart.items[productId].cantProd -- 
        setCart({
                ...cart,
                cantidad: cart.cantidad --,
                items: [...cart.items]
                }) 
            };
    }
    const ClearItem = () => { 
        cart.items.splice(productId, 1)
        setCart({
                ...cart,
                cantidad: totalProd,
                items: [...cart.items]
                }) 
            };


return (
    <>
    <button className="qty-button" onClick={RemoveItem}> - </button>    
    <input type="text" value={cart.items[productId].cantProd} readOnly className="ItemCountInput" />
    <button className="qty-button" onClick={AddItem} > + </button>
    <button className="qty-button" onClick={ClearItem} > x </button>
    </>


)
}

export default ItemControl
