import ItemCount from "./ItemCount/ItemCount"

const Item = ({title, detail, price}) => {

  return (

    <>

      <div>
        <h3>{title}</h3>
        <img src="https://placehold.it/350x350" alt="imagen de producto"/>
        <p>{detail}</p>
        <p>$ {price}</p>
      </div>
    
      <ItemCount />
    </>
    )
  }

export default Item

