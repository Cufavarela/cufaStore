import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <>
      <Link className="productWrapper" to={`/products/${product.id}`}>
        <img src={product.img} alt="product" />
        <h2>{product.name}</h2>
        <h4>${product.price}</h4>
      </Link>
    </>
  );
};
