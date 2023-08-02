import { useNavigate } from "react-router-dom";

import {
  STC_DirectoryItemContainer,
  STC_BackgroundImage,
  STC_Body,
} from "./directory-item.styles.jsx";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { title, imageURL, route } = category;

  const navigationHandler = () => navigate(route);

  return (
    <STC_DirectoryItemContainer  onClick={navigationHandler}>
      <STC_BackgroundImage imageUrl={imageURL} />
      <STC_Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </STC_Body>
    </STC_DirectoryItemContainer>
  );
};

export default DirectoryItem;
