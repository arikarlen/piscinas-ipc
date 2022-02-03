import React, { Fragment } from "react";

export const Enviroment = () => {
  return (
    <Fragment>
      {(() => {
        if (
          process.env.REACT_APP_URL_API ===
          "https://admin-develop.piscinasipc.com"
        ) {
          return <div className="warning dev">Dev</div>;
        } else if (
          process.env.REACT_APP_URL_API ===
          "https://admin-staging.piscinasipc.com"
        ) {
          return <div className="warning staging">Staging</div>;
        }
      })()}
    </Fragment>
  );
};

export default Enviroment;
