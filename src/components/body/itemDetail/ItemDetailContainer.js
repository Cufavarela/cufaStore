import { useEffect, useState } from "react";
import "./itemDetail.scss";
import Loader from "../../loader/loader";
import { ItemDetail } from "./ItemDetail";
import { productsMock } from "../mock/productsMock";
import { useParams } from "react-router";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = new Promise((res, rej) => {
    setTimeout(function () {
      res(productsMock);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getProducts
      .then((res) => {
        res.forEach((item) => {
          if (item.id === id) {
            setProduct(item);
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
