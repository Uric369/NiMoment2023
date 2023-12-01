import React from 'react';

const Combination4 = ({ item, content}) => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1vh' }}>
      {item && <strong style={{ fontSize: isMobile? '1.5vh':'3vh', verticalAlign: 'bottom', color: '#00ffff' }}>{item} &nbsp; &nbsp;</strong>}
      {content && <span style={{ fontSize: isMobile? '1.5vh':'3vh', verticalAlign: 'bottom', color: '#fff' }}>{content}</span>}
    </div>
  );
};


export default Combination4;
