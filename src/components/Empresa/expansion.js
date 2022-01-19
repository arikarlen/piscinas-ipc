import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Expansion = () => {
  return (
    <Container className="margin-seccion">
          <Row id="section-expansion">
            <Col className="text-center pt-4 pb-4 img-mountain" lg={12}>
              <h1 >Expansión Internacional</h1>
              <div className="img-mendoza">
                <h1 className="text-white ">De Mendoza al mundo</h1>
              </div>
            </Col>
          </Row>
          <Row id="section-expansion">
            <Col className="text-center m-auto pb-5 texto-crecimiento" lg={8}>
              <p>Como parte de un proceso de crecimiento sostenido, además de comercializar nuestros productos en Chile y Uruguay, desembarcamos en Estados Unidos. De esta forma, estamos proyectando la internacionalización del negocio, mediante un desarrollo exponencial que nos permita seguir generando empleo de calidad.</p>
              <p>Esta proyección nos situó como una de las empresas con mayor crecimiento a nivel nacional y nos posicionó competitivamente en el mercado internacional, con productos capaces de satisfacer los más altos estándares de calidad, altamente estéticos y funcionales, creados para superar las expectativas de todo tipo de consumidores, desde aquellos que conocen nuestra amplia trayectoria hasta nuevos públicos exigentes como el de Estados Unidos, que se caracteriza por contar con una amplia oferta de productos a disposición.</p>
            </Col>
          </Row>
          <Row className="margin-seccion">
            <Col lg={12}>
              <div className="video-responsive">
                <iframe width="100%" height="auto" id="videoContainer" src="https://www.youtube.com/embed/VkrJocMFvRQ?controls=0" frameBorder="0" allowFullScreen title="video"
                />
              </div>
            </Col>
          </Row>
    </Container>
  );
};

export default Expansion;