import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import Crew from "./pages/Crew";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout/Layout";
import MainContextProvider from "./context/MainContext";

function App() {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/crew" element={<Crew />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MainContextProvider>
  );
}

export default App;
