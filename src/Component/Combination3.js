import React from "react";
import Counter from "./Counter"; // adjust the path according to your project structure

const Combination3 = ({ text1, count, text2 }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div>
      <h1 style={{ fontSize: isMobile ? "5vw" : "2vw" }}>{text1}</h1>
      <br />
      <span style={{ fontSize: isMobile ? "8vw" : "4vw", fontWeight: "bold" }}>
        <Counter counts={count} />
      </span>
      <span style={{ fontSize: isMobile ? "5vw" : "2vw" }}>{text2}</span>
    </div>
  );
};

export default Combination3;
