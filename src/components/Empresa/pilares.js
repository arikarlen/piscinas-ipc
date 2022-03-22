import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Loader from "../Commons/Loader";

export const Pilares = () => {
  const [pilares, setpilares] = useState([]);
  const [bannerMedioDesktop, setbannerMedioDesktop] = useState([]);
  const [bannerMedioMobile, setbannerMedioMobile] = useState([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-empresa`).then((res) => {
      setpilares(res.data.Pilares);
      setbannerMedioDesktop(res.data.BannerMedio);
      setbannerMedioMobile(res.data.BannerMedioMobile);
      setLoadedData(true);
    });
  }, []);

  const bannerDesktop = process.env.REACT_APP_URL_API + bannerMedioDesktop.url;
  const bannerMobile = process.env.REACT_APP_URL_API + bannerMedioMobile.url;
  return (
    <Container fluid id="section-pilares">
      <Container className="padd-section">
        <Row>
          <Col lg={6} className="col-titlepilares">
            <div className="columnInner">
              <h1
                className="title-left color-lightblue"
                data-aos="zoom-in"
                data-aos-offset="100"
              >
                Tres pilares
              </h1>
              <h1
                className="title-pilares color-blue"
                data-aos="zoom-in"
                data-aos-offset="110"
              >
                que nos definen
              </h1>
            </div>
          </Col>

          <Col lg={6}>
            <div
              className="columnInner"
              data-aos="zoom-in"
              data-aos-offset="120"
            >
              {loadedData ? (
                pilares.map((pilar, i) => (
                  <div className="hover-section" key={pilar.id}>
                    <h3 className="title-pilares">{pilar.Titulo}</h3>
                    <p className="text-pilares">{pilar.Descripcion}</p>
                  </div>
                ))
              ) : (
                <Loader />
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="backpilares">
        <Row>
          <Col lg={12} className="d-none d-lg-block">
            {bannerMedioDesktop ? (
              <img
                src={bannerDesktop}
                data-aos="zoom-in"
                data-aos-offset="210"
                alt={bannerMedioDesktop.alternativeText}
              ></img>
            ) : (
              <Loader />
            )}
          </Col>
          <Col sm={12} className="d-block d-md-none d-lg-none">
            {bannerMedioMobile ? (
              <img
                src={bannerMobile}
                data-aos="zoom-in"
                data-aos-offset="210"
                alt={bannerMedioMobile.alternativeText}
              ></img>
            ) : (
              <Loader />
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Pilares;
