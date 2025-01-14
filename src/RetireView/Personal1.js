import React, { useRef } from "react";
import star_mid from "../img/personal1/Star_Mid.png";
import star_big from "../img/personal1/Star_Big.png";
import logo from "../img/personal1/Logo.png";
import "../css/Personal1Special.css";
import Rotator from "../Component/Rotator";
import Glitter from "../Component/Glitter";
import DashedLines from "../Component/DashedLines";
import wifi from "../img/personal1/Wifi.png";
import astronaut1 from "../img/personal1/cat1.png";
import astronaut2 from "../img/personal1/cat2.png";
import star from "../img/personal1/Star.png";
import magicDevice from "../img/personal1/magicDevice.png";
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import nextReminder from "../img/personal1/cat_next.png";
import saveButton from "../img/icon/saveButton.png";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks";


const Personal1Special = () => {
const [isMobile] = useIsMobile();

const rotatingObjects = isMobile
  ? [
      // {img: star_mid, width: 13, x: 30, y:50, speed:10},
      { img: star_big, width: 18, x: 80, y: 5, speed: 20 },
      { img: star, width: 10, x: 23, y: 78, speed: 15 },
    ]
  : [
      { img: star_mid, width: 10, x: 60, y: 15, speed: 10 },
      { img: star_big, width: 15, x: 80, y: 60, speed: 20 },
      { img: star, width: 5, x: 76, y: 35, speed: 15 },
    ];

const glitteringObjects = isMobile
  ? [
      { img: star_mid, width: 15, x: 75, y: 55, speed: 3 },
      { img: star_mid, width: 10, x: 40, y: 5, speed: 5 },
      // {img: star_mid, width: 15, x: 80, y:15, speed:2},
      { img: wifi, width: 14, x: 65, y: 55, speed: 1 },
    ]
  : [
      { img: star_mid, width: 5, x: 50, y: 10, speed: 3 },
      { img: star_mid, width: 5, x: 40, y: 15, speed: 5 },
      { img: star_mid, width: 3, x: 90, y: 50, speed: 2 },
      { img: wifi, width: 7, x: 78, y: 70, speed: 1 },
    ];

const staticObjects = isMobile
  ? [
      { img: astronaut1, width: 35, x: 65, y: 20 },
      { img: astronaut2, width: 40, x: 3, y: 76 },
      { img: magicDevice, width: 14, x: 69, y: 33 },
    ]
  : [
      { img: astronaut1, width: 17, x: 80, y: 5 },
      { img: astronaut2, width: 18, x: 68, y: 30 },
      { img: magicDevice, width: 10, x: 79, y: 34 },
    ];

const dashedLine = [
  { x: 43, y: 21 },
  { x: 53, y: 15 },
  { x: 65, y: 25 },
  { x: 85, y: 70 },
];

  const lastDay = useSelector((state) => state.nimoer.signInOut.signOut);
  // const lastDay = useSelector((state) => 1);
  const navigate = useNavigate();
  const containerRef = useRef();
  const onClick = () => {
    html2canvas(containerRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "page.png");
      });
    });
  };

  
const handleClick = () => {
  navigate("/Personal2Special");
};

  return (
    <div style={{position: "relative", overflow:"hidden"}}>
      <div className="personal1_container" ref={containerRef}>
        {!isMobile && <DashedLines points={dashedLine} color="yellow" />}
        <div className="title_container_special">
          <div className="header">
            <img
              style={{ width: isMobile ? "20vw" : "6vw" }}
              src={logo}
              alt="logo"
            />
            <h1>NIMO 来信</h1>
          </div>
          <div className="divider" />
        </div>
        <div className="text_container">
          <h4>欢迎回家！</h4>
          <h3>NIMO 23岁啦！ </h3>
          <h5>
            因为你的热爱与努力，nimo才能走到今天。
            <br /> 还记得第⼀次上班吗？那时你第一次来到办公室。
            <br />
            电话座机的铃声，还会勾起你紧张的情绪吗？
            <br />
            官网的后台，还是你记忆中的样子吗？
          </h5>

          <div className="content3">
            <h5
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "3vh",
              }}
            >
              {" "}
              {lastDay}
              <br/>
            </h5>
            {isMobile && <h style={{color:"white", lineHeight:2}}>是你最后一天上班的日子,<br/>签离的那一刻，想必百感交集吧...</h>}
            {!isMobile && <h6>是你最后一天上班的日子,<br/>签离的那一刻，想必百感交集吧...</h6>}
          </div>
        </div>

        <div>
          {rotatingObjects.map((star, index) => (
            <Rotator
              key={index}
              src={star.img} // 这里假设 star_mid 是一个已定义的图像源
              width={star.width}
              height={star.height}
              x={star.x}
              y={star.y}
              speed={star.speed}
            />
          ))}
        </div>

        <div>
          {glitteringObjects.map((star, index) => (
            <Glitter
              key={index}
              img={star.img} // 这里假设 star_mid 是一个已定义的图像源
              width={star.width}
              height={star.height}
              x={star.x}
              y={star.y}
              speed={star.speed}
            />
          ))}
        </div>

        <div>
          {staticObjects.map((object, index) => (
            <img
              key={index}
              src={object.img}
              alt={`Astronaut ${index + 1}`}
              style={{
                width: `${object.width}vw`, // Width in viewport width (vw)
                position: "absolute", // Use absolute positioning
                left: `${object.x}vw`, // X coordinate in viewport width (vw)
                top: `${object.y}vh`, // Y coordinate in viewport height (vh)
              }}
            />
          ))}
        </div>
        <div onClick={handleClick} className="nextReminder">
  <img src={nextReminder} style={{ width:"100%", height:"100%", objectFit: "contain", cursor: "pointer" }}/>
</div>
      </div>
      <img src={saveButton} onClick={onClick} className="savebutton"/>
    </div>
  );
};

export default Personal1Special;
