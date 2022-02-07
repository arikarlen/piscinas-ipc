import React, { Fragment } from "react";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/layout.css";
import "./css/responsive.css";
import Enviroment from "./components/Commons/enviroment";
import Header from "./components/Commons/header";
import Footer from "./components/Commons/footer";

function App() {
  return (
    <Fragment>
      <Enviroment />
      <Header />
      <AppRouter />
      <Footer />
    </Fragment>
  );
}

export default App;
