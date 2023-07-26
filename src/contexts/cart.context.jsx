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

const removeCartItem = (cartItems, productToRemove) => {
  // find the cartItem to remove
  const existedCartItem = cartItems.find(
    (item) => item.id == productToRemove.id
  );

  //  check if quantity equal to 1, if it's remove that from the cart
  if (existedCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id != productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id == productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClearOut) => {
  return cartItems.filter((cartItem) => cartItem.id != productToClearOut.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClearOut) => {
    setCartItems(clearCartItem(cartItems, productToClearOut));
  };

  // To clculate cartSize and to set it on the cartbag
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  // To clculate cartTotal Price
  useEffect(() => {
    const newCartTotalPrice = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotalPrice(newCartTotalPrice);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    clearItemFromCart,
    cartCount,
    cartTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
