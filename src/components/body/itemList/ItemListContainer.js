import { ItemList } from "./ItemList";
import "./itemList.scss";

const ItemListContainer = ({ greeting }) => {
  // const [qty, setQty] = useState(1);

  // const onAdd = (selectedQty) => {
  //   setQty(selectedQty);
  //   alert(`Agregaste ${selectedQty} items al carrito 🛒`);
  // };

  return (
    <>
      <h1>{greeting} 🛠</h1>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
