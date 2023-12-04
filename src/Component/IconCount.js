import React from "react";

const IconCount = ({ icon, count, height }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", marginBottom: "10px" }}
    >
      <img
        src={icon}
        alt="Icon"
        style={{ marginRight: "10px", height: `${height}vw` }}
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
