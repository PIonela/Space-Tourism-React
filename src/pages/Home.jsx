import React from "react";
import { useMainContext } from "../context/MainContext";
const Home = () => {
  const { data } = useMainContext();
  //console.log(data.home);

  return (
    <div>
      {/* daca exista data, afiseaza continutul */}
      {data ? (
        <>
          <div>
            <h2>{data.home.smallTitle}</h2>
            <h1>{data.home.title}</h1>
            <p>{data.home.description}</p>
          </div>
          <button>{data.home.button}</button>
        </>
      ) : (
        //daca nu este inca setat data, afisam loading
        <p>loading</p>
      )}
    </div>
  );
};

export default Home;
