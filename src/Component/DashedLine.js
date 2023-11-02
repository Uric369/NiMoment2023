import React from 'react';

const DashedLine = ({ x1, y1, x2, y2, color }) => {
    console.log("dashline: ")
    console.log(x1)
    console.log(y1)
    console.log(x2)
    console.log(y2)
  return (
    <svg style={{ position:'absolute', width: '100vw', height: '100vh', overflow: 'visible'}}>
      <line 
        x1={x1+'vw'} 
        y1={y1+'vh'} 
        x2={x2+'vw'} 
        y2={y2+'vh'} 
        stroke={color}
        strokeWidth="2"
        strokeDasharray="5,5" 
      />
    </svg>
  );
};

export default DashedLine;
