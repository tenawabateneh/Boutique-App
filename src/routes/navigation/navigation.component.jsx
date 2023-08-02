import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDroDown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {
  STC_NavigationContainer,
  STC_LogoContiainer,
  STC_NavLinks,
  STC_NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <STC_NavigationContainer>
        <STC_LogoContiainer to="/">
          <CrownLogo className="logo" />
        </STC_LogoContiainer>
        <STC_NavLinks>
          <STC_NavLink to="/shop">SHOP</STC_NavLink>
          {currentUser ? (
            <STC_NavLink as="span" onClick={signOutUser}>
              SIGN-OUT
            </STC_NavLink>
          ) : (
            <STC_NavLink to="/auth">SIGN-IN</STC_NavLink>
          )}
          <CartIcon />
        </STC_NavLinks>
        {isCartOpen && <CartDroDown />}
      </STC_NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
