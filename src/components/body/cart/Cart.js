import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import trashIcon from "../../../assets/trash.png";
import "./cart.scss";

export const Cart = () => {
  const { cart, removeProduct, totalPrice } = useContext(CartContext);

  const calculatePrice = (price, qty) => {
    return price * qty;
  };

  return (
    <div className="cartItemsWrapper">
      {cart.length ? (
        <>
          {cart.map((product) => (
            <div key={product.id} className="cartItem">
              <h2>{product.name}</h2>
              <h4>Qty: {product.qty}</h4>
              <h4>${calculatePrice(product.price, product.qty)}</h4>
              <img
                className="trashIcon"
                src={trashIcon}
                alt="#"
                onClick={() => {
                  removeProduct(product);
                }}
              />
            </div>
          ))}
          <div className="cartItem">
            <h2>TOTAL</h2>
            <span />
            <h4>${totalPrice}</h4>
            <span />
          </div>
        </>
      ) : (
        <h1>No hay items en el carrito</h1>
      )}
    </div>
  );
};
