import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
              <div className=" cardsIpc ">
                <img src={imgTrabaja}></img>
                <h3>
                  Trabajá con <br></br>nosotros
                </h3>
                <Button variant="secondary">
                  Más info<i class="fas fa-chevron-right"></i>
                </Button>
              </div>
            </a>
          </Col>
          <Col lg={3} data-aos="zoom-in" data-aos-offset="200">
            <a href="/parte-de-nuestra-red">
              <div className=" cardsIpc ">
                <img src={imgRed}></img>

                <h3>Formá parte de nuestra red</h3>
                <Button variant="secondary">
                  Más info<i class="fas fa-chevron-right"></i>
                </Button>
              </div>
            </a>
          </Col>
          <Col lg={3} data-aos="zoom-in" data-aos-offset="400">
            <a href="/queres-ser-proveedor/">
              <div className=" cardsIpc ">
                <img src={imgProveedor}></img>

                <h3>¿Querés ser proveedor?</h3>
                <Button variant="secondary">
                  Más info<i class="fas fa-chevron-right"></i>
                </Button>
              </div>
            </a>
          </Col>
          <Col lg={3} data-aos="zoom-in" data-aos-offset="600">
            <a href="/contactanos">
              <div className=" cardsIpc ">
                <img src={imgContacto}></img>
                <h3>Contactanos</h3>
                <Button variant="secondary">
                  Más info<i class="fas fa-chevron-right"></i>
                </Button>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BtnsContactoFooter;
