import { styled } from "styled-components";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const STC_ShoppingIcon = styled(ShoppingIcon)`
  width: 24px;
  height: 24px;
`;

export const STC_CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const STC_ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
