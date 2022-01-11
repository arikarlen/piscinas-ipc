import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
            <Link to="/page2">
              <div
                className="cardsIpc "
                data-aos="zoom-in "
                data-aos-offset="200"
              >
                <img src={logoPractipool}></img>
                <p>
                  Ver modelos <i class="fas fa-chevron-right"></i>
                </p>
              </div>
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/page2">
              <div
                className="cardsIpc cardMedium"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                <img src={logoStylePool}></img>
                <p>
                  Ver modelos <i class="fas fa-chevron-right"></i>
                </p>
              </div>
            </Link>
          </Col>

          <Col lg={4}>
            <Link to="/page2">
              <div
                className="cardsIpc"
                data-aos="zoom-in"
                data-aos-offset="400"
              >
                <img src={logoLuxury}></img>
                <p>
                  Ver modelos <i class="fas fa-chevron-right"></i>
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default NuestrasPiscinas;
