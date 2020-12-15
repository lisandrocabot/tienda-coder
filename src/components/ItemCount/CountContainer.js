export default function CountContainer({ count, add, less }) {
    return (
      <>
        <h2> Nombre del Producto </h2>
        <button onClick={() => add()}>+</button>
        <p>{count}</p>
        <button onClick={() => less()}>-</button>
      </>
    );
  }