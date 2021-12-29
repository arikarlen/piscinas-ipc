import React, { Fragment } from "react";
import Header from "../components/Commons/header";
import VideoSlide from "../components/Home/videoSlide";

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <VideoSlide />
    </Fragment>
  );
};

export default Home;
