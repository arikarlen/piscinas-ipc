import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import BackNumberSlide from "../../assets/fondo-numeros.jpg"

export const SliderNumeros = () => {
 return (
  <Container fluid className="section-numbers margin-seccion">
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="First slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">8.000</span>
        <p>piscinas fabricadas en 2020</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">14.000</span>
        <p>piscinas en nuestra proyección para el 2021</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">320</span>
        <p>colaboradores forman parte de nuestro equipo</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">60</span>
        <p>piscinas por día es el resultado de nuestra capacidad de producción</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">20.000</span>
        <p>kilómetros recorridos en lógistica en el 2020</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">80</span>
        <p>concesionarios forman parte de nuestra red</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">12.000 m²</span>
        <p>mide nuestra base de operaciones</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={BackNumberSlide}
      alt="Second slide"
    />
    <Carousel.Caption className="contenido-slider">
     <Container className="section-textonumbers">
      <Row>
       <Col lg={5}  className="ipc-numeros borde-rght offset-xl-1">
        <h2>IPC Pools</h2>
        <h2>en números</h2>
       </Col>
       <Col lg={5} className="ipc-numeros offset-lg-1">
        <span className="number-big">4</span>
        <p>son los países donde tenemos presencia</p>
       </Col>
      </Row>
     </Container>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
</Container>
 );
};

export default SliderNumeros;