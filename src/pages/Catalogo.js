import React, { useState, useEffect } from "react";
import { Container, Breadcrumb } from "react-bootstrap";
import axios from "axios";
import Header from "../components/Commons/header";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";

export const Catalogo = () => {
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_API}/pages-catalogo`).then((res) => {
      setCatalogo(res.data.Catalogo);
    });
  }, []);
  const urlPdf =
    "https://flowpaper.com/flipbook/" +
    process.env.REACT_APP_URL_API +
    catalogo.url;
  console.log(urlPdf);
  return (
    <>
      <div id="headerInternos">
        <Header />
      </div>
      <Container id="contentCatalogo">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Catálogo</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="text-center">Catálogo</h1>

        <iframe
          src={urlPdf}
          width="100%"
          height="800"
          allowFullScreen
          title="Catalogo"
        ></iframe>
      </Container>
      <NuestrasPiscinas />
      <CatalogoMomentos />
    </>
  );
};

export default Catalogo;
