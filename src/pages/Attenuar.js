import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import axios from "axios";

import Header from "../components/Commons/header";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";
import Card from "../components/Commons/Cards";

export const Attenuar = () => {
  const [accesorios, setAccesorios] = useState([]);
  const [accesoriosLogo, setAccesoriosLogo] = useState([]);
  const [accesoriosPortada, setAccesoriosPortada] = useState([]);
  const [imagenCaracteristicaUno, setimagenCaracteristicaUno] = useState([]);
  const [imagenCaracteristicaDos, setimagenCaracteristicaDos] = useState([]);
  const [imagenCaracteristicaTres, setimagenCaracteristicaTres] = useState([]);
  const [accesoriosLineas, setaccesoriosLineas] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-attenuar`).then((res) => {
      setAccesorios(res.data);
      setAccesoriosLogo(res.data.Logo);
      setAccesoriosPortada(res.data.Destacada);
      setimagenCaracteristicaUno(res.data.Imagen_Caracteristica_1);
      setimagenCaracteristicaDos(res.data.Imagen_Caracteristica_2);
      setimagenCaracteristicaTres(res.data.Imagen_Caracteristica_3);
      setaccesoriosLineas(res.data.Lineas);
      setLoadedData(true);
    });
  }, []);

  console.log(accesoriosLineas);
  return (
    <Fragment>
      <div id="headerInternos">
        <Header />
      </div>

      <Container fluid id="bannerAccesoriosInternos">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/accesorios">Accesorios</Breadcrumb.Item>
            <Breadcrumb.Item active>Attenuar</Breadcrumb.Item>
          </Breadcrumb>
          <Row id="mainTitle">
            <Col lg={4}>
              {accesoriosLogo.url ? (
                <img
                  src={process.env.REACT_APP_URL_API + accesoriosLogo.url}
                  alt={accesoriosLogo.alternativeText}
                  data-aos="zoom-in"
                  data-aos-offset="300"
                ></img>
              ) : (
                <p>Cargando imagen</p>
              )}
            </Col>
            <Col lg={8}>
              <h2 className="text-white">{accesorios.Descripcion}</h2>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid id="portada">
        {accesoriosPortada.url ? (
          <img
            src={process.env.REACT_APP_URL_API + accesoriosPortada.url}
            alt={accesoriosPortada.alternativeText}
            data-aos="zoom-in"
            data-aos-offset="300"
            className="img-fluid"
          ></img>
        ) : (
          <p>Cargando imagen</p>
        )}
      </Container>
      <Container>
        <Row className="contentCaractesticasLuxury">
          <Col lg={6}>
            {imagenCaracteristicaUno.url ? (
              <img
                src={
                  process.env.REACT_APP_URL_API + imagenCaracteristicaUno.url
                }
                alt={imagenCaracteristicaUno.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
          <Col lg={6}>
            <h2>{accesorios.Titulo_Caracteristica_1}</h2>
            <p>{accesorios.Descripcion_Caracteristica_1}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid id="arenaCaribe">
        <Container>
          <Row className="contentCaractesticasLuxury arenaCaribe">
            <Col lg={6}>
              <h2>{accesorios.Titulo_Caracteristica_2}</h2>
              <p>{accesorios.Descripcion_Caracteristica_2}</p>
            </Col>
            <Col lg={6}>
              {imagenCaracteristicaDos.url ? (
                <img
                  src={
                    process.env.REACT_APP_URL_API + imagenCaracteristicaDos.url
                  }
                  alt={imagenCaracteristicaDos.alternativeText}
                  data-aos="zoom-in"
                  data-aos-offset="300"
                ></img>
              ) : (
                <p>Cargando imagen</p>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="contentCaractesticasLuxury arenaCaribe">
          <Col lg={6}>
            {imagenCaracteristicaTres.url ? (
              <img
                src={
                  process.env.REACT_APP_URL_API + imagenCaracteristicaTres.url
                }
                alt={imagenCaracteristicaTres.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
          <Col lg={6}>
            <h2>{accesorios.Titulo_Caracteristica_3}</h2>
            <p>{accesorios.Descripcion_Caracteristica_3}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid id="lineasAtenuar">
        <Container>
          <h2 className="text-center">Líneas Attenuar</h2>
          <Row>
            <Col lg={{ span: 6, offset: 3 }}>
              <h4 className="text-center">
                Contamos con 3 líneas adaptadas a tu necesidad y una amplia
                variedad de accesorios.
              </h4>
            </Col>
          </Row>
          <Row id="cardLineas">
            {loadedData ? (
              accesoriosLineas.map((lineas, i) => (
                <Col lg={4} key={lineas.id}>
                  <Card>
                    <img
                      src={process.env.REACT_APP_URL_API + lineas.Imagen.url}
                      alt={lineas.Imagen.alternativeText}
                      data-aos="zoom-in"
                      data-aos-offset="300"
                      className="img-fluid"
                    ></img>
                    <h3>{lineas.Linea}</h3>
                    <p>{lineas.Descripcion}</p>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </Row>
        </Container>
      </Container>
      <NuestrasPiscinas />
      <CatalogoMomentos />
    </Fragment>
  );
};

export default Attenuar;
