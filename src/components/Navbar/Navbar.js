import { MenuItems } from "./MenuItems";
import { CartWidget } from "./CartWidget.js";
import {Link} from "react-router-dom";
import "./Navbar.css"



const Navbar = () => {
    return (
        <nav className="NavbarItems"> 
            <h1 className="navbar-logo"><Link to="/">Fashion Website</Link></h1>
            <div className="menu-icon">
            <img src="https://img.icons8.com/ios/50/ffffff/little-black-dress.png" alt="fashion-website-logo"/>
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                            {item.title}
                            </Link>
                        </li>
                    )
                })}
                        <li> 
                            <CartWidget />
                        </li>               
            </ul>
        </nav>
    )
}

export default Navbar