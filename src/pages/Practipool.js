import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";

export const Practipool = () => {
  const [practipool, setpractipool] = useState([]);
  const [practipoolLogo, setpractipoolLogo] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/pages-practipool`)
      .then((res) => {
        setpractipool(res.data);
        setpractipoolLogo(res.data.Logo);
      });
  }, []);
  console.log(practipool);
  return (
    <Fragment>
      <Container fluid id="bannerPractipool">
        <Container>
          <Row>
            <Col lg={3}>
              {practipoolLogo.url ? (
                <img
                  src={process.env.REACT_APP_URL_API + practipoolLogo.url}
                ></img>
              ) : (
                <p>Cargando imagen</p>
              )}
            </Col>
            <Col lg={6}>
              <p>{practipool.Descripcion}</p>
            </Col>
          </Row>
        </Container>
      </Container>
      <CatalogoMomentos />
      <NuestrasPiscinas />
    </Fragment>
  );
};

export default Practipool;
