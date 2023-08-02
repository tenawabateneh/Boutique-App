import { styled } from "styled-components";
import { STC_InvertedButton } from "../button/button.styles";

export const STC_ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin-left: 2%;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  ${STC_InvertedButton} {
    width: 75%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }

    ${STC_InvertedButton} {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const STC_ProductCardFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const STC_ProductName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const STC_ProductPrice = styled.span`
  width: 10%;
`;
