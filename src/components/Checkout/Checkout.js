import {useState, useContext} from "react";
import {Store} from "../../Store/Store"
import {getFirestore} from "../../db/index"
import firebase from "firebase/app";
import {useHistory} from 'react-router-dom';


const Checkout = () => {  
    const history = useHistory();
    const db = getFirestore();
    const [cart, setCart] = useContext(Store)
    const [formData, setFormData] = useState({
        nombre: "",
        apellido:"",
        email:"",
        telefono:"", 
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
            setCart({items:[], cantidad: 0, precioTotal: 0})
            alert(`FELICITACIONES! Realizaste tu compra. Tu numero de seguimiento es ${id}`)
            history.push('/');
        })
        .catch(err => console.log(err))
  
    }

    return(
        <section>
            <div>
                <h1> CHECKOUT </h1>
                    <h3>Estas comprando {totalProducts} productos. </h3>
                    <h3>Precio Total: $ {totalPrice}</h3>
                <h2> DATOS DE FACTURACION </h2>
                <form onSubmit={handleSubmitForm}>
                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" />
                    <input type="text" value={formData.apellido} onChange={handleChangeInput} name="apellido" placeholder="Apellido" />
                    <input type="email" value={formData.email} onChange={handleChangeInput}  name="email" placeholder="Correo Electrónico" />
                    <input type="tel" value={formData.tel} onChange={handleChangeInput}  name="telefono" placeholder="Teléfono" />
                    <button> Comprar </button>
                </form>
                <h2> MÉTODO DE PAGO </h2>
                <form>
                    <input type="number" name="tarjeta" placeholder="Número de Tarjeta" />
                    <input type="text" name="vencimiento" placeholder="Fecha de vencimiento" />
                </form>
                
            </div>
        </section>
        )
}

export default Checkout; 