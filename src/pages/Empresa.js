import React, { Fragment } from "react";

import BackImage from "../components/Empresa/backImage";
import Expansion from "../components/Empresa/expansion";
import Pilares from "../components/Empresa/pilares";
import SliderNumeros from "../components/Empresa/slideNumeros";

export const Empresa = () => {
 return (
   <Fragment>
     <BackImage />
     <Pilares />
     <Expansion />
     <SliderNumeros />
   </Fragment>
 );
};

export default Empresa;