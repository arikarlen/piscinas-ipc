import React, { Fragment } from "react";
import Header from "../components/Commons/header";
import VideoSlide from "../components/Home/videoSlide";
import Wave from "../components/Home/wave";
import Cinta from "../components/Home/cinta";
import NuestrasPiscinas from "../components/Home/nuestrasPiscinas";
import ComponentsHome from "../components/Home/slideComponentes";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <VideoSlide />
      <Wave />
      <Cinta />
      <NuestrasPiscinas />
      <ComponentsHome />
    </Fragment>
  );
};

export default Home;
