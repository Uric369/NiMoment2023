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
        width: `${width}px`,
        height: `${height}px`,
        animationDuration: `${speed}s`
      }}
    />
  );
};

export default Rotator;
