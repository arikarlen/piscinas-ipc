import React, { Fragment } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import Header from "../components/Commons/header";
import FormProveedor from "../components/Forms/FormProveedor";

export const Proveedor = () => {
  return (
    <Fragment>
      <div id="headerInternos">
        <Header />
      </div>
      <Container fluid id="contentInterns" className="spa">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>

            <Breadcrumb.Item active>¿Queres ser proveedor?</Breadcrumb.Item>
          </Breadcrumb>
        </Container>
        <FormProveedor />
      </Container>
    </Fragment>
  );
};

export default Proveedor;
