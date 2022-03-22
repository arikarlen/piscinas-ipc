import React, { Fragment } from "react";
import Header from "../components/Commons/header";
import BackImage from "../components/Empresa/backImage";
import Desarrollo from "../components/Empresa/desarrollo";
import Expansion from "../components/Empresa/expansion";
import Pilares from "../components/Empresa/pilares";
import SlideEmpresa from "../components/Empresa/slideEmpresa";
import SliderNumerosNew from "../components/Empresa/slideNumerosNew";
import Valores from "../components/Empresa/Valores";

export const Empresa = () => {
  return (
    <Fragment>
      <Header />
      <BackImage />
      <Pilares />
      <Expansion />
      <SliderNumerosNew />
      <Valores />
      <Desarrollo />
      <SlideEmpresa />
    </Fragment>
  );
};

export default Empresa;
