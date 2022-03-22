import React from "react";
import loading from "../../assets/loading.gif";

export const Loader = () => {
  return (
    <div className="loading text-center">
      <img src={loading} alt="Loading" className="loader"></img>
    </div>
  );
};

export default Loader;
