import Directory from './components/directory/directory.component';

const App = () => {

  const catagories = [
    {
      title: "Hats",
      id: "1",
      imageURL: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      title: "Jackets",
      id: "2",
      imageURL: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      title: "Sneakers",
      id: "3",
      imageURL: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      title: "Womens",
      id: "4",
      imageURL: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      title: "Mens",
      id: "5",
      imageURL: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ];


  return (<Directory catagories={catagories} />);
}

export default App;
