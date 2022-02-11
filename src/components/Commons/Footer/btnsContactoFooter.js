import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "../Cards";
import imgTrabaja from "../../../assets/trabaja-icon.svg";
import imgRed from "../../../assets/pileta-icon.svg";
import imgProveedor from "../../../assets/prov-icon.svg";
import imgContacto from "../../../assets/mail-icon-02.svg";

export const BtnsContactoFooter = () => {
  return (
    <Container fluid id="btnsFotoer" className="backsHome">
      <Container>
        <Row>
          <Col lg={3} data-aos="zoom-in">
            <a href="/trabaja-con-nosotros">
              <Card>
                <img src={imgTrabaja} alt="Trabaja con nosotros"></img>
                <h3>
                  Trabajá con <br></br>nosotros
                </h3>
                <Button variant="secondary">
                  Más info<i className="fas fa-chevron-right"></i>
                </Button>
              </Card>
            </a>
          </Col>
          <Col lg={3} data-aos="zoom-in" data-aos-offset="200">
            <a href="/parte-de-nuestra-red">
              <Card>
                <img src={imgRed} alt="Forma parte de nuestra red"></img>

                <h3>Formá parte de nuestra red</h3>
                <Button variant="secondary">
                  Más info<i className="fas fa-chevron-right"></i>
                </Button>
              </Card>
            </a>
          </Col>
          <Col lg={3} data-aos="zoom-in" data-aos-offset="400">
            <a href="/queres-ser-proveedor/">
              <Card>
                <img src={imgProveedor} alt="¿Queres ser proveedor?"></img>

                <h3>¿Querés ser proveedor?</h3>
                <Button variant="secondary">
                  Más info<i className="fas fa-chevron-right"></i>
                </Button>
              </Card>
            </a>
          </Col>
          <Col lg={3} data-aos="zoom-in" data-aos-offset="600">
            <a href="/contactanos">
              <Card>
                <img src={imgContacto} alt="Contactanos"></img>
                <h3>Contactanos</h3>
                <Button variant="secondary">
                  Más info<i className="fas fa-chevron-right"></i>
                </Button>
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BtnsContactoFooter;
