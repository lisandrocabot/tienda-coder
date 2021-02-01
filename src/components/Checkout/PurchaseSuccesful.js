import {Link} from "react-router-dom";

const PurchaseSuccesful = ({id}) => {
   return(
    <section className="cart-section">
        <div className="title-container">
            <h1>¡Felicitaciones!</h1>        
        </div>
        <div className="empty-cart">
            <h3 className="empty-cart-title"> Tu compra fue exitosa </h3>
            <p className="empty-cart-message"> Tu código de seguimiento es {id} </p>
            <button className="regular-button"><Link to="/"> INICIO </Link></button>
        </div>
       </section>
    )
}

export default PurchaseSuccesful