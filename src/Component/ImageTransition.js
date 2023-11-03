import React, { useState, useEffect } from 'react';
import "../css/ImageTransition.css"

const ImageTransition = ({ cat1, cat2, size }) => {
  const [showCat1, setShowCat1] = useState(true);

  // 设置图片切换的间隔时间，这里设为2秒（和动画时间一致）
  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCat1(prevShowCat1 => !prevShowCat1);
    }, 2000);
    
    return () => {
      clearInterval(intervalId);  // 清除interval来防止内存泄漏
    };
  }, []);

  return (
    <div>
      <img 
        className={`squish ${showCat1 ? 'visible' : 'hidden'}`} 
        style={{width: `${size}vw`}}
        src={cat1} 
        alt="cat1"
      />
      <img 
        className={`squish ${!showCat1 ? 'visible' : 'hidden'}`}
        style={{width: `${size}vw`}}
        src={cat2} 
        alt="cat2"
      />
    </div>
  );
};

export default ImageTransition;
