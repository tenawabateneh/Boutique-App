import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";

import {
  STC_CategoryPreviewContainer,
  STC_Title,
  STC_Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <STC_CategoryPreviewContainer>
      <h2>
        <STC_Title to={title}>
          {title.toUpperCase()}
        </STC_Title>
      </h2>
      <STC_Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.index} product={product} />
          ))}
      </STC_Preview>
    </STC_CategoryPreviewContainer>
  );
};

export default CategoryPreview;
