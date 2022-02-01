import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PLantaProduccion from "../../assets/Empresa_earth.jpg";
import axios from "axios";

export const PlantaProduccion = () => {
  const [textoProd, settextoProd] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-home`).then((res) => {
      settextoProd(res.data.TextoPlanta);
      setLoadedData(true);
    });
  }, []);
  console.log(textoProd.Titulo);
  console.log(process.env.REACT_APP_URL_API);
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
                src={PLantaProduccion}
                data-aos="zoom-in"
                data-aos-offset="100"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PlantaProduccion;
