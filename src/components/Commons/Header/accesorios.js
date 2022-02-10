import React from "react";
import { Row, Col } from "react-bootstrap";

export const Accesorios = () => {
  return (
    <Row>
      <Col lg={3} className="boxMenu boxAccesorios">
        <h1>Accesorios y Mobiliario</h1>
        <p>
          Contamos con 3 líneas adaptadas a tu necesidad y una amplia variedad
          de modelos.
        </p>
      </Col>
      <Col lg={3}>
        <div className="opcionesMenu">
          <h3>
            <a href="/attenuar">Attenuar</a>
          </h3>

          <p>Pisos y revestimientos atérmicos para piscinas y soláriums</p>
        </div>
      </Col>
      <Col lg={3}>
        <div className="opcionesMenu">
          <h3>
            <a href="/somma">Somma</a>
          </h3>

          <p>Accesorios y equipamiento para piscinas</p>
        </div>
      </Col>
      <Col lg={3}>
        <div className="opcionesMenu">
          <h3>
            <a href="/feel-design">Feel Design</a>
          </h3>

          <p>Accesorios y equipamiento para piscinas</p>
        </div>
      </Col>
    </Row>
  );
};

export default Accesorios;
