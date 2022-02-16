import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Practipool from "../pages/Practipool";
import Fun from "../pages/Practipool/Fun";
import Jump from "../pages/Practipool/Jump";
import Piscinas from "../pages/Piscinas";
import Family from "../pages/Practipool/Family";
import Spa from "../pages/Practipool/Spa";
import Relax from "../pages/Practipool/Relax";
import Stylepool from "../pages/Stylepool";
import Griega from "../pages/Stylepool/Griega";
import Americana from "../pages/Stylepool/Americana";
import Germana from "../pages/Stylepool/Germana";
import Luxury from "../pages/Luxury";
import PageAccesorios from "../pages/PageAccesorios";
import Attenuar from "../pages/Attenuar";
import Soma from "../pages/Soma";
import FeelDesign from "../pages/FeelDesign";
import { Catalogo } from "../pages/Catalogo";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/piscinas" element={<Piscinas />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/practipool" element={<Practipool />} />
        <Route exact path="/fun" element={<Fun />} />
        <Route exact path="/jump" element={<Jump />} />
        <Route exact path="/family" element={<Family />} />
        <Route exact path="/spa" element={<Spa />} />
        <Route exact path="/relax" element={<Relax />} />
        <Route exact path="/stylepool" element={<Stylepool />} />
        <Route exact path="/griega" element={<Griega />} />
        <Route exact path="/americana" element={<Americana />} />
        <Route exact path="/germana" element={<Germana />} />
        <Route exact path="/luxury" element={<Luxury />} />
        <Route exact path="/accesorios" element={<PageAccesorios />} />
        <Route exact path="/attenuar" element={<Attenuar />} />
        <Route exact path="/somma" element={<Soma />} />
        <Route exact path="/feel-design" element={<FeelDesign />} />
        <Route exact path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
