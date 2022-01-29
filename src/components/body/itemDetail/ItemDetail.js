import { Link } from "react-router-dom";
import { ItemsCount } from "../itemsCount/ItemsCount";

export const ItemDetail = ({ product }) => {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} al carrito!`);
  };

  return (
    <div className="itemDetail">
      <button className="closeButton" onClick={() => setModalIsOpen(false)}>
        X
      </button>
      <img src={product.img} alt="product" />
      <h2>{product.name}</h2>
      <h4>${product.price}</h4>
      <ItemsCount stock={product.stock} initial={1} onAdd={onAdd} />
      <Link className="buttonClose" to="/">
        Go Back!
      </Link>
    </div>
  );
};
