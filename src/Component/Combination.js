import React from 'react';
import Counter from './Counter';

const Combination = ({ icon, text1, text2, count , sequence}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1vh' }}>
      {sequence === "left" && icon && <img src={icon} alt="Icon" style={{ marginRight: '10px', width: '4vw' }} />}
      {text1 && <span style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#fff' }}> &nbsp;{text1}</span>}
      {count && <strong style={{ fontSize: '4vh', verticalAlign: 'bottom', color: '#fff' }}>&nbsp;<Counter counts={count} time={1000}/>&nbsp;</strong>}
      {text2 && <span style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#fff' }}>{text2} &nbsp;</span>}
      {sequence === "right" && icon && <img src={icon} alt="Icon" style={{ marginRight: '10px', width: '4vw' }} />}
    </div>
  );
};


export default Combination;
