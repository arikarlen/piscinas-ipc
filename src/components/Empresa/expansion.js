import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
export const Expansion = () => {
  const [textoExpansion, settextoExpansion] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      settextoExpansion(res.data.Expansion_Internacional);
    });
  }, []);

  return (
    <Container className="margin-seccion">
      <Row id="section-expansion">
        <Col className="text-center pt-4 pb-4 img-mountain" lg={12}>
          <h1>Expansión Internacional</h1>
          <div className="img-mendoza">
            <h1 className="text-white ">De Mendoza al mundo</h1>
          </div>
        </Col>
      </Row>
      <Row id="section-expansion">
        <Col className="text-center m-auto pb-5 texto-crecimiento" lg={8}>
          <p>{textoExpansion.Parrafo}</p>
          <p>{textoExpansion.Parrafo2}</p>
        </Col>
      </Row>
      <Row className="margin-seccion">
        <Col lg={12}>
          <div className="video-responsive">
            <iframe
              width="100%"
              height="auto"
              id="videoContainer"
              src="https://www.youtube.com/embed/VkrJocMFvRQ?controls=0"
              frameBorder="0"
              allowFullScreen
              title="video"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Expansion;
