import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

import Accesorios from "./Header/accesorios";
import Piscinas from "./Header/piscinas";

export const Header = () => {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/info-institucional`)
      .then((res) => {
        setLogo(res.data.Logo);
      });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark  fixed-top"
      id="headerFixed"
    >
      <Container>
        <a className="navbar-brand" href="/">
          {logo?.url ? (
            <img
              src={process.env.REACT_APP_URL_API + logo.url}
              alt={logo.alternativeText}
            />
          ) : (
            <p>Cargando imagen</p>
          )}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main_nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main_nav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown has-megamenu">
              <a className="nav-link dropdown-toggle" href="/piscinas">
                Piscinas <i className="fas fa-arrow-down"></i>
              </a>
              <div className="dropdown-menu megamenu" role="menu">
                <Piscinas />
              </div>
            </li>
            <li className="nav-item dropdown has-megamenu">
              <a className="nav-link dropdown-toggle" href="/accesorios">
                Accesorios <i className="fas fa-arrow-down"></i>
              </a>
              <div className="dropdown-menu megamenu" role="menu">
                <Accesorios />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/catalogo">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Razones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/empresa">
                Empresa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacto
              </a>
            </li>
            <li className="nav-item btn-presupuestar ">
              <a className="nav-link" href="/">
                Presupuestar
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Header;
