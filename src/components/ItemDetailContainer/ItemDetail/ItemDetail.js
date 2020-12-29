
const ItemDetail = ({Item}) => {
  return (
      <div>
        <h3>{Item.title}</h3>
        <img src={Item.img} alt="Imagen de producto"/>
        <p>{Item.detail}</p>
        <p>$ {Item.price}</p>
        <button>Agregar al carrito </button>
      </div>
    )
  }

export default ItemDetail

