import { Link } from "react-router-dom";
import cartIcon from "../../../assets/shopping-cart.png";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <img className="cartIcon" src={cartIcon} alt="#" />
    </Link>
  );
};

export default CartWidget;
