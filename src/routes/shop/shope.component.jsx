import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.componenet";
import Category from "../category/category.component";


const Shop = () => {
  return (
    // nested route is here /shope/*...
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
