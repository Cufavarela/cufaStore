import { ItemsCount } from "../itemsCount/ItemsCount";

export const ItemDetail = ({ product, setModalIsOpen }) => {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} al carrito!`);
    setModalIsOpen(false);
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
    </div>
  );
};
