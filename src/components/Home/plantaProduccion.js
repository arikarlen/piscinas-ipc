import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PLantaProduccion from "../../assets/Empresa_earth.jpg";

export const PlantaProduccion = () => {
  return (
    <Container fluid className="backsHome" id="plantaProduccion">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="columnInner">
              <h2 data-aos="zoom-in" data-aos-offset="100">
                La planta de producción con mayor inversión y desarrollo del
                sector
              </h2>
              <p data-aos="zoom-in" data-aos-offset="200">
                La Fábrica de IPC POOLS es la más grande y con mayor inversión
                del sector. Actualmente, cuenta con 12.000 m2 cubiertos de
                espacio productivo, y con un equipo humano de más de 320
                personas. Avanzamos firmes por el camino de la inversión y el
                desarrollo tecnológico, para brindar productos cada vez más
                innovadores y competitivos.
              </p>
              <Button
                href="#"
                variant="primary"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                Sobre la empresa
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="columnInner">
              <img
                src={PLantaProduccion}
                data-aos="zoom-in"
                data-aos-offset="100"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PlantaProduccion;
