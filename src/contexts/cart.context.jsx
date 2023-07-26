import { createContext, useState, useEffect } from "react";

// Helper function to add the product
const addCartItem = (cartItems, productToAdd) => {
  // if the product existed in the cartBag
  const existedCartItem = cartItems.find((item) => item.id == productToAdd.id);

  if (existedCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id == productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // if it's the first item being added
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  let [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  // To clculate cartSize and to set it on the cartbag
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem)=>total + cartItem.quantity, 0)
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
