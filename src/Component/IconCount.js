import React from 'react';

const IconCount = ({ icon, count, height }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom:"10px" }}>
            <img src={icon} alt="Icon" style={{ marginRight: '10px', height:`${height}vh` }} />
            <span style={{ fontSize: '4vh', verticalAlign: 'bottom', color:"#fff" }}> × {count}</span>
        </div>
    );
}

export default IconCount;
