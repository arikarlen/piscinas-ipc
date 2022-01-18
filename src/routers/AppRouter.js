import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Empresa from "../pages/Empresa";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/empresa" element={<Empresa />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
