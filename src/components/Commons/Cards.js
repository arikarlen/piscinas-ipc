import React from "react";

export const Card = ({ children }) => {
  return (
    <div className="cardsIpc" data-aos="zoom-in" data-aos-offset="200">
      {children}
    </div>
  );
};

export default Card;
