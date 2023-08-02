import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const STC_CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const STC_Title = styled(Link)`
  font-size: 100%;
  margin-bottom: 25px;
  cursor: pointer;
  font-style: italic;
  font-family:Arial, Helvetica, sans-serif;
`;

export const STC_Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
