import { useEffect, useState } from "react";
import "./itemDetail.scss";
import Loader from "../../loader/loader";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router";
import { getFirestore } from "../../../firebase/firebaseConfig";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const db = getFirestore();
    const itemsCollection = db.collection("items");
    itemsCollection
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.forEach((doc) => {
          if (doc.id === id) {
            setProduct({ id: doc.id, ...doc.data() });
          }
        });
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="itemDetailWrapper">
      {isLoading ? <Loader /> : <ItemDetail product={product} />}
    </div>
  );
};
