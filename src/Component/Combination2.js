import React from 'react';
import { useIsMobile } from '../hooks';

const Combination2 = ({ text, time }) => {
  const [isMobile] = useIsMobile();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", // Use column layout for mobile
        alignItems: "baseline",
        marginBottom: "1vh",
        
      }}
    >
      {text && (
        <span
          style={{
            fontSize: isMobile ? "4vw" : "3vh",
            verticalAlign: "bottom",
            color: "#fff",
            marginBottom: isMobile ? "0.5vh" : "0", // Add margin only if isMobile is true
            marginRight:"1vw"
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
