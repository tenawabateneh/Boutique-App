import { styled } from "styled-components";

export const STC_CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const STC_CategoryTitle = styled.h2`
  font-size: 125%;
  margin-bottom: 25px;
  text-align: center;
`;
