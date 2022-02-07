import React, { Fragment } from "react";

import BackImage from "../components/Empresa/backImage";
import Expansion from "../components/Empresa/expansion";
import Pilares from "../components/Empresa/pilares";
// import SliderNumeros from "../components/Empresa/slideNumeros";
import SliderNumerosNew from "../components/Empresa/slideNumerosNew";

export const Empresa = () => {
  return (
    <Fragment>
      <BackImage />
      <Pilares />
      <Expansion />
      {/* <SliderNumeros /> */}
      <SliderNumerosNew />
    </Fragment>
  );
};

export default Empresa;
