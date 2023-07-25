import { createContext, useState } from "react";
import PRODUCTS from "../sope-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products }; //the product should be destructured form unless it doesn't work like this {products}

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
