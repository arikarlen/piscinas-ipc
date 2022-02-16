import React, { useState, useEffect } from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import BackNumberSlide from "../../assets/fondo-numeros.jpg";
import axios from "axios";

export const SliderNumerosNew = () => {
  const [slidesNumeros, setslidesNumeros] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      setslidesNumeros(res.data.Slide_Numeros);
      setLoadedData(true);
    });
  }, []);

  return (
    <Container fluid className="section-numbers margin-seccion">
      <Carousel fade>
        {loadedData ? (
          slidesNumeros.map((slideNumero, i) => (
            <Carousel.Item key={slideNumero.id}>
              {BackNumberSlide ? (
                <img
                  className="d-block w-100"
                  src={BackNumberSlide}
                  alt="First slide"
                />
              ) : (
                <p>Cargando imagen</p>
              )}

              <Carousel.Caption className="contenido-slider">
                <Container className="section-textonumbers">
                  <Row>
                    <Col lg={5} className="ipc-numeros borde-rght offset-xl-1">
                      <h2>IPC Pools</h2>
                      <h2>en números</h2>
                    </Col>
                    <Col lg={5} className="ipc-numeros offset-lg-1">
                      <span className="number-big">{slideNumero.Numeros}</span>
                      <p>{slideNumero.Descripcion}</p>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </Carousel>
    </Container>
  );
};

export default SliderNumerosNew;
