import React from 'react';

const Combination = ({ icon, text1, text2, count }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '10px' }}>
      {icon && <img src={icon} alt="Icon" style={{ marginRight: '10px', width: '40%' }} />}
      {text1 && <span style={{ fontSize: '40px', verticalAlign: 'bottom', color: '#fff' }}>{text1}</span>}
      {count && <strong style={{ fontSize: '40px', verticalAlign: 'bottom', color: '#fff' }}>{count}</strong>}
      {text2 && <span style={{ fontSize: '40px', verticalAlign: 'bottom', color: '#fff' }}>{text2}</span>}
    </div>
  );
};

export default Combination;
