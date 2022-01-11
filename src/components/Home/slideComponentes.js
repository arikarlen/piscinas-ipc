import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import SlideCasco from "../../assets/SliderHome/slideCasco.jpg";
import SlideConecciones from "../../assets/SliderHome/conecciones.png";
import SlideFiltrado from "../../assets/SliderHome/equipo-filtrado.jpg";
import SlideVeredas from "../../assets/SliderHome/veredas-atermicas.jpg";
import SlideSoma from "../../assets/SliderHome/filtradoSOMA.jpg";

export const slideComponents = () => {
  return (
    <Container fluid className="backsHome" id="slideComponents">
      <Row>
        <Col lg={5} className="titleSlide">
          <h2>Tu piscina completamente Instalada</h2>
        </Col>
        <Col lg={7}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideCasco}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Casco</h2>
                <p class="text-white">
                  Monocasco de plástico reforzado con fibra de vidrio. Posee
                  mayor estética, durabilidad y funcionalidad. Producido bajo un
                  sistema de gestión de calidad ISO 9001.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideConecciones}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Conexiones</h2>
                <p class="text-white">
                  Sistema de hidrojets que incorpora al agua un porcentaje de
                  oxígeno que brinda un masaje más suave y burbujeante. Además,
                  mejora considerablemente el mantenimiento del agua.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideFiltrado}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Equipo de filtrado</h2>
                <p class="text-white">
                  Silencioso, veloz y de bajo consumo. Es capaz de filtrar
                  15.000 litros por hora para piscinas de hasta 64 m3. Cuenta
                  con gabinete amigable con el entorno y tablero eléctrico con
                  todas las normas de seguridad.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideVeredas}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Placas atérmicas</h2>
                <p class="text-white">
                  Antideslizantes y atérmicas, para cubrir su perímetro.
                </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={SlideSoma}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>Accesorios de limpieza SOMMA</h2>
                <p class="text-white">
                  Conjunto de elementos pensados para un óptimo mantenimiento y
                  cuidado del agua.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default slideComponents;
