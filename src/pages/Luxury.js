import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import MarkdownView from "react-showdown";
import Header from "../components/Commons/header";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";

export const Luxury = () => {
  const [luxury, setLuxury] = useState([]);
  const [luxuryLogo, setLuxuryLogo] = useState([]);
  const [luxuryBanner, setLuxuryBanner] = useState([]);
  const [luxuryBannerBackground, setLuxuryBannerBackground] = useState([]);
  const [caracteristicaImgUno, setCaracteristicaImgUno] = useState([]);
  const [caracteristicaImgDos, setCaracteristicaImgDos] = useState([]);
  const [caracteristicaImgTres, setCaracteristicaImgTres] = useState([]);
  const [caracteristicaImgCuatro, setCaracteristicaImgCuatro] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/luxury`).then((res) => {
      setLuxury(res.data);
      setLuxuryLogo(res.data.Logo);
      setLuxuryBanner(res.data.Banner);
      setLuxuryBannerBackground(res.data.Banner.Background);
      setCaracteristicaImgUno(res.data.Imagen_Caracteristica_1);
      setCaracteristicaImgDos(res.data.Imagen_Caracteristica_2);
      setCaracteristicaImgTres(res.data.Imagen_Caracteristica_3);
      setCaracteristicaImgCuatro(res.data.Imagen_Caracteristica_4);
    });
  }, []);

  const description = luxuryBanner.Descripcion;

  return (
    <Fragment>
      <div id="headerInternos">
        <Header />
      </div>
      <Container fluid id="bannerLuxury">
        <Row>
          <Col lg={6}>
            {luxuryBannerBackground.url ? (
              <img
                src={process.env.REACT_APP_URL_API + luxuryBannerBackground.url}
                alt={luxuryBannerBackground.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
                className="img-fluid"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
          <Col lg={6} className="contentBanner">
            {luxuryLogo.url ? (
              <img
                src={process.env.REACT_APP_URL_API + luxuryLogo.url}
                alt={luxuryBannerBackground.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
                className="img-fluid logoLuxury"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}

            <h1 className="text-white">{luxuryBanner.Titulo}</h1>
            <MarkdownView markdown={description} className="text-white" />
          </Col>
        </Row>
      </Container>
      <Container id="caracteristicasLuxury">
        <Row className="contentCaractesticasLuxury">
          <Col lg={6}>
            <h2>{luxury.Titulo_Caracteristica_1}</h2>
            <p>{luxury.Descripcion_Caracteristica_1}</p>
          </Col>
          <Col lg={6}>
            {caracteristicaImgUno.url ? (
              <img
                src={process.env.REACT_APP_URL_API + caracteristicaImgUno.url}
                alt={caracteristicaImgUno.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
                className="img-fluid logoLuxury"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
        </Row>
        <Row className="contentCaractesticasLuxury">
          <Col lg={6}>
            {caracteristicaImgDos.url ? (
              <img
                src={process.env.REACT_APP_URL_API + caracteristicaImgDos.url}
                alt={caracteristicaImgDos.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
                className="img-fluid logoLuxury"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
          <Col lg={6}>
            <h2>{luxury.Titulo_Caracteristica_2}</h2>
            <p>{luxury.Descripcion_Caracteristica_2}</p>
          </Col>
        </Row>
        <Row className="contentCaractesticasLuxury">
          <Col lg={6}>
            <h2>{luxury.Titulo_Caracteristica_3}</h2>
            <p>{luxury.Descripcion_Caracteristica_3}</p>
          </Col>
          <Col lg={6}>
            {caracteristicaImgTres.url ? (
              <img
                src={process.env.REACT_APP_URL_API + caracteristicaImgTres.url}
                alt={caracteristicaImgTres.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
                className="img-fluid logoLuxury"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
        </Row>
        <Row className="contentCaractesticasLuxury">
          <Col lg={6}>
            {caracteristicaImgCuatro.url ? (
              <img
                src={
                  process.env.REACT_APP_URL_API + caracteristicaImgCuatro.url
                }
                alt={caracteristicaImgCuatro.alternativeText}
                data-aos="zoom-in"
                data-aos-offset="300"
                className="img-fluid logoLuxury"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}
          </Col>
          <Col lg={6}>
            <h2>{luxury.Titulo_Caracteristica_4}</h2>
            <p>{luxury.Descripcion_Caracteristica_4}</p>
          </Col>
        </Row>
      </Container>
      <Container fluid id="luxuryMasInfo" className="text-center">
        {luxuryLogo.url ? (
          <img
            src={process.env.REACT_APP_URL_API + luxuryLogo.url}
            alt={luxuryBannerBackground.alternativeText}
            data-aos="zoom-in"
            data-aos-offset="300"
            className="img-fluid logoLuxury"
          ></img>
        ) : (
          <p>Cargando imagen</p>
        )}
        <h4 className="text-white">Línea de piscinas de autor</h4>
        <Button
          href="#"
          variant="secondary"
          data-aos="zoom-in"
          data-aos-offset="300"
        >
          Quiero saber más
        </Button>
      </Container>
      <NuestrasPiscinas />
    </Fragment>
  );
};

export default Luxury;
