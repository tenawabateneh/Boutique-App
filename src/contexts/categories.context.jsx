import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../sope-data.js";
import { getCatagoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setcategoryMap] = useState({});
  const value = { categoriesMap }; //the product should be destructured form unless it doesn't work like this {products}

  // This is just to insert datas into the firestore database
  // I comment this because of this useEffect run and set new value evrytime
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCatagoriesAndDocuments();
      setcategoryMap(categoryMap);
      // console.log(categoryMap);
    };

    getCategoryMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
