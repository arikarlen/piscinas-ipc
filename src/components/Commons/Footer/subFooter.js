import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import LogoHeaderBlue from "../../../assets/LogoIPCWhite.svg";
import phone from "../../../assets/phone.svg";
import MapMaker from "../../../assets/map-marker.svg";

export const SubFooter = () => {
  return (
    <Container fluid id="subFooter">
      <Container>
        <Row>
          <Col lg={4}>
            <img
              src={LogoHeaderBlue}
              Alt="Ipc Pools"
              className="logoFooter"
            ></img>
            <div className="textLogoFooter">
              <h1>Innovación</h1>
              <h1>Pasión</h1>
              <h1>Confianza</h1>
            </div>
          </Col>
          <Col lg={4}>
            <div className="list-footer">
              <ul>
                <li>
                  <a href="/piscinas/">Piscinas</a>
                </li>
                <li>
                  <a href="/accesorios/">Accesorios</a>
                </li>
                <li>
                  <a href="/catalogo/">Catálogo</a>
                </li>
                <li>
                  <a href="/galeria/">Galería</a>
                </li>
                <li>
                  <a href="/empresa/">Empresa</a>
                </li>
                <li>
                  <a href="/contacto/">Contacto</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4}>
            <ul className="list-data">
              <li>
                <img src={phone} class="icono-prefooter"></img>
              </li>
              <li>
                <a href="tel:+542614637550">(+54) 261 463 7550</a>
              </li>
            </ul>

            <ul className="list-data">
              <li>
                <img src={MapMaker} class="icono-prefooter"></img>
              </li>
              <li>
                Casa Central - Fábrica<br></br> Álvarez Condarco 2060 - Parque
                Industrial<br></br>
                Las Heras, Mendoza
              </li>
            </ul>

            <ul class="list-redes">
              <li>
                <a
                  href="https://www.facebook.com/IPCPools.CasaCentral"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/piscinasipc/?hl=es-la"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default SubFooter;
