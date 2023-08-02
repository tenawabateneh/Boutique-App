import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
  STC_CartDrodownContainer,
  STC_EmptyMessage,
  STC_CartItemContainer,
} from "./cart-dropdown.styles";

const CartDroDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => navigate("/checkout");

  return (
    <STC_CartDrodownContainer>
      <STC_CartItemContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <STC_EmptyMessage>Your Cart is Empty! </STC_EmptyMessage>
        )}
      </STC_CartItemContainer>
      <Button onClick={handleCheckout}> Checkout It </Button>
    </STC_CartDrodownContainer>
  );
};
export default CartDroDown;
