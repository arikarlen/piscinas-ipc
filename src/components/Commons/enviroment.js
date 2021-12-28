import React, { Fragment } from "react";

export const Enviroment = () => {
  return (
    <Fragment>
      {(() => {
        if (process.env.REACT_APP_URL_API === "Develop") {
          return (
            <div className="warning dev">{process.env.REACT_APP_URL_API}</div>
          );
        } else if (process.env.REACT_APP_URL_API === "Staging") {
          return (
            <div className="warning staging">
              {process.env.REACT_APP_URL_API}
            </div>
          );
        }
      })()}
    </Fragment>
  );
};

export default Enviroment;
