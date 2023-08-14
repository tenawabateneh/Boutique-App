import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import { selectCartTotalPrice } from "../../store/cart/cart.selector";
import { selectCartItems } from "../../store/cart/cart.selector";

import {
  STC_CheckoutContainer,
  STC_CheckoutHeaderContainer,
  STC_CheckoutHeaderBlock,
  STC_TotalCost,
} from "./checkout.styles";

const CheckOut = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectCartTotalPrice);

  return (
    <STC_CheckoutContainer>
      <STC_CheckoutHeaderContainer>
        <STC_CheckoutHeaderBlock>
          <span>Product</span>
        </STC_CheckoutHeaderBlock>
        <STC_CheckoutHeaderBlock>
          <span>Description</span>
        </STC_CheckoutHeaderBlock>
        <STC_CheckoutHeaderBlock>
          <span>Quantity</span>
        </STC_CheckoutHeaderBlock>
        <STC_CheckoutHeaderBlock>
          <span>Price</span>
        </STC_CheckoutHeaderBlock>
        <STC_CheckoutHeaderBlock>
          <span>Remove</span>
        </STC_CheckoutHeaderBlock>
      </STC_CheckoutHeaderContainer>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <STC_TotalCost>Total: ${cartTotalPrice}</STC_TotalCost>
    </STC_CheckoutContainer>
  );
};

export default CheckOut;
