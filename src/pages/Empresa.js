import React, { Fragment } from "react";

import BackImage from "../components/Empresa/backImage";
import Expansion from "../components/Empresa/expansion";
import Pilares from "../components/Empresa/pilares";

export const Empresa = () => {
 return (
   <Fragment>
     <BackImage />
     <Pilares />
     <Expansion />
   </Fragment>
 );
};

export default Empresa;