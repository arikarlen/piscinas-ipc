import React, { Fragment } from "react";

import GoogleMapReact from "google-map-react";
import marker from "../../assets/marker.svg";

const Concesionario = ({ text }) => <img src={marker}></img>;

export const GmapsFull = () => {
  const defaultProps = {
    center: {
      lat: -32.98,
      lng: -68.77,
    },
    zoom: 11,
  };
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBf7b5hTsq0miLZVorRCla4-rLwQqNDKxU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Concesionario
          lat={-32.9881323}
          lng={-68.775115}
          text="ESTO ES UN MARCADORAZO"
        />
      </GoogleMapReact>
    </div>
  );
};

export default GmapsFull;
