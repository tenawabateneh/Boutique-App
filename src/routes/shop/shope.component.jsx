import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.componenet";
import Category from "../category/category.component";

import { getCatagoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCatagoriesAndDocuments();
      dispatch(setCategories(categoriesArray));
      // console.log(categoriesArray);
    };

    getCategoryMap();
  }, []);

  return (
    // nested route is here /shope/*...
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
