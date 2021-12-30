import React, { Fragment } from "react";
import Header from "../components/Commons/header";
import VideoSlide from "../components/Home/videoSlide";
import Wave from "../components/Home/wave";
import Cinta from "../components/Home/cinta";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <VideoSlide />
      <Wave />
      <Cinta />
    </Fragment>
  );
};

export default Home;
