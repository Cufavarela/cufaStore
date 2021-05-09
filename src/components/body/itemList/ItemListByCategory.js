import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { productsMock } from "../mock/productsMock";
import Loader from "../../loader/loader";
import "./itemList.scss";
import { useParams } from "react-router";

const ItemListByCategory = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { category } = useParams();

  const getProducts = new Promise((res, rej) => {
    setTimeout(function () {
      res(productsMock);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getProducts
      .then((res) => {
        setProducts(res.filter((item) => item.category === category));
      })
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, [category]);

  return <>{isLoading ? <Loader /> : <ItemList products={products} />}</>;
};

export default ItemListByCategory;
