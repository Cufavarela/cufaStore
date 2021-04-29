import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { productsMock } from "../mock/productsMock";
import Loader from "../../loader/loader";
import "./itemList.scss";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = new Promise((res, rej) => {
    setTimeout(function () {
      res(productsMock);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getProducts
      .then((res) => setProducts(res))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  return <>{isLoading ? <Loader /> : <ItemList products={products} />}</>;
};

export default ItemListContainer;
