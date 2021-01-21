import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from "react-router-dom"
import "./Navbar.css"
import {useContext} from "react";
import {Store} from "../../Store/Store"


export function CartWidget () {
    const [cart, setCart] = useContext(Store);
    const totalProducts = cart.items.reduce((acc, curr) => acc + curr.cantProd, 0) 
    return ( 
        
        //eslint-disable-next-line
        <Link to="cart" className="CartWidget" >
            <RiShoppingCartLine  /> 
            <span style={totalProducts === 0 ? {display:"none"} : {display:""} }>{totalProducts}</span>
        </Link>
    )

  }

 