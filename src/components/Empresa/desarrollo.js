import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import axios from "axios";
import MarkdownView from "react-showdown";
import Loader from "../Commons/Loader";

export const Desarrollo = () => {
  const [desarrollo, setDesarrollo] = useState([]);
  const [icono, setIcono] = useState([]);
  const [slider, setSlider] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      setDesarrollo(res.data.Desarrollo);
      setSlider(res.data.Desarrollo.Galeria);
      setIcono(res.data.Desarrollo.Icono);
      setLoadedData(true);
    });
  }, []);
  return (
    <Container id="Desarrollo">
      <Row>
        <Col lg={{ span: 8, offset: 2 }}>
          <Row>
            <Col lg={{ span: 4, offset: 4 }} className="iconoDesarrollo">
              {icono.url ? (
                <img
                  className="d-block w-100"
                  src={process.env.REACT_APP_URL_API + icono.url}
                  alt="First slide"
                />
              ) : (
                <Loader />
              )}
            </Col>
          </Row>
          <h1 className="text-center">{desarrollo.Titulo}</h1>
          <h2 className="text-center">{desarrollo.Subtitulo}</h2>
          <p className="text-center">
            <span>{desarrollo.Bajada}</span>
          </p>
          <MarkdownView markdown={desarrollo.Texto} />
          <Carousel>
            {loadedData ? (
              slider.map((imagen, i) => (
                <Carousel.Item key={imagen.id}>
                  <img
                    src={process.env.REACT_APP_URL_API + imagen.url}
                    alt="sdfsdf"
                  ></img>
                </Carousel.Item>
              ))
            ) : (
              <Loader />
            )}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Desarrollo;
