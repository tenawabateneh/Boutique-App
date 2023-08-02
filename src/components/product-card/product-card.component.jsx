import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import {
  STC_ProductCardContainer,
  STC_ProductCardFooter,
  STC_ProductName,
  STC_ProductPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemToMyCart = () => addItemToCart(product);

  return (
    <STC_ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <STC_ProductCardFooter>
        <STC_ProductName>{name}</STC_ProductName>
        <STC_ProductPrice>{price}</STC_ProductPrice>
      </STC_ProductCardFooter>
      <Button
        type="button"
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addItemToMyCart}
      >
        Add To Cart
      </Button>
    </STC_ProductCardContainer>
  );
};

export default ProductCard;
