import React from "react";
import "../css/Glitter.css";

const Glitter = ({ img, width, height, x, y, speed }) => {
  return (
    <img
      src={img}
      alt="Glitter"
      className="glitter-image"
      style={{
        position: "absolute",
        top: `${y}vh`,
        left: `${x}vw`,
        width: `${width}vw`,
        height: `${height}vh`,
        animation: `glitter ${speed}s infinite alternate`,
      }}
    />
  );
};

export default Glitter;
