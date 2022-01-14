import React from "react";
import { Container } from "react-bootstrap";
import BtnsContactoFooter from "./Footer/btnsContactoFooter";
import FooterBottom from "./Footer/footerBottom";
import SubFooter from "./Footer/subFooter";

export const Footer = () => {
  return (
    <Container fluid id="footer" className="backsHome">
      <BtnsContactoFooter />
      <SubFooter />
      <FooterBottom />
    </Container>
  );
};

export default Footer;
