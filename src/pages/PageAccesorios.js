import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "../components/Commons/Cards";

import Header from "../components/Commons/header";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";

import LogoAtennuar from "../assets/Logo-atenuar-blanco.png";
import LogoSomma from "../assets/Logo-Soma-white.png";
import LogoFeel from "../assets/Logo-feel.png";

export const PageAccesorios = () => {
  return (
    <Fragment>
      <Header />

      <Container fluid id="bannerAccesorios">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="text-center text-white">
                Accesorios y mobiliario
              </h1>
              <p className="text-center text-white">
                Tu patio y tu piscina siempre a la vanguardia
              </p>
            </Col>
          </Row>
          <Row>
            <Row id="contentAccesorios" className="text-center">
              <Col lg={4}>
                <Link to="/practipool/">
                  <Card>
                    <h1 className="text-white">
                      Pisos y revestimientos atérmicos
                    </h1>
                    <img src={LogoAtennuar} alt="Attenuar" />
                    <p className="text-white">
                      Ver más <i className="fas fa-chevron-right"></i>
                    </p>
                  </Card>
                </Link>
              </Col>

              <Col lg={4}>
                <Link to="/page2">
                  <Card>
                    <h1 className="text-white">
                      Accesorios de <br />
                      piscinas
                    </h1>
                    <img src={LogoSomma} alt="Somma" />
                    <p className="text-white">
                      Ver más <i className="fas fa-chevron-right"></i>
                    </p>
                  </Card>
                </Link>
              </Col>

              <Col lg={4}>
                <Link to="/page2">
                  <Card>
                    <h1 className="text-white">
                      Mobiliarios de <br />
                      Jardín
                    </h1>
                    <img src={LogoFeel} alt="Soma" />
                    <p className="text-white">
                      Ver más <i className="fas fa-chevron-right"></i>
                    </p>
                  </Card>
                </Link>
              </Col>
            </Row>
          </Row>
        </Container>
      </Container>
      <CatalogoMomentos />
      <NuestrasPiscinas />
    </Fragment>
  );
};

export default PageAccesorios;
