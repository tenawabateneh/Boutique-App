import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const STC_NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const STC_LogoContiainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const STC_NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const STC_NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
