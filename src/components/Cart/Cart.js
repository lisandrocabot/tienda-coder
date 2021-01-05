import {Link} from "react-router-dom";


const Cart = () => {

   return(
    <div className="Cart">
        <h2>Este es el Cart de compras</h2>
        <Link to="/camisas" className="ReturnButton"> Regresar </Link>
    </div>
    )
}

export default Cart