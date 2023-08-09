import "./cart-item.styles";
import { STC_CartItemContainer, STC_ItemDetails } from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <STC_CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <STC_ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </STC_ItemDetails>
    </STC_CartItemContainer>
  );
};

export default CartItem;
