import "./itemsCount.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        <Link className="button2" onClick={() => onAdd(counter)}>
          Add to cart
        </Link>
      </div>
    </div>
  );
}
