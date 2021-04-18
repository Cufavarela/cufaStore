export const Item = ({ product }) => {
  return (
    <div className="productWrapper">
      <img src={product.img} alt="product" />
      <h2>{product.name}</h2>
      <h4>${product.price}</h4>
    </div>
  );
};
