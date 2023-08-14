import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { STC_CategoryContainer, STC_CategoryTitle } from "./category.styles";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams(); // from sohp component
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <STC_CategoryTitle>{category.toLocaleUpperCase()}</STC_CategoryTitle>

      {isLoading ? (
        <Spinner />
      ) : (
        <STC_CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </STC_CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
