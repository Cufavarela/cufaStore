import { useState } from "react";
import { ItemsCount } from "../itemsCount/ItemsCount";

const ItemListContainer = ({ greeting }) => {
  const [qty, setQty] = useState(1);

  const onAdd = (selectedQty) => {
    setQty(selectedQty);
    alert(`Agregaste ${selectedQty} items al carrito 🛒`);
  };

  return (
    <>
      <ItemsCount stock={5} initial={1} onAdd={onAdd} />
      <h1>{greeting} 🛠</h1>
    </>
  );
};

export default ItemListContainer;
