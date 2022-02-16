import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import MarkdownView from "react-showdown";

export const Valores = () => {
  const [valores, setValores] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      setValores(res.data.Valores);
      setLoadedData(true);
    });
  }, []);
  const parrafo1 = valores.Parrafo_1;
  const parrafo2 = valores.Parrafo_2;
  const parrafo3 = valores.Parrafo_3;
  return (
    <Container fluid id="valoresEmpresa">
      <Container>
        <Row>
          <h2 data-aos="zoom-in" data-aos-offset="100">
            {valores.Titulo_1}
          </h2>
          <Col lg={6}>
            <div className="columnInner">
              <MarkdownView
                markdown={parrafo1}
                data-aos="zoom-in"
                data-aos-offset="200"
              />
            </div>
          </Col>
          <Col lg={6}>
            <div className="columnInner">
              <MarkdownView
                markdown={parrafo2}
                data-aos="zoom-in"
                data-aos-offset="200"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            {loadedData ? (
              valores.Imagen.map((valorImg, i) => (
                <div className="hover-section" key={valorImg.id}>
                  {valorImg.url ? (
                    <img
                      src={process.env.REACT_APP_URL_API + valorImg.url}
                      alt={valorImg.alternativeText}
                    ></img>
                  ) : (
                    <p>Cargando imagen</p>
                  )}
                </div>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </Col>
          <Col lg={6}>
            <MarkdownView
              markdown={parrafo3}
              data-aos="zoom-in"
              data-aos-offset="200"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Valores;
