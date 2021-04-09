import cartIcon from "../../../assets/shopping-cart.png";

const CartWidget = () => {
  return (
    <a href="#">
      <img className="cartIcon" src={cartIcon} alt="#" />
    </a>
  );
};

export default CartWidget;
