import React from 'react';
import team from "../img/EasterEggs/team_landscape_png.png";
import team_mobile from "../img/EasterEggs/team_potrait_png.png";
import "../css/EasterEggs.css";

const EasterEggs = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <div className='eastereggs_container'>
      <img
        src={isMobile? team_mobile:team} // 这里替换为你的图片地址
        alt="Easter Egg"
        className='image_style'
      />
    </div>
  );
};

export default EasterEggs;
