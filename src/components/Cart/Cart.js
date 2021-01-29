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
    <section className="cart-section">
        <div className="title-container">
            <h1>Mi carrito</h1>
        </div>
            {
            cart.items.length ?

                <ul className="cart-container">
                    { cart.items.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img className="item-img"  src={`/${item.item.pictureUrl}`} alt={item.item.title} />
                                <div className="item-details">
                                    <h4 className="cart-title"> {item.item.title} </h4>
                                    <p className="cart-price"> Precio: ${item.item.price} </p>
                                </div>        

                                <ItemsControl productId={cart.items.indexOf(item)}/>
                            </li>
                    ))}

                        <h2>Productos Totales: {totalProducts}</h2>
                        <h2>Precio Total: ${totalPrice}</h2>
                    <button className="clearall-button" onClick={ClearAll}> Vaciar Carrito </button>

                    <button className="regular-button"><Link to="/checkout" style={{color: "black"}}> COMPRAR </Link></button>
                </ul>
                :
                    <div className="empty-cart">
                        <h3 className="empty-cart-title"> Su carrito está vacio</h3>
                        <p className="empty-cart-message"> Para seguir comprando, navegue por las categorías en el sitio. </p>
                        <button className="regular-button"><Link to="/camisas"> ELEGIR PRODUCTOS </Link></button>
                    </div>
    }
       </section>
    )
}

export default Cart