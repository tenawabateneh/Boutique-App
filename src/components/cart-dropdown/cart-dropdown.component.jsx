import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { useNavigate } from "react-router-dom";
import CheckOut from "../../routes/checkout/checkout.componoent";

import "./cart-dropdown.styles..scss";

const CartDroDown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const handleCheckout = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleCheckout}> Checkout It </Button>
    </div>
  );
};
export default CartDroDown;
