import React from 'react';
import '../css/Rotator.css';

const Rotator = ({ src, width, height, x, y, speed }) => {
  return (
    <img 
      src={src}
      alt="Rotating"
      className="rotating-image"
      style={{
        position: 'absolute',
        top: `${y}vh`,
        left: `${x}vw`,
        width: `${width}vw`,
        height: `${height}vh`,
        animationDuration: `${speed}s`
      }}
    />
  );
};

export default Rotator;
