import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import phone from "../../../assets/phone.svg";
import MapMaker from "../../../assets/map-marker.svg";

export const SubFooter = () => {
  const [datosEmpresa, setdatosEmpresa] = useState([]);
  const [logoFooter, setlogoFooter] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/info-institucional`)
      .then((res) => {
        setdatosEmpresa(res.data.Datos_Empresa);
        setlogoFooter(res.data.Logo_Alt);
      });
  }, []);

  return (
    <Container fluid id="subFooter">
      <Container>
        <Row>
          <Col lg={4}>
            {logoFooter?.url ? (
              <img
                src={process.env.REACT_APP_URL_API + logoFooter.url}
                alt={logoFooter.alternativeText}
                className="logoFooter"
              ></img>
            ) : (
              <p>Cargando imagen</p>
            )}

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
                <img
                  src={phone}
                  className="icono-prefooter"
                  alt="Telefono"
                ></img>
              </li>
              <li>
                <a href="tel:+542614637550">{datosEmpresa.Telefono}</a>
              </li>
            </ul>

            <ul className="list-data">
              <li>
                <img
                  src={MapMaker}
                  className="icono-prefooter"
                  alt="Direccion"
                ></img>
              </li>
              <li>
                Casa Central - Fábrica<br></br> {datosEmpresa.Direccion}
                <br></br>
                {datosEmpresa.Ciudad}, {datosEmpresa.Provincia}
              </li>
            </ul>

            <ul className="list-redes">
              <li>
                <a
                  href={datosEmpresa.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href={datosEmpresa.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
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
