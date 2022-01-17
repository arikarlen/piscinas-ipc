import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImgConcesionario from "../../assets/Concesionario.svg";
import ImgAsesoramiento from "../../assets/Asesoramiento.svg";

export const Cinta = () => {
  return (
    <Container fluid id="cinta" className="backsHome">
      <Container>
        <Row id="contentCinta" className="cardsIpc">
          <Col lg={4}>
            <a href="/contacto/">
              <img
                src={ImgConcesionario}
                class="iconCinta"
                Alt="Concesionario más cercano"
              ></img>

              <h4>Concesionario más cercano</h4>
              <p>Localizá nuestros puntos de VENTA</p>
            </a>
          </Col>
          <Col lg={4}>
            <a href="/contacto/">
              <img
                src={ImgAsesoramiento}
                class="iconCinta"
                Alt="Concesionario más cercano"
              ></img>
              <h4>Asesoramiento técnico</h4>
              <p>Te orientamos en tu compra</p>
            </a>
          </Col>
          <Col lg={4}>
            <a href="/contacto/">
              <img
                src={ImgConcesionario}
                class="iconCinta"
                Alt="Concesionario más cercano"
              ></img>

              <h4>Cotizador online</h4>
              <p>Personalizá tu piscina</p>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Cinta;
