import React from 'react';

const IconTitle = ({ icon, text}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '1vh' , marginTop: '2vh'}}>
      {icon && <img src={icon} alt="Icon" style={{ marginRight: '0.5vw', width: '2vw' }} />}
      {text && <span style={{ fontSize: '3.5vh', fontWeight:'bold', verticalAlign: 'bottom', color: '#fff' }}> &nbsp;{text}</span>}
    </div>
  );
};


export default IconTitle;
