import React from 'react';

const Combination2 = ({ text, time }) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Use column layout for mobile
        alignItems: "flex-start",
        marginBottom: "1vh",
        
      }}
    >
      {text && (
        <span
          style={{
            fontSize: isMobile ? "4vw" : "3vh",
            verticalAlign: "bottom",
            color: "#fff",
            marginBottom: isMobile ? "0.5vh" : "0" // Add margin only if isMobile is true
          }}
        >
          {text}
        </span>
      )}
      {time && (
        <strong
          style={{
            fontSize: isMobile ? "5vw" : "4vh",
            verticalAlign: "bottom",
            color: "#fff"
          }}
        >
          {time}
        </strong>
      )}
    </div>
  );
};

export default Combination2;
