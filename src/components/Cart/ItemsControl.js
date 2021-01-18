import {useContext} from "react";
import {Store} from "../../store/Store"



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
            cantidad: cart.cantidad - 1,
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
    <button onClick={AddItem}> + </button>
    <button onClick={RemoveItem} > - </button>
    <button onClick={ClearItem} > X </button>
    </>


)
}

export default ItemControl
