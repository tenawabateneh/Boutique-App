import Button from "../button/button.component";
import "./cart-dropdown.styles..scss";

const CartDroDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};
export default CartDroDown;
