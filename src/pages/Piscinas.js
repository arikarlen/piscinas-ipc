import React, { Fragment } from "react";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import Header from "../components/Commons/header";

export const Piscinas = () => {
  return (
    <Fragment>
      <div id="headerInternos">
        <Header />
      </div>
      <div id="piscinasInterno">
        <NuestrasPiscinas />
      </div>
      <CatalogoMomentos />
    </Fragment>
  );
};

export default Piscinas;
