import React, { Fragment } from "react";
import Header from "../components/Commons/header";
import BackImage from "../components/Empresa/backImage";
import Expansion from "../components/Empresa/expansion";
import Pilares from "../components/Empresa/pilares";
import SliderNumerosNew from "../components/Empresa/slideNumerosNew";

export const Empresa = () => {
  return (
    <Fragment>
      <Header />
      <BackImage />
      <Pilares />
      <Expansion />
      {/* <SliderNumeros /> */}
      <SliderNumerosNew />
    </Fragment>
  );
};

export default Empresa;
