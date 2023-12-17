import React from "react";
import { useIsMobile } from "../hooks";

const IconCount = ({ icon, count, height }) => {
  const [isMobile] = useIsMobile();
  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", marginBottom: "10px" }}
    >
      <img
        src={icon}
        alt="Icon"
        style={{ marginRight: isMobile? "2px":"10px", height: `${height}vw` }}
      />
      <span
        style={{
          fontSize: isMobile ? "5vw" : "2vw",
          verticalAlign: "bottom",
          color: "#fff",
        }}
      >
        {" "}
        × {count}
      </span>
    </div>
  );
};

export default IconCount;
