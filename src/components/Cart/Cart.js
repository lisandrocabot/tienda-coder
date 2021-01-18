import {Link} from "react-router-dom";
import {Store} from "../../store/Store"
import {useContext} from "react"
import ItemsControl from "./ItemsControl"
import "./Cart.css"

const Cart = () => {
    const [cart, setCart] = useContext(Store)

    const totalPrice = cart.items.reduce((acc, curr) => acc + (curr.cantProd * curr.item.price), 0)
    const totalProd = cart.items.reduce((acc, curr) => acc + curr.cantProd, 0)
    console.log(cart.items)

    const ClearAll = () => {
        setCart({items:[], cantidad: 0})
    }

   return(
    <div className="Cart">
        <h1>Carrito</h1>
            { 
            cart.items.length ? 
               
                <ul className="itemListado">
                    <h2>Detalle de Producto</h2>
                    { cart.items.map((item, index) => (                        
                            <li key={index} className="itemDatos">
                                <h4> Título: {item.item.title} </h4>
                                <p> Precio: ${item.item.price} </p>
                                <p> Cantidad: {item.cantProd} </p>
                                <ItemsControl productId={cart.items.indexOf(item)}/>
                            </li>                            
                    ))}
                    <li> 
                        <h2>Productos Totales: {totalProd}</h2>
                    </li>
                    <li> 
                        <h2>Precio Total: ${totalPrice}</h2>
                    </li> 
                    <button onClick={ClearAll}> Vaciar Carrito </button> 
                </ul>
                : 
                    <>
                        <h3> Tu carrito esta vacío</h3>
                        <Link to="/camisas" className="ReturnButton"> Regresar a la Tienda</Link>
                    </>
    }
       </div>
    )
}

export default Cart