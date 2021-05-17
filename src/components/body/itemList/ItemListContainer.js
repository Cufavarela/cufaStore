import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import Loader from "../../loader/loader";
import "./itemList.scss";
import { getFirestore } from "../../../firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [getIsEmpty, setGetIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          setGetIsEmpty(true);
        }
        setProducts(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : getIsEmpty ? (
        <h2>NO HAY PRODUCTOS</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};

export default ItemListContainer;
