import React from "react";
import { Row, Col } from "react-bootstrap";

export const Piscinas = () => {
  return (
    <Row>
      <Col lg={3} className="boxMenu boxPiscinas">
        <h1>Piscinas</h1>
        <p>
          Contamos con 3 líneas adaptadas a tu necesidad y una amplia variedad
          de modelos.
        </p>
      </Col>
      <Col lg={3}>
        <div className="opcionesMenu">
          <h3>
            <a href="/practipool/">PractiPool</a>
          </h3>

          <ul>
            <li>
              <a href="/practipool/fun"> Fun</a>
            </li>

            <li>
              <a href="/practipool/jump"> Jump</a>
            </li>

            <li>
              <a href="/family/"> Family</a>
            </li>
            <li>
              <a href="/spa/"> Spa</a>
            </li>
            <li>
              <a href="/relax/"> Relax</a>
            </li>
          </ul>
        </div>
      </Col>
      <Col lg={3}>
        <div className="opcionesMenu">
          <h3>
            <a href="/style-pool/">Style Pool</a>
          </h3>

          <ul>
            <li>
              <a href="/griega/"> Griega</a>
            </li>
            <li>
              <a href="/americana/"> Americana</a>
            </li>
            <li>
              <a href="/germana/"> Germana</a>
            </li>
          </ul>
        </div>
      </Col>
      <Col lg={3}>
        <div className="opcionesMenu">
          <h3>
            <a href="/luxury/">Luxury</a>
          </h3>
        </div>
      </Col>
    </Row>
  );
};

export default Piscinas;
