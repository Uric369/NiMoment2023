import React from "react";
import Counter from "./Counter";
import { useIsMobile } from "../hooks";

const Combination5 = ({ text1, count, text2 }) => {
  const [isMobile] = useIsMobile();
  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", marginBottom: "1vh" }}
    >
      <span
        style={{
          fontSize: isMobile ? "1.5vh" : "3vh",
          verticalAlign: "bottom",
          color: "#fff",
        }}
      >
        &gt;&gt;&gt;&nbsp;&nbsp;
      </span>
      {text1 && (
        <strong
          style={{
            fontSize: isMobile ? "1.5vh" : "3vh",
            verticalAlign: "bottom",
            color: "#00ffff",
            fontWeight: "normal",
          }}
        >
          {text1}
        </strong>
      )}
      {count !== undefined && (
        <span
          style={{
            fontSize: isMobile ? "1.5vh" : "3vh",
            verticalAlign: "bottom",
            color: "#fff",
          }}
        >
          &nbsp;
          <Counter counts={count}/>
          &nbsp;
        </span>
      )}
      {text2 && (
        <strong
          style={{
            fontSize: isMobile ? "1.5vh" : "3vh",
            verticalAlign: "bottom",
            color: "#00ffff",
            fontWeight: "normal",
          }}
        >
          {text2}
        </strong>
      )}
    </div>
  );
};

export default Combination5;
