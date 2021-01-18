import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from "react-router-dom"
import "./Navbar.css"
import {useContext} from "react";
import {Store} from "../../store/Store"

export function CartWidget () {
    const [cart, setCart] = useContext(Store)
    

    return ( 
        //eslint-disable-next-line
        <Link to="cart" className="CartWidget" >
            <RiShoppingCartLine  /> 
            <span style={cart.cantidad? {display:""} : {display:"none"} }>{cart.cantidad}</span>
        </Link>
    )  
  }

 