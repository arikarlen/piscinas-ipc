import React, { Fragment } from "react";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/layout.css";
import "./css/responsive.css";
import Enviroment from "./components/Commons/enviroment";
import Footer from "./components/Commons/footer";

function App() {
  return (
    <Fragment>
      <Enviroment />
      <AppRouter />
      <Footer />
    </Fragment>
  );
}

export default App;
