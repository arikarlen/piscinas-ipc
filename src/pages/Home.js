import React, { Fragment } from "react";

import VideoSlide from "../components/Home/videoSlide";
import Wave from "../components/Home/wave";
import Cinta from "../components/Home/cinta";
import NuestrasPiscinas from "../components/Commons/nuestrasPiscinas";
import ComponentsHome from "../components/Home/slideComponentes";
import PlantaProduccion from "../components/Home/plantaProduccion";
import CatalogoMomentos from "../components/Commons/catalogoMomentos";
import Header from "../components/Commons/header";
export const Home = () => {
  return (
    <Fragment>
      <Header />
      <VideoSlide />
      <Wave />
      <Cinta />
      <NuestrasPiscinas />
      <ComponentsHome />
      <PlantaProduccion />
      <CatalogoMomentos />
    </Fragment>
  );
};

export default Home;
