import {useState, useContext} from "react";
import {Store} from "../../Store/Store"
import {getFirestore} from "../../db/index"
import firebase from "firebase/app";
import {useHistory} from 'react-router-dom';
import "./checkout.css"


const Checkout = () => {  
    const history = useHistory();
    const db = getFirestore();
    const [cart, setCart] = useContext(Store)
    const [formData, setFormData] = useState({
        nombre: "",
        apellido:"",
        email:"",
        telefono:"", 
        domicilio:"",
    })

    const totalProducts = cart.items.reduce((acc, curr) => acc + curr.cantProd, 0)    
    const totalPrice = cart.items.reduce((acc, curr) => acc + (curr.cantProd * curr.item.price), 0)

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const compra = {
        user: formData,
        items: cart.items,
        totalPrice: totalPrice,
        date: firebase.firestore.Timestamp.fromDate(new Date()),        
    }
    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection("ventas").add(compra)
        .then(({id}) => {
            console.log(id)
            setCart({items:[], cantidad: 0, precioTotal: 0, id: id})
            history.push('/purchase-succesful/');
        })
        .catch(err => console.log(err))
  
    }

    return(
        <section className="checkout-section">
            <div className="checkout-container">
                <h1 className="title-form"> CHECKOUT </h1>
                    <h3 className="purchase-details">Estas comprando {totalProducts} productos. </h3>
                    <h3 className="purchase-details">Precio Total: $ {totalPrice}</h3>
                <h2 className="title-form"> DATOS DE CONTACTO </h2>
                <form className="form-checkout" onSubmit={handleSubmitForm}>
                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" required/>
                    <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" required/>
                    <input type="email" value={formData.email} onChange={handleChangeInput}  name="email" placeholder="Correo Electrónico" required/>
                    <input type="tel" value={formData.tel} onChange={handleChangeInput}  name="telefono" placeholder="Teléfono" required/>
                    <input type="domicilio" value={formData.domicilio} onChange={handleChangeInput}  name="domicilio" placeholder="Domicilio" required/>
                <h2  className="title-form"> MÉTODO DE PAGO </h2>
                    <input type="number" minLength="13" maxLength="18" name="tarjeta" placeholder="Número de tarjeta" required="required"/>
                    <input type="text" name="vencimiento" placeholder="Titular de tarjeta" required/>
                    <input type="month" name="vencimiento" placeholder="Vencimiento (MM/AA)" required/>
                    <input type="number" maxLength="3" name="cvv" placeholder="CVV" required/>
                    <input type="number"  name="dni" placeholder="Documento del Titular" required/>
                    <button className="regular-button"> REALIZAR PEDIDO </button>
                </form>
                
            </div>
        </section>
        )
}

export default Checkout; 