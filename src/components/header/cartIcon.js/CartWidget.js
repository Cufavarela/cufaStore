import { Link } from "react-router-dom";
import cartIcon from "../../../assets/shopping-cart.png";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <img className="cartIcon" src={cartIcon} alt="#" />
      {cart.length ? <p className="qty">{cart.length}</p> : null}
    </Link>
  );
};

export default CartWidget;
