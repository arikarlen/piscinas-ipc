import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Commons/header";
// import Gmaps from "../components/Contacto/Gmaps";
import GmapsFull from "../components/Contacto/GmapsFull";

export const Contacto = () => {
  return (
    <Fragment>
      <div id="headerInternos">
        <Header />
      </div>
      <Container fluid id="contentInterns" className="spa">
        {/* <Gmaps /> */}
        <GmapsFull />
      </Container>
    </Fragment>
  );
};

export default Contacto;
