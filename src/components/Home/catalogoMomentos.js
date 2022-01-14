import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const CatalogoMomentos = () => {
  return (
    <Container fluid id="catalogoMomentos" className="backsHome">
      <Container>
        <Row>
          <Col lg={6} data-aos="zoom-in" data-aos-offset="100">
            <div className=" cardsIpc ">
              <Row>
                <Col lg={6} className="catalogoMomentosTexts">
                  <h3>Catálogo</h3>
                  <p>
                    Podés ver y descargar nuestro catálogo 2020 con todos los
                    modelos de piscinas.
                  </p>
                  <Button href="#" variant="primary">
                    Sobre la empresa
                  </Button>
                </Col>
                <Col lg={6} className="imgCatalogo"></Col>
              </Row>
            </div>
          </Col>
          <Col lg={6} data-aos="zoom-in" data-aos-offset="300">
            <div className=" cardsIpc ">
              <Row>
                <Col lg={6} className="catalogoMomentosTexts">
                  <h3>Momentos IPC</h3>
                  <p>
                    Todos los detalles de nuestras piscinas están pensados para
                    que puedas disfrutar al máximo cada momento.
                  </p>
                  <Button href="#" variant="primary">
                    Sobre la empresa
                  </Button>
                </Col>
                <Col lg={6} className="imgMomentos"></Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CatalogoMomentos;
