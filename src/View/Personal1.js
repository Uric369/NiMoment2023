import React, { useRef, useEffect } from "react";
// import { useState } from "react";
import Combination from "../Component/Combination";
// import icon from "../img/paraScroll_demo/ICON.png";
import astronaut1 from "../img/personal1/cat1.png";
import astronaut2 from "../img/personal1/cat2.png";
import star from "../img/personal1/Star.png";
import magicDevice from "../img/personal1/magicDevice.png";
import zhiban from "../img/icon/zhiban.png";
import baoxiu from "../img/icon/baoxiu.png";
import jingzhan from "../img/icon/jingzhan.png";
import updoor from "../img/personal1/upDoor.png";
import ap from "../img/icon/AP.png";
import mac from "../img/icon/Mac.png";
import ip from "../img/icon/IP.png";
import call from "../img/icon/call.png";
// import shangmen from "../img/icon/call.png";
import star_mid from "../img/personal1/Star_Mid.png";
import star_big from "../img/personal1/Star_Big.png";
import logo from "../img/personal1/Logo.png";
import "../css/Personal1.css";
import Rotator from "../Component/Rotator";
import Glitter from "../Component/Glitter";
import DashedLines from "../Component/DashedLines";
import wifi from "../img/personal1/Wifi.png";
// import cat1 from "../img/testGradient/Meow1.png";
// import cat2 from "../img/testGradient/Meow2.png";
// import ImageTransition from "../Component/ImageTransition";
// import { history } from "../utils/history";
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import html2canvas from "html2canvas";
import { dataFormatter, padNimoerId } from "../utils/dataFormat";
import {
  nimoerApi,
  personalStatsOfficeApi,
  personalStatsGeneralApi,
  getRequest,
} from "../apis";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextReminder from "../img/personal1/cat_next.png";
import saveButton from "../img/icon/saveButton.png";
import { useIsMobile } from "../hooks";

const defaultGeneralStats = {
  office: 0,
  field: 0,
  numNewProgresses: 0,
  numApDebugs: 0,
};

function formatGeneralStats(generalStats) {
  return dataFormatter(
    generalStats,
    "count",
    ["office", "field", "numNewProgresses", "numApDebugs"],
    [
      { icon: zhiban, text1: "值班", text2: "次" },
      { icon: baoxiu, text1: "出报修", text2: "次" },
      { icon: jingzhan, text1: "留下进展", text2: "条" },
      { icon: ap, text1: "查看用户侧最差 AP ", text2: "个" },
    ]
  );
}

function formatOfficeStats(officeStats) {
  return dataFormatter(
    officeStats,
    "count",
    ["numIncomingCalls", "numIpAllocs", "numMacUpdates", "numVisitors"],
    [
      { icon: call, text1: "接到电话", text2: "个" },
      { icon: ip, text1: "分配 IP ", text2: "个" },
      { icon: mac, text1: "更换 MAC ", text2: "个" },
      { icon: updoor, text1: "遇到用户上门", text2: "次" },
    ]
  );
}

const defaultNimoer = {
  id: 0,
  name: "",
};

const dashedLine = [
  { x: 43, y: 21 },
  { x: 53, y: 15 },
  { x: 65, y: 25 },
  { x: 85, y: 70 },
];

const Personal1 = () => {
  const [isMobile] = useIsMobile()

  const rotatingObjects = isMobile
    ? [
        { img: star_mid, width: 13, x: 30, y: 50, speed: 10 },
        { img: star_big, width: 18, x: 80, y: 5, speed: 20 },
        { img: star, width: 10, x: 23, y: 64, speed: 15 },
      ]
    : [
        { img: star_mid, width: 10, x: 60, y: 15, speed: 10 },
        { img: star_big, width: 15, x: 80, y: 60, speed: 20 },
        { img: star, width: 5, x: 76, y: 35, speed: 15 },
      ];

  const glitteringObjects = isMobile
    ? [
        { img: star_mid, width: 15, x: 75, y: 50, speed: 3 },
        { img: star_mid, width: 10, x: 40, y: 5, speed: 5 },
        // {img: star_mid, width: 15, x: 80, y:15, speed:2},
        { img: wifi, width: 14, x: 65, y: 50, speed: 1 },
      ]
    : [
        { img: star_mid, width: 5, x: 50, y: 10, speed: 3 },
        { img: star_mid, width: 5, x: 40, y: 15, speed: 5 },
        { img: star_mid, width: 3, x: 90, y: 50, speed: 2 },
        { img: wifi, width: 7, x: 78, y: 70, speed: 1 },
      ];

  const staticObjects = isMobile
    ? [
        { img: astronaut1, width: 35, x: 65, y: 30 },
        { img: astronaut2, width: 40, x: 3, y: 63 },
        { img: magicDevice, width: 14, x: 69, y: 43 },
      ]
    : [
        { img: astronaut1, width: 17, x: 80, y: 5 },
        { img: astronaut2, width: 18, x: 68, y: 30 },
        { img: magicDevice, width: 10, x: 79, y: 34 },
      ];

  const nimoerInfo = useSelector((state) => state.nimoer.nimoerInfo);
  const officeStats = useSelector((state) => state.stats.personalStats.office);
  const generalStats = useSelector(
    (state) => state.stats.personalStats.general
  );

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
    navigate("/Personal2");
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div className="personal1_container" ref={containerRef}>
        {!isMobile && <DashedLines points={dashedLine} color="yellow" />}
        <div className="title_container">
          <div className="header">
            <img
              style={{ width: isMobile ? "20vw" : "6vw" }}
              src={logo}
              alt="logo"
            />
            <h1>工作情况统计</h1>
          </div>
          <div className="divider" />
        </div>
        <div className="text_container">
          <h2>
            Nimoer #{padNimoerId(nimoerInfo.id) + " " + nimoerInfo.name}，
            在2023年度， 你.......{" "}
          </h2>
          {formatGeneralStats(generalStats).map((item, index) => (
            <Combination
              key={index}
              icon={item.icon}
              text1={item.text1}
              text2={item.text2}
              count={item.count}
              sequence={"left"}
            />
          ))}

          <div className="content2">
            <h2> 2023年你所在的所有值班班次一共 </h2>
            {formatOfficeStats(officeStats).map((item, index) => (
              <Combination
                key={index}
                icon={item.icon}
                text1={item.text1}
                text2={item.text2}
                count={item.count}
                sequence={"right"}
              />
            ))}
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
          <img
            src={nextReminder}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <img src={saveButton} onClick={onClick} className="savebutton" />
    </div>
  );
};

export default Personal1;
