import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import potenciado from "../../../assets/potenciado.svg";

export const FooterBottom = () => {
  return (
    <Container fluid id="footerBottom">
      <Container>
        <Row>
          <Col lg={6}>
            <p>
              Copyright © 2022 Piscinas Premium S.A. Todos los Derechos
              Reservados.
            </p>
          </Col>
          <Col lg={6}>
            <p className="text-end">
              Potenciado por{" "}
              <img
                src={potenciado}
                Alt="Possumus"
                className="potenciado "
              ></img>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default FooterBottom;
