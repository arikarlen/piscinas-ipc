import React, { useState, useEffect } from "react";
import Header from "../../components/Commons/header";
import {
  Container,
  Row,
  Col,
  Carousel,
  Tabs,
  Tab,
  Breadcrumb,
} from "react-bootstrap";
import axios from "axios";
import NuestrasPiscinas from "../../components/Commons/nuestrasPiscinas";

export const Relax = () => {
  const [key, setKey] = useState("home");
  const [pool, setPool] = useState([]);
  const [logoPool, setLogoPool] = useState([]);
  const [slidePool, setSlidePool] = useState([]);

  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/piscinas/5`).then((res) => {
      setPool(res.data);
      setLogoPool(res.data.Logo);
      setSlidePool(res.data.Slide);
      setLoadedData(true);
    });
  }, []);

  return (
    <>
      <div id="headerInternos">
        <Header />
      </div>
      <Container fluid id="contentInterns" className="relax">
        <Container id="titlePools">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/piscinas">Piscinas</Breadcrumb.Item>
            <Breadcrumb.Item href="/practipool">practipool</Breadcrumb.Item>
            <Breadcrumb.Item active>{pool.Modelo}</Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col lg={6}>
              <h1>{pool.Modelo}</h1>
            </Col>
            <Col lg={6}>
              {logoPool.url ? (
                <img
                  src={process.env.REACT_APP_URL_API + logoPool.url}
                  data-aos="zoom-in"
                  data-aos-offset="100"
                  alt={logoPool.alternativeText}
                ></img>
              ) : (
                <p>Cargando imagen</p>
              )}
            </Col>
          </Row>
        </Container>
        <Carousel fade id="piscinas">
          {loadedData ? (
            slidePool.Imagenes.map((slide, i) => (
              <Carousel.Item key={slide.id}>
                <img
                  className="d-block w-100"
                  src={process.env.REACT_APP_URL_API + slide.url}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1 className="text-white">{slidePool.Frase}</h1>
                </Carousel.Caption>
              </Carousel.Item>
            ))
          ) : (
            <p>Cargando...</p>
          )}
        </Carousel>
        <Container id="caracteristicas">
          <ul className="listPileta">
            {loadedData ? (
              pool.Caracteristicas.map((caracteristica, i) => (
                <li key={caracteristica.id}>
                  <i className="fas fa-circle"></i>
                  <span className={caracteristica.Destacado}>
                    {caracteristica.Item}
                  </span>
                </li>
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </ul>
        </Container>
        <Container fluid id="modelosInternos">
          <Container>
            <h2 className="text-center">Modelos</h2>
            <h4 className="text-center">{pool.Texto_Modelos}</h4>
            <p className="text-center">
              Las medidas indicadas son externas, de extremo a extremo.
            </p>
            <Row id="titleModelos" data-aos="zoom-in " data-aos-offset="200">
              {loadedData ? (
                pool.Modelos.map((modelo, i) => (
                  <Col className="text-center" lg={6} key={modelo.id}>
                    <p>{pool.Modelo}</p>
                    <h2>{modelo.Nombre}</h2>
                  </Col>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </Row>
            <Row>
              {loadedData ? (
                pool.Modelos.map((modelo, i) => (
                  <Col className="text-center" lg={6} key={modelo.id}>
                    {modelo.Imagen.url ? (
                      <img
                        src={process.env.REACT_APP_URL_API + modelo.Imagen.url}
                        data-aos="zoom-in"
                        data-aos-offset="100"
                        alt={modelo.Imagen.alternativeText}
                        width="250px"
                      ></img>
                    ) : (
                      <p>Cargando imagen</p>
                    )}
                  </Col>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </Row>
            <Row
              className="casco"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h3 className="tituloTabla">Casco</h3>
              {loadedData ? (
                pool.Modelos.map((casco, i) => (
                  <Col className="text-center" lg={4} key={casco.id}>
                    <h6>{casco.Casco}</h6>
                  </Col>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </Row>
            <Row
              className="profundidad"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h3 className="tituloTabla">Profundidad</h3>
              {loadedData ? (
                pool.Modelos.map((profundidad, i) => (
                  <Col className="text-center" lg={6} key={profundidad.id}>
                    <h6>{profundidad.Profundidad}</h6>
                  </Col>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </Row>
            <Row
              className="volumen"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h3 className="tituloTabla">Volumen</h3>
              {loadedData ? (
                pool.Modelos.map((volumen, i) => (
                  <Col className="text-center" lg={6} key={volumen.id}>
                    <h6>{volumen.Volumen}</h6>
                  </Col>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </Row>
            <Row
              className="piscina"
              data-aos="fade-down"
              data-aos-duration="2000"
            >
              <h3 className="tituloTabla">Piscina</h3>
              {loadedData ? (
                pool.Modelos.map((piscina, i) => (
                  <Col className="text-center" lg={6} key={piscina.id}>
                    <h6>{piscina.Piscina}</h6>
                  </Col>
                ))
              ) : (
                <p>Cargando...</p>
              )}
            </Row>
          </Container>
        </Container>
        <Container fluid id="componentes">
          <Container>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              transition={true}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="componentes" title="Componentes">
                {loadedData ? (
                  pool.Componentes.map((componente, i) => (
                    <Row className="componente" key={componente.id}>
                      <Col lg={4}>
                        {componente.Imagen.url ? (
                          <img
                            src={
                              process.env.REACT_APP_URL_API +
                              componente.Imagen.url
                            }
                            data-aos="zoom-in"
                            data-aos-offset="100"
                            alt={componente.Imagen.alternativeText}
                            className="img-fluid"
                          ></img>
                        ) : (
                          <p>Cargando imagen</p>
                        )}
                      </Col>
                      <Col lg={8}>
                        <h4>{componente.Nombre}</h4>
                        <p>{componente.Descripcion}</p>
                      </Col>
                    </Row>
                  ))
                ) : (
                  <p>Cargando...</p>
                )}
              </Tab>
              <Tab eventKey="opcionales" title="Opcionales">
                <Row>
                  {loadedData ? (
                    pool.Opcionales.map((opcional, i) => (
                      <Col lg={3} key={opcional.id}>
                        {opcional.Imagen.url ? (
                          <img
                            src={
                              process.env.REACT_APP_URL_API +
                              opcional.Imagen.url
                            }
                            data-aos="zoom-in"
                            data-aos-offset="100"
                            alt={opcional.Imagen.alternativeText}
                            className="imagenOpcional center-block"
                          ></img>
                        ) : (
                          <p>Cargando imagen</p>
                        )}
                        <h4>{opcional.Nombre}</h4>
                        <p>{opcional.Descripcion}</p>
                      </Col>
                    ))
                  ) : (
                    <p>Cargando...</p>
                  )}
                </Row>
              </Tab>
            </Tabs>
          </Container>
        </Container>
        <NuestrasPiscinas />
      </Container>
    </>
  );
};

export default Relax;
