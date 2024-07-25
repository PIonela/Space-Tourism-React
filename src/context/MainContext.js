import { createContext, useContext, useState, useEffect } from "react";

const MainContext = createContext();

const MainContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <MainContext.Provider value={{ data }}>{children}</MainContext.Provider>
  );
};

export default MainContextProvider;

export const useMainContext = () => {
  return useContext(MainContext);
};
