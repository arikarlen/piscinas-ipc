import React, { Fragment } from "react";
import AppRouter from "./routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./css/layout.css";
import "./css/responsive.css";
import Enviroment from "./components/Commons/enviroment";

function App() {
  return (
    <Fragment>
      <Enviroment />
      <AppRouter />
    </Fragment>
  );
}

export default App;
