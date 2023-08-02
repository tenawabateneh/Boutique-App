import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  STC_CheckoutItemContainer,
  STC_ImageContainer,
  STC_BaseSpan,
  STC_QuantityContainer,
  STC_Arrow,
  STC_Value,
  STC_RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { name, price, imageUrl, quantity } = cartItem;

  const removeItemHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <STC_CheckoutItemContainer>
      <STC_ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </STC_ImageContainer>
      <STC_BaseSpan> {name} </STC_BaseSpan>
      <STC_QuantityContainer>
        <STC_Arrow onClick={removeItemHandler}>
          &#10094;
        </STC_Arrow>
        <STC_Value> {quantity} </STC_Value>
        <STC_Arrow onClick={() => addItemToCart(cartItem)}>
          &#10095;
        </STC_Arrow>
      </STC_QuantityContainer>
      <STC_BaseSpan> {price} </STC_BaseSpan>
      <STC_RemoveButton onClick={clearItemHandler}> &#10005;</STC_RemoveButton>
    </STC_CheckoutItemContainer>
  );
};

export default CheckoutItem;
