import React from 'react';
import Counter from './Counter';

const Combination2 = ({ text, time}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1vh' }}>
      {text && <span style={{ fontSize: '3vh', verticalAlign: 'bottom', color: '#fff' }}> &nbsp;{text}</span>}
      {time && <strong style={{ fontSize: '4vh', verticalAlign: 'bottom', color: '#fff' }}>&nbsp;{time}&nbsp;</strong>}
    </div>
  );
};


export default Combination2;
