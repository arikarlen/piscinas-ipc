import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PeoplePool from "../../assets/banner-gente_01-min.jpg";

export const Pilares = () => {
  return (
    <Container fluid id="section-pilares">
      <Container className="padd-section">
        <Row>
          <Col lg={6} className="col-titlepilares">
          <div className="columnInner">
              <h1 className="title-left color-lightblue" data-aos="zoom-in" data-aos-offset="100">
                Tres pilares
                <h1 className="title-pilares color-blue" data-aos="zoom-in" data-aos-offset="110">que nos definen</h1>
              </h1>
            </div>
          </Col>

          <Col lg={6}>
          <div className="columnInner">
            <div className="hover-section">
              <h3 className="title-pilares" data-aos="zoom-in" data-aos-offset="200">
                Innovación
              </h3>
              <p className="text-pilares" data-aos="zoom-in" data-aos-offset="200">
                Idear soluciones novedosas y originales ante necesidades del cliente, la organización y la sociedad.
              </p>
            </div>
            <div className="hover-section">
              <h3 className="title-pilares" data-aos="zoom-in" data-aos-offset="200">
                Pasión
              </h3>
              <p className="text-pilares" data-aos="zoom-in" data-aos-offset="200">
                Sentir entusiasmo y deseo por la excelencia.
              </p>
            </div>
            <div className="hover-section">
              <h3 className="title-pilares" data-aos="zoom-in" data-aos-offset="200">
                Confianza
              </h3>
              <p className="text-pilares" data-aos="zoom-in" data-aos-offset="200">
                Ser líderes en el rubro por el compromiso con nuestros clientes.
              </p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
       <Container fluid className="backpilares">
          <Row>
            <Col lg={12}>
              <img
                src={PeoplePool}
                data-aos="zoom-in"
                data-aos-offset="210"
              ></img>
            </Col>
          </Row>
        </Container>
    </Container>
    
  );
};

export default Pilares;