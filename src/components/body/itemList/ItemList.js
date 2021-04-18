import { useEffect, useState } from "react";
import { productsMock } from "../mock/productsMock";
import Loader from "../../loader/loader";
import { Item } from "./Item";

export const ItemList = () => {
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

  return (
    <div className="productListWrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="productList">
          {products.map((product) => (
            <Item product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
