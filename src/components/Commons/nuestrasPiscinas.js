import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "./Cards";
import logoPractipool from "../../assets/LogoPractipool.png";
import logoStylePool from "../../assets/LogoStylePool.png";
import logoLuxury from "../../assets/LogoLuxury-2.png";

export const NuestrasPiscinas = () => {
  return (
    <Container fluid className="backsHome" id="nuestrasPiscinas">
      <Container>
        <Row>
          <h1 className="text-center" data-aos="zoom-in">
            Nuestras Piscinas
          </h1>

          <h5 className="subtitulo text-center" data-aos="zoom-in">
            Contamos con 3 líneas adaptadas a tu necesidad y una amplia variedad
            de modelos.
          </h5>
        </Row>
        <Row id="contentPiscinas" className="text-center">
          <Col lg={4}>
            <Link to="/practipool/">
              <Card>
                <img src={logoPractipool} alt="Practipool"></img>
                <p>
                  Ver modelos <i className="fas fa-chevron-right"></i>
                </p>
              </Card>
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/page2">
              <Card>
                <img src={logoStylePool} alt="StylePool"></img>
                <p>
                  Ver modelos <i className="fas fa-chevron-right"></i>
                </p>
              </Card>
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/page2">
              <Card>
                <img src={logoLuxury} alt="Logo"></img>
                <p>
                  Ver modelos <i className="fas fa-chevron-right"></i>
                </p>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NuestrasPiscinas;
