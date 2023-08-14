import { useDispatch, useSelector } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import {
  STC_CartIconContainer,
  STC_ShoppingIcon,
  STC_ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <STC_CartIconContainer onClick={toggleIsCartOpen}>
      <STC_ShoppingIcon />
      <STC_ItemCount> {cartCount} </STC_ItemCount>
    </STC_CartIconContainer>
  );
};

export default CartIcon;
