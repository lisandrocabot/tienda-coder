import {Link} from "react-router-dom";
import {Store} from "../../Store/Store"
import {useContext} from "react"
import ItemsControl from "./ItemsControl"
import "./Cart.css"

const Cart = () => {
    const [cart, setCart] = useContext(Store)
    
    const totalProducts = cart.items.reduce((acc, curr) => acc + curr.cantProd, 0)    
    const totalPrice = cart.items.reduce((acc, curr) => acc + (curr.cantProd * curr.item.price), 0)

    const ClearAll = () => {
        setCart({items:[], cantidad: 0, precioTotal: 0})
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

                        <h2>Productos Totales: {totalProducts}</h2>
                        <h2>Precio Total: ${totalPrice}</h2>
                    <button onClick={ClearAll}> Vaciar Carrito </button> 
                    
                    <Link to="/checkout" style={{color: "black"}}> Comprar </Link> 
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