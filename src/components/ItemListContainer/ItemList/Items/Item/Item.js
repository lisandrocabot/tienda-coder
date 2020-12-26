import ItemCount from "./ItemCount/ItemCount"

const Item = ({title, pictureUrl,detail, price}) => {

  return (

    <>

      <div>
        <h3>{title}</h3>
        <img src={pictureUrl} alt="imagen de producto"/>
        <p>{detail}</p>
        <p>$ {price}</p>
      </div>
    
      <ItemCount />
    </>
    )
  }

export default Item

