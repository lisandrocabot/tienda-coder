import {useState} from "react";
import {useHistory} from "react-router-dom";
import {getFirestore} from "../../db/index"
import firebase from "firebase/app";
import "./ContactForm.css";


const Contact = () => {
    const db = getFirestore();
    const history = useHistory();

    const [formData, setFormData] = useState({
        nombre: "",
        telefono:"",
        email:"",
        mensaje:"", 
    })

    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const mensaje = {
        date: firebase.firestore.Timestamp.fromDate(new Date()),      
        name: formData.nombre,
        tel: formData.telefono,
        email: formData.email,
        mensaje: formData.mensaje          
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        db.collection("mensajes").add(mensaje)
        .then(({id}) => {
            alert(`Tu mensaje fue enviado correctamente. Tu codigo de seguimiento es ${id}`)
            history.push("/");
            })
        .catch(err => console.log(err))
    }

    return (
        <section className="form-section">
        <div className="form-container">
            <div className="title-container">
                <h1>¡CONTACTANOS!</h1>
            </div>
            <div className="input-container">
                <form onSubmit={handleSubmitForm} className="contact-form">
                    <input type="text" value={formData.nombre} onChange={handleChangeInput} name="nombre" placeholder="Nombre" required />
                    <input type="tel" value={formData.telefono} onChange={handleChangeInput} name="telefono" placeholder="Teléfono"/>
                    <input type="email" value={formData.email} onChange={handleChangeInput}  name="email" placeholder="Correo Electrónico" required/>
                    <textarea type="text" value={formData.mensaje} onChange={handleChangeInput}  name="mensaje" placeholder="Mensaje" required/>
                    <button className="regular-button"> Enviar Mensaje </button>
 
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact;