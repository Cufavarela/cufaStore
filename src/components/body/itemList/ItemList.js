import { Item } from "./Item";

export const ItemList = ({ products }) => {
  return (
    <div className="productListWrapper">
      <div className="productList">
        {products.map((product) => (
          <Item product={product} />
        ))}
      </div>
    </div>
  );
};
