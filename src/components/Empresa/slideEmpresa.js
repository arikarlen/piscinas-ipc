import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import axios from "axios";
import Loader from "../Commons/Loader";

export const SlideEmpresa = () => {
  const [sliderCrecimiento, setSliderCrecimiento] = useState([]);

  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      setSliderCrecimiento(res.data.Crecimiento);

      setLoadedData(true);
    });
  }, []);

  console.log(sliderCrecimiento);

  return (
    <Container
      fluid
      id="slideEmpresa"
      className="vertical carousel slide"
      data-ride="carousel"
    >
      <Carousel id="carrouselEmpresa">
        {loadedData ? (
          sliderCrecimiento.map((sliderCrec, i) => (
            <Carousel.Item>
              <img
                src={process.env.REACT_APP_URL_API + sliderCrec.Imagen.url}
                alt="sdfsdf"
              ></img>
              <Carousel.Caption className="contenido-slider">
                <Row>
                  <Col lg={{ span: 6, offset: 6 }} className="align-items-end">
                    <h1 className="text-white">{sliderCrec.Titulo}</h1>
                    <p className="text-white">{sliderCrec.Descripcion}</p>
                  </Col>
                </Row>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        ) : (
          <Loader />
        )}
      </Carousel>
    </Container>
  );
};

export default SlideEmpresa;
