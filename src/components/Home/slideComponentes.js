import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

export const SlideComponents = () => {
  const [slides, setslides] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-home`).then((res) => {
      setslides(res.data.Componentes);
      setLoadedData(true);
    });
  }, []);

  return (
    <Container fluid className="backsHome" id="slideComponents">
      <Row>
        <Col lg={5} className="titleSlide">
          <h2 data-aos="fade-left">Tu piscina completamente Instalada</h2>
        </Col>
        <Col lg={7}>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              {loadedData ? (
                slides.map((slide, i) => (
                  <div className={slide.Clase} key={slide.id}>
                    <img
                      className="d-block w-100"
                      src={process.env.REACT_APP_URL_API + slide.Imagen.url}
                      alt="First slide"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{slide.Titulo}</h5>
                      <p>{slide.Descripcion}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideComponents;
