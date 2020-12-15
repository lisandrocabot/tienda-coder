import React, { useState } from "react";
import CountContainer from "./CountContainer";

export default function ItemCount() {
  const [count, setCount] = useState(0);
  const qty = 7;

  const add = () => {
    if (count < qty) {
      setCount(count + 1);
    }
    if (count === qty) {
      alert("Error: El stock de este producto es de " + qty + " unidades.");
    }
  };

  const less = () => {
    if (count === 0) {
      alert("Error: La cantidad mínima es cero.");
      return;
    }

    setCount(count - 1);
  };
  return (
    <div>
      <CountContainer count={count} add={add} less={less} />
    </div>
  );
}

/*import React, { useState } from "react"
import { HiOutlinePlusCircle } from 'react-icons/hi'
import { HiOutlineMinusCircle } from 'react-icons/hi'*/