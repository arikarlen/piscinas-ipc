import React, { Fragment } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import Header from "../components/Commons/header";
import FormTrabaja from "../components/Forms/FormTrabaja";

export const TrabajaConNosotros = () => {
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
        <FormTrabaja />
      </Container>
    </Fragment>
  );
};

export default TrabajaConNosotros;
