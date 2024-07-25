import React from "react";
import { useMainContext } from "../context/MainContext";
const Home = () => {
  const { data } = useMainContext();
  //console.log(data.home);

  return (
    <div>
      <h2>{data.home.smallTitle}</h2>
      <h1>{data.home.title}</h1>
    </div>
  );
};

export default Home;
