import {Link} from "react-router-dom";
import {Store} from "../../store/Store"
import {useContext} from "react"
import "./Cart.css"

const Cart = () => {
    const [data, setData] = useContext(Store)

   return(
    <div className="Cart">
        <h2>Carrito</h2>

            { 
            data.items.length ? 
               
                <ul className="itemListado">
                    { data.items.map((item, index) => (                        
                            <li key={index} className="itemDatos">
                                {item.title}
                                {<br />}
                                $ {item.price}
                            </li>                            
                    ))}
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