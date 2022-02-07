import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";
import Practipool from "../pages/Practipool";
import Fun from "../pages/Practipool/Fun";
import Jump from "../pages/Practipool/Jump";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} />
        <Route exact path="/practipool" element={<Practipool />} />
        <Route exact path="/practipool/fun" element={<Fun />} />
        <Route exact path="/practipool/jump" element={<Jump />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
