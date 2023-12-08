import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import DayNightToggleButton from "../Component/DayNightToggleButton";
import "../css/Personal2Special.css";
import BG1 from "../img/personal2/BG1.png";
import BG2 from "../img/personal2/BG2.png";
import logo from "../img/personal1/Logo.png";
import titleIcon from "../img/personal2/Icon.png";
import IconTitle from "../Component/IconTitle";
import icon from "../img/personal1/icon.png";
import IconCount from "../Component/IconCount";
import Combination2 from "../Component/Combination2";
import ImageTransition from "../Component/ImageTransition";
import cat1 from "../img/personal2/Meow1.png";
import cat2 from "../img/personal2/Meow2.png";
import { history } from "../utils/history";
import Combination4 from "../Component/Combination4";
import Combination5 from "../Component/Combination5";
import profileImg from "../img/Personal2Special/profile.png";
import baoxiuBG from "../img/Personal2Special/cat1.png";
import renBG from "../img/Personal2Special/cat2.png";
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import html2canvas from "html2canvas";

import { dataFormatter } from "../utils/dataFormat";
import {
  nimoerApi,
  personalStatsFieldApi,
  personalStatsOfficeApi,
  personalStatsGeneralApi,
  getRequest,
} from "../apis";


const isMobile = window.matchMedia("(max-width: 768px)").matches;

function formatProfileInfo(profile) {
  return dataFormatter(
    profile,
    "content",
    ["name", "checkinDate", "retirementDate"],
    [{ item: "身份认证" }, { item: "入职时间" }, { item: "退休时间" }]
  );
}

function formatPersonalConsumables(consumables) {
  return dataFormatter(
    consumables,
    "count",
    ["numKeystonJacks", "numConnectors", "numPlates"],
    [{ icon: icon }, { icon: icon }, { icon: icon }]
  );
}

function formatStatistics(stats) {
  return dataFormatter(
    stats,
    "count",
    [
      "office",
      "field",
      "numNewProgresses",
      "numIncomingCalls",
      "numIpAllocs",
      "numMacUpdates",
    ],
    [
      { text1: "值班", text2: "次" },
      { text1: "出报修", text2: "次" },
      { text1: "留下进展记录", text2: "条" },
      { text1: "你所在的值班共接到电话", text2: "个" },
      { text1: "你所在的值班共分配 IP ", text2: "个" },
      { text1: "你所在的值班共更换 MAC ", text2: "个" },
    ]
  );
}

