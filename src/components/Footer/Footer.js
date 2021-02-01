
import "./Footer.css";
import {SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {

    return(
        <footer className="footer-container">  
        <section className="footer-section">
            <div> 
                <p>CO Embroidery</p>
                <div className="socialbuttons"> 
                    <SiFacebook />
                    <SiInstagram />
                </div>
            </div>        
            <div>
                <div> Suscribite al Newsletter </div>
                <form >
                    <input className="newsletter-form" type="email" placeholder="usuario@ejemplo.com" required/>
                </form>
            </div>
        </section>
        <div className="copyright"> Made by <a href="https://www.linkedin.com/in/lisandrocabot">Lisandro Cabot</a></div>



        </footer>
    )
}

export default Footer