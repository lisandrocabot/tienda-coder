import "./TermsBanner.css";

const TermsBanner = () => {
    return (
        <div className="banner-container">
            <div className="TermsContainer">
                <h2 className="TermsTitle"> ENVÍOS Y ENTREGAS </h2>
                <p className="TermsText"> Podrás elegir entre el envío a domicilio, envío a sucursal de correo o el retiro en cualquiera de nuestras tiendas, según disponibilidad.</p>
                <ul> 
                    <li>El costo de envío es GRATIS para todos los pedidos que superen los $8.500</li>
                    <li>Envío a domicilio CABA y GBA: Entre 5 y 10 días hábiles. El costo de envío es de $350</li>
                    <li>Envío a domicilio interior del país: Entre 10 y 15 días hábiles. El costo de envío es de $350</li>
                </ul>
            </div>
            <div className="TermsContainer">
                <h2 className="TermsTitle"> MEDIOS DE PAGO</h2>
                <p className="TermsText"> Todas las compras se pueden realizar mediante tarjeta de crédito o débito. Nuestro sistema de cobranza es 100% seguro. 
                Los números son encriptados y no sufren ningún tipo de amenaza en nuestro banco de datos, siendo enviados directamente a la administradora de la tarjeta de crédito. 
                Todas las compras son procesadas mediante MercadoPago, y así lo verás reflejado en tu resumen de cuentas. </p>
                </div>
            <div className="TermsContainer">           
                <h2 className="TermsTitle"> ATENCIÓN AL CLIENTE </h2>
                <div className="TermsText">
                    <ul> 
                        <li> <h4>ATENCIÓN TELEFÓNICA </h4>
                            Lunes a Viernes de 10:00 a 17:00hs</li>
                        <li> <h4>CONSULTAS POR REDES SOCIALES </h4>
                            Lunes a Viernes de 10:00 a 17:00hs </li>
                        <li><h4>MAIL</h4>
                            co.embroideryartist@gmail.com </li>
                    </ul>
                </div>
                </div> 
        </div>
    );
};

export default TermsBanner;