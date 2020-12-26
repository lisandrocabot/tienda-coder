import { MenuItems } from "./MenuItems";
import { CartWidget } from "./CartWidget.js";
import "./Navbar.css"



const Navbar = () => {
    return (
        <nav className="NavbarItems"> 
            <h1 className="navbar-logo">Fashion Website</h1>
            <div className="menu-icon">
            <img src="https://img.icons8.com/ios/50/ffffff/little-black-dress.png" alt="fashion-website-logo"/>
            </div>
            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
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