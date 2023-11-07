import React from 'react';
import Counter from './Counter';

const Combination5 = ({ text1, count, text2}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1vh' }}>
      <span style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#fff' }}>&gt;&gt;&gt;&nbsp;&nbsp;</span>
      {text1 && <strong style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#00ffff',fontWeight:"normal" }}>{text1}</strong>}
      {count && <span style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#fff' }}>&nbsp;<Counter counts={count} time={1000}/>&nbsp;</span>}
      {text2 && <strong style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#00ffff',fontWeight:"normal" }}>{text2}</strong>}
    </div>
  );
};


export default Combination5;
