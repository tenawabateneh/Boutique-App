import { useDispatch, useSelector } from "react-redux";

import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";

import {
  STC_ProductCardContainer,
  STC_ProductCardFooter,
  STC_ProductName,
  STC_ProductPrice,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const { name, price, imageUrl } = product;
  const addItemToMyCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <STC_ProductCardContainer key={product.id}>
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
