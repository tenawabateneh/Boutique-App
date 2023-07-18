import CatagoryItem from "../catagory-Item/catagory-item.component";
import "../sass-component/catagories.styles.scss";

const Directory = ({catagories}) => {
  return (
    <div className="categories-container">
      {catagories.map((catagory) => (
        <CatagoryItem key={catagory.id} catagory={catagory} />
      ))}
    </div>
  );
};

export default Directory;
