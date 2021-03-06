
import {Link} from "react-router-dom"
import "./Footer.css";
import {SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {

    return(
        <footer className="footer-container">  
        <section className="footer-section">
            <div> 
                <p>CO Embroidery</p>
                <div className="social-buttons"> 
                    <Link to="#"><SiFacebook /></Link>
                    <Link to="#"> <SiInstagram /> </Link>
                </div>
            </div>        
            <div>
                <p> Suscribite al Newsletter </p>
                <div className="form-footer"> 
                    <form >
                        <input className="newsletter-form" type="email" placeholder="usuario@ejemplo.com" required/>
                    </form>
                </div>
            </div>
        </section>
        <div className="copyright"> Made by <a href="https://www.linkedin.com/in/lisandrocabot">Lisandro Cabot</a></div>



        </footer>
    )
}

export default Footer