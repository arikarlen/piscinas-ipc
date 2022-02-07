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

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/piscinas" element={<Piscinas />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/practipool" element={<Practipool />} />
        <Route exact path="/practipool/fun" element={<Fun />} />
        <Route exact path="/practipool/jump" element={<Jump />} />
        <Route exact path="/practipool/family" element={<Family />} />
        <Route exact path="/practipool/spa" element={<Spa />} />
        <Route exact path="/practipool/relax" element={<Relax />} />
        <Route exact path="/stylepool" element={<Stylepool />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
