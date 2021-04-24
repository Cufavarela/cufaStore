import { ItemList } from "./ItemList";
import "./itemList.scss";

const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting} 🛠</h1>
      <ItemList />
    </>
  );
};

export default ItemListContainer;
