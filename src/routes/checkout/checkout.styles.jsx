import { styled } from "styled-components";

export const STC_CheckoutContainer = styled.div`
  width: 65%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const STC_CheckoutHeaderContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  font-size: 125%;
    font-style:italic;

  `;

export const STC_CheckoutHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const STC_TotalCost = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 150%;
`;
