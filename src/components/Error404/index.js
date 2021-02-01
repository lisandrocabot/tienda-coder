import "./Error404.css"

const Error404 = () => {
    return (
        <section className="error-section">
            <div className="error-title-container">
                <h2>Error 404</h2>
            </div>
            <p className="error-message">Estás buscando algo que no existe.</p>
        </section>
    )
}

export default Error404;