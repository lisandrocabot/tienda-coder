import {useContext} from "react";
import {Store} from "../../Store/Store"


import {Link} from "react-router-dom";

const PurchaseSuccesful = () => {

    const [cart, setCart] = useContext(Store)
   
    return(
    <section className="cart-section">
        <div className="title-container">
            <h1>¡Felicitaciones!</h1>        
        </div>
        <div className="empty-cart">
            <h3 className="empty-cart-title"> Tu compra fue exitosa </h3>
            <p className="empty-cart-message"> Tu código de seguimiento es {cart.id} </p>
            <button className="regular-button"><Link to="/"> INICIO </Link></button>
        </div>
       </section>
    )
}

export default PurchaseSuccesful