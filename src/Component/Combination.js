import React from "react";
import Counter from "./Counter";

const Combination = ({ icon, text1, text2, count, sequence }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        marginBottom: isMobile ? "1vh" : "2vh",
      }}
    >
      {sequence === "left" && icon && (
        <img
          src={icon}
          alt="Icon"
          style={{
            marginRight: "10px",
            width: "auto",
            height: isMobile ? "3vh" : "6vh",
          }}
        />
      )}
      {text1 && (
        <span
          style={{
            fontSize: isMobile ? "2vh" : "3vh",
            verticalAlign: "bottom",
            color: "#fff",
          }}
        >
          {" "}
          &nbsp;{text1}
        </span>
      )}
      {count !== undefined && (
        <strong
          style={{
            fontSize: isMobile ? "2.5vh" : "4vh",
            verticalAlign: "bottom",
            color: "#fff",
          }}
        >
          &nbsp;
          <Counter counts={count} time={1000} />
          &nbsp;
        </strong>
      )}
      {text2 && (
        <span
          style={{
            fontSize: isMobile ? "2vh" : "3vh",
            verticalAlign: "bottom",
            color: "#fff",
          }}
        >
          {text2} &nbsp;
        </span>
      )}
      {sequence === "right" && icon && (
        <img
          src={icon}
          alt="Icon"
          style={{
            marginRight: "10px",
            width: "auto",
            height: isMobile ? "3vh" : "6vh",
          }}
        />
      )}
    </div>
  );
};

export default Combination;
