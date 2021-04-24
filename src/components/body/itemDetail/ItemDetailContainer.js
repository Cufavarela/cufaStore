import { useEffect, useState } from "react";
import "./itemDetail.scss";
import Loader from "../../loader/loader";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = ({ setModalIsOpen }) => {
  const productMock = {
    id: 1,
    name: "Cufampera",
    img: "http://placekitten.com/g/200/300",
    stock: 5,
    price: 500,
  };

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = new Promise((res, rej) => {
    setTimeout(function () {
      res(productMock);
    }, 2000);
  });

  useEffect(() => {
    setIsLoading(true);
    getProducts
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
