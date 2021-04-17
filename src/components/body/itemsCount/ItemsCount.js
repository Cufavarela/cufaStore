import "./itemsCount.scss";
import { useState } from "react";

export function ItemsCount({ stock, initial, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrement = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counterWrapper">
      <div className="counter">
        <div className="buttons">
          <button className="button" onClick={increment}>
            {" "}
            +{" "}
          </button>
          <div>
            <h3>Cantidad: {counter}</h3>
          </div>
          <button className="button" onClick={decrement}>
            {" "}
            -{" "}
          </button>
        </div>
        <button className="button" onClick={() => onAdd(counter)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
