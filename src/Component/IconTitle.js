import React from "react";

const IconTitle = ({ icon, text, isMargin = true }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const style = isMargin
    ? {
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "1vh",
        marginTop: "2vh",
      }
    : { display: "flex", alignItems: "flex-end" };

  return (
    <div style={style}>
      {icon && (
        <img
          src={icon}
          alt="Icon"
          style={{ marginRight: "0.5vw", width: isMobile ? "4vw" : "2vw" }}
        />
      )}
      {text && (
        <span
          style={{
            fontSize: isMobile ? "2vh" : "3.5vh",
            fontWeight: "bold",
            verticalAlign: "bottom",
            color: "#fff",
          }}
        >
          {" "}
          &nbsp;{text}
        </span>
      )}
    </div>
  );
};

export default IconTitle;
