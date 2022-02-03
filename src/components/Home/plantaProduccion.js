import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export const PlantaProduccion = () => {
  const [textoProd, settextoProd] = useState([]);
  const [imagenProd, setimagenProd] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-home`).then((res) => {
      settextoProd(res.data.TextoPlanta);
      setimagenProd(res.data.TextoPlanta.Imagen);
    });
  }, []);

  return (
    <Container fluid className="backsHome" id="plantaProduccion">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="columnInner">
              <h2 data-aos="zoom-in" data-aos-offset="100">
                {textoProd.Titulo}
              </h2>
              <p data-aos="zoom-in" data-aos-offset="200">
                {textoProd.Descripcion}
              </p>
              <Button
                href="#"
                variant="primary"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                Sobre la empresa
              </Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="columnInner">
              <img
                src={process.env.REACT_APP_URL_API + imagenProd.url}
                data-aos="zoom-in"
                data-aos-offset="100"
                alt={imagenProd.alternativeText}
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PlantaProduccion;
