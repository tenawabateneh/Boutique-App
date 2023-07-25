import { createContext, useState } from "react";

export const CartContext = createContext({
  isSetCartOpen: false,
  setIsSetCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [isSetCartOpen, setIsSetCartOpen] = useState(false);
  const value = { isSetCartOpen, setIsSetCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
