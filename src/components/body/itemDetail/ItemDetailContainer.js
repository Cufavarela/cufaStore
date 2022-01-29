import { useEffect, useState } from "react";
import "./itemDetail.scss";
import Loader from "../../loader/loader";
import { ItemDetail } from "./ItemDetail";
import { productMock } from "../mock/oneProductMock";

export const ItemDetailContainer = ({ setModalIsOpen }) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getItem = new Promise((res, rej) => {
    setTimeout(function () {
      res(productMock);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getItem
      .then((res) => setProduct(res))
      .catch((err) => alert(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="itemDetailWrapper">
      {isLoading ? (
        <Loader />
      ) : (
        <ItemDetail product={product} setModalIsOpen={setModalIsOpen} />
      )}
    </div>
  );
};
