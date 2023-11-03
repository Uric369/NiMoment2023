import React from 'react';
import Counter from './Counter'; // adjust the path according to your project structure

const Combination3 = ({ text1, count, text2 }) => {
    return (
        <div>
            <h1 style={{ fontSize: '4vh' }}>{text1}</h1>
            <br/>
            <span style={{ fontSize: '8vh', fontWeight: 'bold' }}>
                <Counter counts={count}/>
            </span>
            <span style={{ fontSize: '4vh' }}>{text2}</span>
        </div>
    );
}

export default Combination3;
