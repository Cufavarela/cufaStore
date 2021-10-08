import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (id, name, price, qty) => {
    const existingIndex = cart.findIndex((item) => item.id === id);

    let cartCopy = cart.slice();
    if (existingIndex >= 0) {
      cartCopy[existingIndex] = {
        ...cartCopy[existingIndex],
        qty: cartCopy[existingIndex].qty + qty,
      };
      setCart(cartCopy);
    } else {
      setCart([
        ...cart,
        {
          id: id,
          name: name,
          price: price,
          qty: qty,
        },
      ]);
    }
  };

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  useEffect(() => {
    if (cart.length) {
      const prices = cart.map((item) => item.price * item.qty);
      console.log(prices.reduce(reducer));
      setTotalPrice(prices.reduce(reducer));
    }
  }, [cart]);

  const removeProduct = (itemInCart) => {
    const existingIndex = cart.findIndex((item) => item.id === itemInCart.id);
    const cartCopy = Array.from(cart);

    if (existingIndex >= 0) {
      cartCopy.splice(existingIndex, 1);
      setCart(cartCopy);
    }
  };

  return (
    <CartContext.Provider
      value={{ addProduct, cart, setCart, removeProduct, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
