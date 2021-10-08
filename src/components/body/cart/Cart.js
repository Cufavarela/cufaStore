import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import trashIcon from "../../../assets/trash.png";
import "./cart.scss";
import UserForm from "./UserForm";
import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "../../../firebase/firebaseConfig";
import Loader from "../../loader/loader";

export const Cart = () => {
  const { cart, removeProduct, totalPrice } = useContext(CartContext);
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({
    name: null,
    email: null,
  });

  const calculatePrice = (price, qty) => {
    return price * qty;
  };

  const crearOrden = () => {
    const db = getFirestore();
    const orders = db.collection("orders");
    const newOrder = {
      buyer: user,
      items: cart,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPrice,
    };
    orders
      .add(newOrder)
      .then(({ id }) => {
        console.log(id);
        setOrder({ id: id, ...newOrder });
      })
      .catch((error) => {
        console.log("Error creating order", error);
      });
  };

  return (
    <div className="cartView">
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
            <button
              className="button3"
              disabled={!(user.name && user.email && cart.length)}
              onClick={() => crearOrden()}
            >
              Finalizar Compra
            </button>
          </>
        ) : (
          <h1>No hay items en el carrito</h1>
        )}
      </div>
      <div className="formWrapper">
        <UserForm user={user} setUser={setUser} />
        {order.id ? <div>Tu número de orden es: {order.id}</div> : <Loader />}
      </div>
    </div>
  );
};
