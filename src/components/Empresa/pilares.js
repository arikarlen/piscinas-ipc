import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PeoplePool from "../../assets/banner-gente_01-min.jpg";

export const Pilares = () => {
  return (
    <Container id="section-pilares">
      <Container>
        <Row>
          <Col lg={6}>
          <div className="columnInner">
              <h2 className="title-left" data-aos="zoom-in" data-aos-offset="100">
                ¡Hola! Somos IPC Pools
              </h2>
            </div>
          </Col>

          <Col lg={6}>
          <div className="columnInner">
              <h3 className="title-pilares" data-aos="zoom-in" data-aos-offset="100">
                ¡Hola! Somos IPC Pools
              </h3>
              <p className="text-pilares" data-aos="zoom-in" data-aos-offset="200">
              Nacimos en 1993 en Mendoza, Argentina. Somos líderes en la fabricación de piscinas de plástico reforzado con fibra de vidrio. A lo largo de casi tres décadas, nos convertimos en la empresa más grande de Argentina en su rubro.
              </p>
              <h3 className="title-pilares" data-aos="zoom-in" data-aos-offset="100">
                ¡Hola! Somos IPC Pools
              </h3>
              <p className="text-pilares" data-aos="zoom-in" data-aos-offset="200">
              Nacimos en 1993 en Mendoza, Argentina. Somos líderes en la fabricación de piscinas de plástico reforzado con fibra de vidrio. A lo largo de casi tres décadas, nos convertimos en la empresa más grande de Argentina en su rubro.
              </p>
              <h3 className="title-pilares" data-aos="zoom-in" data-aos-offset="100">
                ¡Hola! Somos IPC Pools
              </h3>
              <p className="text-pilares" data-aos="zoom-in" data-aos-offset="200">
              Nacimos en 1993 en Mendoza, Argentina. Somos líderes en la fabricación de piscinas de plástico reforzado con fibra de vidrio. A lo largo de casi tres décadas, nos convertimos en la empresa más grande de Argentina en su rubro.
              </p>
            </div>
          </Col>
        </Row>
       </Container>
       <Row>
       <Col lg={12}>
              <img
                src={PeoplePool}
                data-aos="zoom-in"
                data-aos-offset="100"
              ></img>
       </Col>
       </Row>
    </Container>
  );
};

export default Pilares;