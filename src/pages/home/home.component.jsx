import { useEffect, useState } from "react";
import "./home.styles.css";
import Card from "../../component/card/card.component";

const Home = () => {
  const [dataVal, setDataVal] = useState();

  useEffect(() => {
    fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((response) => response.json())
      .then((data) => setDataVal(data));
  });

  return (
    <div className="gallery">
      {dataVal?.map((val) => (
        <Card imageUrl={val.urls.full} />
      ))}
    </div>
  );
};

export default Home;
