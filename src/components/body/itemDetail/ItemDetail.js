import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemsCount } from "../itemsCount/ItemsCount";
import { CartContext } from "../../../context/CartContext";

export const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const [finishButton, setFinishButton] = useState(false);
  const { addProduct } = useContext(CartContext);

  const goToPayment = () => {
    addProduct(product.id, product.name, product.price, qty);
  };

  const onAdd = (qty) => {
    setQty(qty);
  };

  useEffect(() => {
    if (qty !== 0) {
      setFinishButton(true);
    }
  }, [qty]);

  return (
    <div className="itemDetail">
      <img src="http://placekitten.com/g/200/300" alt="product" />
      <h2>{product.name}</h2>
      <h4>${product.price}</h4>
      <ItemsCount stock={product.stock} initial={1} onAdd={onAdd} />
      {finishButton ? (
        <Link
          to="/cart"
          className="button2"
          onClick={() => {
            goToPayment();
          }}
        >
          Go to payment
        </Link>
      ) : null}
      <Link
        className="buttonClose"
        to="/"
        onClick={() => {
          setQty(0);
        }}
      >
        Go Back!
      </Link>
    </div>
  );
};
