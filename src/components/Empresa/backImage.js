import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export const BackImage = () => {
  const [bannerEmpresa, setbannerEmpresa] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      setbannerEmpresa(res.data.Banner);
    });
  }, []);

  return (
    <Container fluid id="imageLayer">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="columnInner">
              <h2
                className="text-white"
                data-aos="zoom-in"
                data-aos-offset="100"
              >
                {bannerEmpresa.Titulo}
              </h2>
              <p
                className="text-white"
                data-aos="zoom-in"
                data-aos-offset="200"
              >
                {bannerEmpresa.Descripcion}
              </p>
              <Button
                href="#"
                variant="primary"
                data-aos="zoom-in"
                data-aos-offset="300"
              >
                Más sobre nosotros
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default BackImage;
