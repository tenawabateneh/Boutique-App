import { useState, useEffect, useContext, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import { CategoriesContext } from "../../contexts/categories.context";

import { STC_CategoryContainer, STC_CategoryTitle } from "./category.styles";

const Category = () => {
  const { category } = useParams(); // from sohp component
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <STC_CategoryTitle>{category.toLocaleUpperCase()}</STC_CategoryTitle>
      <STC_CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </STC_CategoryContainer>
    </Fragment>
  );
};

export default Category;
