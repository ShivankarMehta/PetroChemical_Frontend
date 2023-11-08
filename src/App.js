import React from "react";
import "./App.css";
import MainPage from "./mainPage";
import NextPage from "./nextPage";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Porosity from "./porosity";
import SonicPorosity from "./soniclogporosity";
import Permeability from "./permeability";
import PermeabilityNext from "./permeabilitynext";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/nextpage" element={<NextPage />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/porosity" element={<Porosity />} />
        <Route path="/porosity/soniclogporosity" element={<SonicPorosity />} />
        <Route path="/permeability" element={<Permeability />} />
        <Route
          path="/permeability/permeabilitynext"
          element={<PermeabilityNext />}
        />
      </Routes>
    </>
  );
};

export default App;
