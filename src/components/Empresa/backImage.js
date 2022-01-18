import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const BackImage = () => {
  return (
    <Container fluid id="imageLayer">
      <Container>
        <Row>
          <Col lg={6}>
          <div className="columnInner">
              <h2 className="text-white" data-aos="zoom-in" data-aos-offset="100">
                ¡Hola! Somos IPC Pools
              </h2>
              <p className="text-white" data-aos="zoom-in" data-aos-offset="200">
              Nacimos en 1993 en Mendoza, Argentina. Somos líderes en la fabricación de piscinas de plástico reforzado con fibra de vidrio. A lo largo de casi tres décadas, nos convertimos en la empresa más grande de Argentina en su rubro.
              </p>
              <Button
                href="#"
                variant="primary"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                Más sobre nosotros
              </Button>
            </div>
          </Col>
        </Row>
       </Container>
    </Container>
  );
};

export default BackImage;