const Personal2Special = () => {
  const containerRef = useRef();
  const handleRouter = () => {
    history.push("/Achievement");
    window.location.reload();
  };

  const onClick = () => {
    html2canvas(containerRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "page.png");
      });
    });
  };
  const profileInfo = useSelector((state) => {
    return {
      name: state.nimoer.nimoerInfo.name,
      checkinDate: state.nimoer.signInOut.signIn,
      retirementDate: state.nimoer.signInOut.signOut,
    };
  });
  const consumables = useSelector(
    (state) => state.stats.personalStats.consumables
  );
  const statistics = useSelector((state) => {
    return {
      ...state.stats.personalStats.general,
      ...state.stats.personalStats.office,
    };
  });
  const hifrequencies = useSelector(
    (state) => state.stats.personalStats.hiFrequencies
  );

  return (
    <div
      className="personal2special_container"
      style={{
        backgroundImage: `url(${BG1})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
      ref={containerRef}
    >
      <div className="title_container">
        <div className="header">
          <img
            style={{ width: isMobile ? "12vw" : "6vw" }}
            src={logo}
            alt="logo"
          />
          <h1>NIMO 来信 · 职业生涯回顾</h1>
        </div>
      </div>

      <div className="outer_container">
        <div className="inner_container" style={{ display: "flex" }}>
          <img
            style={{
              width: isMobile ? "12vh" : "25vh",
              height: isMobile ? "13vh" : "27vh",
              marginRight: "2vw",
            }}
            src={profileImg}
          />
          <div>
            <p>&gt;&gt;&gt; </p>
            {formatProfileInfo(profileInfo).map((info, index) => (
              <Combination4
                key={index}
                item={info.item}
                content={info.content}
              />
            ))}
          </div>
          {!isMobile && (
            <div style={{ marginLeft: "10vw" }}>
              <IconTitle icon={titleIcon} text={"累计霍霍器材"} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {formatPersonalConsumables(consumables)
                  .slice(0, 2)
                  .map((data, index) => (
                    <div style={{ marginRight: "2vw" }}>
                      <IconCount
                        key={index}
                        icon={data.icon}
                        count={data.count}
                        height={4}
                      />
                    </div>
                  ))}
              </div>
              <div>
                <IconCount
                  icon={formatPersonalConsumables(consumables)[2].icon}
                  count={formatPersonalConsumables(consumables)[2].count}
                  height={4}
                />
              </div>
            </div>
          )}

          <div className="inner_bottom_container">
            <div>
              <p style={{ fontSize: isMobile ? "1.5vh" : "3vh" }}>
                &gt;&gt;&gt; NIMO@localhost: loading log......
              </p>
              <div style={{ lineHeight: "1.7" }}>
                {formatStatistics(statistics).map((stat, index) => (
                  <Combination5
                    key={index}
                    text1={stat.text1}
                    count={stat.count}
                    text2={stat.text2}
                  />
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  position: "absolute",
                  top: isMobile ? "33vh" : "10vh",
                  left: isMobile ? "0vw" : "30vw",
                }}
              >
                <IconTitle
                  icon={titleIcon}
                  text={"报修最常去的楼栋"}
                  isMargin={false}
                />
                <img
                  style={{ width: isMobile ? "80vw" : "40vw" }}
                  src={baoxiuBG}
                />
                <h
                  style={{
                    position: "absolute",
                    top: isMobile ? "6vh" : "12vh",
                    left: isMobile ? "9vh" : "9vw",
                    fontSize: isMobile ? "2vh" : "4vh",
                  }}
                >
                  {hifrequencies.building}
                </h>
              </div>

              <div
                style={{
                  position: "absolute",
                  top: isMobile ? "43vh" : "32vh",
                  left: isMobile ? "0vw" : "30vw",
                }}
              >
                <IconTitle
                  icon={titleIcon}
                  text={"报修最常一起去的人"}
                  isMargin={false}
                />
                <img
                  style={{ width: isMobile ? "80vw" : "30vw" }}
                  src={renBG}
                />
                <h
                  style={{
                    position: "absolute",
                    top: isMobile ? "9vh" : "14vh",
                    left: isMobile ? "10vh" : "7vw",
                    fontSize: isMobile ? "2vh" : "4vh",
                  }}
                >
                  {hifrequencies.colleague}
                </h>
              </div>
              {isMobile && (
                <div style={{ position: "absolute", top: "54vh", left: "0vw" }}>
                  <IconTitle icon={titleIcon} text={"累计霍霍器材"} />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    {formatPersonalConsumables(consumables)
                      .slice(0, 2)
                      .map((data, index) => (
                        <div style={{ marginRight: "2vw" }}>
                          <IconCount
                            key={index}
                            icon={data.icon}
                            count={data.count}
                            height={10}
                          />
                        </div>
                      ))}
                  </div>
                  <div>
                    <IconCount
                      icon={formatPersonalConsumables(consumables)[2].icon}
                      count={formatPersonalConsumables(consumables)[2].count}
                      height={10}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cat_container" onClick={handleRouter}>
        <ImageTransition cat1={cat1} cat2={cat2} size={20} />
      </div>
      <div className="savebutton">
        <button onClick={onClick}>保存为图片</button>
      </div>
    </div>
  );
};

export default Personal2Special;
