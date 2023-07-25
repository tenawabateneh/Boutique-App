import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isSetCartOpen, setIsSetCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsSetCartOpen(!isSetCartOpen);
  };

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count"> 0 </span>
    </div>
  );
};

export default CartIcon;
