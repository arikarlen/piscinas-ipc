import React, { Fragment } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import Header from "../components/Commons/header";
import FormFormaParte from "../components/Forms/FormFormaParte";

export const FormaParte = () => {
  return (
    <Fragment>
      <div id="headerInternos">
        <Header />
      </div>
      <Container fluid id="contentInterns" className="spa">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>Trabajá con nosotros</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <FormFormaParte />
      </Container>
    </Fragment>
  );
};

export default FormaParte;
