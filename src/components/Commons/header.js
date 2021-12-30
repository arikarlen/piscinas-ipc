import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoHeader from "../../assets/LogoIPCWhite.svg";
import Accesorios from "./Header/accesorios";
import Piscinas from "./Header/piscinas";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
      <Container>
        <a className="navbar-brand" href="#">
          <img src={LogoHeader} />
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
              <a className="nav-link dropdown-toggle" href="#">
                Piscinas <i class="fas fa-arrow-down"></i>
              </a>
              <div className="dropdown-menu megamenu" role="menu">
                <Piscinas />
              </div>
            </li>
            <li className="nav-item dropdown has-megamenu">
              <a className="nav-link dropdown-toggle" href="#">
                Accesorios <i class="fas fa-arrow-down"></i>
              </a>
              <div className="dropdown-menu megamenu" role="menu">
                <Accesorios />
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Catálogo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Razones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Empresa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item btn-presupuestar">
              <a className="nav-link" href="#">
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
