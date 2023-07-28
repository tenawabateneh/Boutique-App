import './directory-item.styles.scss'

const DirectoryItem = ({ category }) => {
  const { title, imageURL } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>   
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
