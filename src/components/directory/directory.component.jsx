import DirectoryItem from "../directory-Item/directory-item.component";

import { STC_DirectoryContainer } from "./directory.styles";

const categories = [
  {
    title: "Hats",
    id: "1",
    imageURL: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    title: "Jackets",
    id: "2",
    imageURL: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    title: "Sneakers",
    id: "3",
    imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
  {
    title: "Womens",
    id: "4",
    imageURL: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    title: "Mens",
    id: "5",
    imageURL: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
];

const Directory = () => {
  return (
    <STC_DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </STC_DirectoryContainer>
  );
};

export default Directory;
