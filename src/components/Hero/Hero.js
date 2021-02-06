import "./Hero.css"
import {Link} from "react-router-dom"

const Hero = () =>  {
    return (
        <div className="hero-image">
            <div className="hero-section"> 
                <h1 className="hero-title"> NUEVAS</h1>
                <h1 className="hero-title"> TOTE BAGS! </h1>
                <button className="hero-button"> <Link to="/totebags">COMPRAR</Link></button>
            </div>
        </div>
    )
}

export default Hero 