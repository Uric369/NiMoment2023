import React from "react";
import DashedLine from "./DashedLine"; // Import the DashedLine component

const DashedLines = ({ points, color }) => {
  let lines = [];

  for (let i = 0; i < points.length - 1; i++) {
    lines.push(
      <DashedLine
        x1={points[i].x}
        y1={points[i].y}
        x2={points[i + 1].x}
        y2={points[i + 1].y}
        color={color}
        key={i} // use index as a key (in this specific case it should be fine)
      />
    );
  }

  return <>{lines}</>;
};

export default DashedLines;
