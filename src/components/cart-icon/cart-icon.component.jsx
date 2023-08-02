import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
  STC_CartIconContainer,
  STC_ShoppingIcon,
  STC_ItemCount,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <STC_CartIconContainer onClick={toggleIsCartOpen}>

      <STC_ShoppingIcon />
      <STC_ItemCount> {cartCount} </STC_ItemCount>
      
    </STC_CartIconContainer>
  );
};

export default CartIcon;
