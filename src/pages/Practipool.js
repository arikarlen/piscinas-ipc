import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Commons/header";
import Card from "../components/Commons/Cards";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";
import Loader from "../components/Commons/Loader";

export const Practipool = () => {
  const [practipool, setpractipool] = useState([]);
  const [practipoolLogo, setpractipoolLogo] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/pages-practipool`)
      .then((res) => {
        setpractipool(res.data);
        setpractipoolLogo(res.data.Logo);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <Container fluid id="bannerPractipool">
        <Container>
          <Row>
            <Col lg={3} md={3}>
              {practipoolLogo.url ? (
                <img
                  src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                  alt={practipoolLogo.alternativeText}
                  data-aos="zoom-in"
                  data-aos-offset="300"
                ></img>
              ) : (
                <Loader />
              )}
            </Col>
            <Col lg={1} md={1}></Col>
            <Col lg={6} md={8}>
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
                data-aos-offset="200"
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
            <Col lg={2} md={4} data-aos="zoom-in" data-aos-offset="300">
              <a href="/practipool/fun">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="/practipool/fun"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Fun</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
            <Col lg={2} md={4} data-aos="zoom-in" data-aos-offset="302">
              <a href="/practipool/jump">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="Jump"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Jump</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
            <Col lg={2} md={4} data-aos="zoom-in" data-aos-offset="304">
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
                  <h3 className="text-white">Family</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
            <Col lg={2} md={4} data-aos="zoom-in" data-aos-offset="306">
              <a href="/trabaja-con-nosotros">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="Spa"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Spa</h3>
                  <Button variant="secondary">
                    Ver Mas<i className="fas fa-chevron-right"></i>
                  </Button>
                </Card>
              </a>
            </Col>
            <Col lg={2} md={4} data-aos="zoom-in" data-aos-offset="308">
              <a href="/trabaja-con-nosotros">
                <Card>
                  {practipoolLogo.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                      alt="Relax"
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                  <h3 className="text-white">Fun</h3>
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

export default Practipool;
