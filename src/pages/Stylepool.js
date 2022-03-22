import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Card from "../components/Commons/Cards";
import Header from "../components/Commons/header";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";

export const Stylepool = () => {
  const [practipool, setpractipool] = useState([]);
  const [practipoolLogo, setpractipoolLogo] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/pages-stylepool`)
      .then((res) => {
        setpractipool(res.data);
        setpractipoolLogo(res.data.Logo);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <Container fluid id="bannerStylepool">
        <Container>
          <Row>
            <Col lg={3}>
              {practipoolLogo.url ? (
                <img
                  src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                  alt={practipoolLogo.alternativeText}
                  data-aos="zoom-in"
                  data-aos-offset="300"
                ></img>
              ) : (
                <p>Cargando imagen</p>
              )}
            </Col>
            <Col lg={1}></Col>
            <Col lg={4}>
              <p
                className="text-white"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                {practipool.Descripcion}
              </p>
              <Button
                href="#modelos"
                variant="primary"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                Ver modelos
              </Button>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Container>
        <Container id="modelos" data-aos="zoom-in" data-aos-offset="300">
          <h1 className="text-white text-center">Descubrí</h1>
          <p className="text-white text-center">
            Las piscinas más elegidas del mercado.
          </p>
          <Row>
            <Col lg={4} data-aos="zoom-in" data-aos-offset="300">
              <a href="/stylepool/griega/">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="/stylepool/griega/"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Griega</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
            <Col lg={4} data-aos="zoom-in" data-aos-offset="350">
              <a href="/stylepool/americana/">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="Jump"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Americana</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
            <Col lg={4} data-aos="zoom-in" data-aos-offset="400">
              <a href="/trabaja-con-nosotros">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="Family"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Germana</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
      <CatalogoMomentos />
      <NuestrasPiscinas />
    </Fragment>
  );
};

export default Stylepool;
