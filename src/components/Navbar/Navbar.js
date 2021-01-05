import { MenuItems } from "./MenuItems";
import { CartWidget } from "./CartWidget.js";
import {Link} from "react-router-dom";
import "./Navbar.css"



const Navbar = () => {
    return (
        <nav className="NavbarItems"> 
            <div className="menu-icon">
            <Link to="/">
                <img src="./images/WebLogo_white.png" alt="COembroidery-logo"/>  
            </Link>
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