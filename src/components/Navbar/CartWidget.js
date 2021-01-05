import { RiShoppingCartLine } from 'react-icons/ri';
import { Link } from "react-router-dom"
import "./Navbar.css"

export function CartWidget () {
    return ( 
        //eslint-disable-next-line
        <Link to="cart" className="CartWidget" >
            <RiShoppingCartLine /> 
        </Link>
    )  
  }

 