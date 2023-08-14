import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { name, price, imageUrl, quantity } = cartItem;

  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <STC_CheckoutItemContainer>
      <STC_ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </STC_ImageContainer>
      <STC_BaseSpan> {name} </STC_BaseSpan>
      <STC_QuantityContainer>
        <STC_Arrow onClick={removeItemHandler}>&#10094;</STC_Arrow>
        <STC_Value> {quantity} </STC_Value>
        <STC_Arrow onClick={() => dispatch(addItemToCart(cartItems, cartItem))}>
          &#10095;
        </STC_Arrow>
      </STC_QuantityContainer>
      <STC_BaseSpan> {price} </STC_BaseSpan>
      <STC_RemoveButton onClick={clearItemHandler}> &#10005;</STC_RemoveButton>
    </STC_CheckoutItemContainer>
  );
};

export default CheckoutItem;
