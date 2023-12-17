import React from "react";
import { useIsMobile } from "../hooks";

const Combination4 = ({ item, content }) => {
  const [isMobile] = useIsMobile();
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        marginBottom: isMobile ? "0.8vh" : "1vh",
      }}
    >
      {item && (
        <strong
          style={{
            fontSize: isMobile ? "1.3vh" : "3vh",
            verticalAlign: "bottom",
            color: "#00ffff",
          }}
        >
          {item} &nbsp; &nbsp;
        </strong>
      )}
      {content && (
        <span
          style={{
            fontSize: isMobile ? "1.3vh" : "3vh",
            verticalAlign: "bottom",
            color: "#fff",
          }}
        >
          {content}
        </span>
      )}
    </div>
  );
};

export default Combination4;
