import React from 'react';

const Combination4 = ({ item, content}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1vh' }}>
      {item && <strong style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#00ffff' }}>{item} &nbsp; &nbsp;</strong>}
      {content && <span style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#fff' }}>{content}</span>}
    </div>
  );
};


export default Combination4;
