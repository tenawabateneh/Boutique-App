import { Fragment, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDroDown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

import {
  STC_NavigationContainer,
  STC_LogoContiainer,
  STC_NavLinks,
  STC_NavLink,
} from "./navigation.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();

  // select values and put them(data) to your component from your redux
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();
  const signOutUser = () => dispatch(signOutStart());

  useEffect(() => {
    if (currentUser) navigate("/");
    else navigate("/auth");
  }, [currentUser]);

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
