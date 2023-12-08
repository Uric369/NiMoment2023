import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "../css/Achievement.css";
import BG_bg from "../img/achievement/BG_bg.png";
import BG_cat from "../img/achievement/BG_cat.png";
import BG_text from "../img/achievement/BG_text.png";
import thief_bg from "../img/achievement/work_bg.png";
import thief_cat from "../img/achievement/work_cat.png";
import thief_text from "../img/achievement/work_text.png";
import teacher_bg from "../img/achievement/teacher_bg.png";
import teacher_cat from "../img/achievement/teacher_cat.png";
import teacher_text from "../img/achievement/teacher_text.png";
import xpy_bg from "../img/achievement/xpy_bg.png";
import xpy_cat from "../img/achievement/xpy_cat.png";
import xpy_text from "../img/achievement/xpy_text.png";
import wiki_bg from "../img/achievement/wiki_bg.png";
import wiki_cat from "../img/achievement/wiki_cat.png";
import wiki_text from "../img/achievement/wiki_text.png";
import ap_bg from "../img/achievement/AP_bg.png";
import ap_cat from "../img/achievement/AP_cat.png";
import ap_text from "../img/achievement/AP_text.png";
import profile from "../img/achievement/profile.png";
import html2canvas from "html2canvas";
import achiveIcon from "../img/achievement/achieve_icon.png";
import profileHistory from "../img/achievement/profile_history.png";
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import { padNimoerId } from "../utils/dataFormat";
import { achievementApi, getBlob, getRequest, wordcloudApi } from "../apis";
import { formatDateTimeHHMMSS } from "../utils/dataFormat";
import Card from "../Component/Card";

const achievements = [
  {
    bg: BG_bg,
    cat: BG_cat,
    text: BG_text,
  },
  {
    bg: teacher_bg,
    cat: teacher_cat,
    text: teacher_text,
  },
  {
    bg: xpy_bg,
    cat: xpy_cat,
    text: xpy_text,
  },
  {
    bg: thief_bg,
    cat: thief_cat,
    text: thief_text,
  },
  {
    bg: wiki_bg,
    cat: wiki_cat,
    text: wiki_text,
  },
  {
    bg: ap_bg,
    cat: ap_cat,
    text: ap_text,
  },
];

const achvmtInfo = [
  {
    text1: "你曾在",
    info: "2023.11.01 14:09:59",
    text2: "极限签到",
  },
  {
    text1: "2023年，你通过了",
    info: 10,
    text2: "个培训任务",
  },
  {
    text1: "你完成了这个学期所有的培训任务！",
    info: null,
    text2: null,
  },
  {
    text1: "你曾在",
    info: "2023.11.01 00:00:00",
    text2: "留下进展",
  },
  {
    text1: "2023年，你修改了",
    info: 10,
    text2: "次wiki",
  },
  {
    text1: "2023年，你拿下了",
    info: 10,
    text2: "个用户侧最差AP",
  },
];

export default function Achievement(props) {
  const nimoerInfo = useSelector((state) => state.nimoer.nimoerInfo);
  const isRetired = useSelector((state) => state.nimoer.isRetired);
  const signInDate = useSelector((state) => state.nimoer.signInOut.signIn);
  const [achievementList, setAchievementList] = useState([]);
  const [achievementInfo, setAchievementDetails] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const imageRef = useRef();

  function setAchievementInfo(achievementList, achievementDetails) {
    let updatedDetails = Array.from(achievementDetails);
    const keys = [
      [0, "signIn"],
      [1, "taskNum"],
      [3, "strikeBreaker"],
      [4, "wikiEditor"],
      [5, "apKiller"],
    ];
    for (const [id, key] of keys) {
      if (key == "signIn" || key == "strikeBreaker") {
        achievementDetails[key] = formatDateTimeHHMMSS(achievementDetails[key]);
      }
      updatedDetails[id] = achievementDetails[key];
    }

    setAchievementDetails(updatedDetails);
  }

  useEffect(() => {
    getRequest(achievementApi, (res) => {
      setAchievementList(res.data.achievementList);
      setAchievementInfo(res.data.achievementList, res.data.info);
    });
    getBlob(wordcloudApi, (res) => {
      const url = URL.createObjectURL(res);
      imageRef.current.src = url;
    });
  }, []);

  const containerRef = useRef();
  //   const { h } = props;
  const handleProfileHistory = () => {
    // to de implemented
  };
  const onClick = () => {
    html2canvas(containerRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "page.png");
      });
    });
  };

  return (
    <div>
      <div className="savebutton">
        <button onClick={onClick}>保存为图片</button>
      </div>

      <div className="achievement" ref={containerRef}>
        <div className="border" />
        <div className="achievement-text">
          <img style={{ height: "10vh" }} src={achiveIcon} />
          成就
        </div>
        <div className="id_card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img style={{ height: "25vh" }} src={profile} />
            <h style={{ fontWeight: "bold", fontSize: "3vh" }}>身份认证</h>
            <h style={{ fontSize: "2vh" }}>
              #Nimoer {padNimoerId(nimoerInfo.id)} {nimoerInfo.name}
            </h>
            <h style={{ fontSize: "2vh" }}>
              状态：{isRetired ? "退休" : "在职"} 入职时间：{signInDate}
            </h>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: "10vh" }}
              src={profileHistory}
              onClick={handleProfileHistory}
            />
            <h style={{ fontSize: "2vh" }}>查看NIMO后台</h>
            <h style={{ fontSize: "2vh" }}>历史头像</h>
          </div>
          <h style={{ marginLeft: "10vw", fontSize: "4vh" }}>xxx群词云</h>
        </div>
        <img className="wordCloud" ref={imageRef} />
        <div className="shell">
          {achievementList.map((index) => (
            <div>
              <div className="card" key={index}>
                <div className="wrapper">
                  <img
                    src={achievements[index].bg}
                    alt=""
                    className="cover-image"
                  />
                </div>
                <img src={achievements[index].text} alt="" className="title" />
                <img
                  src={achievements[index].cat}
                  alt=""
                  className="character"
                />
              </div>
              {index != 2 && (
                <div className="card-subtitle">
                  {achvmtInfo[index].text1 +
                    achievementInfo[index] +
                    achvmtInfo[index].text2}
                </div>
              )}
              {index === 2 && (
                <div className="card-subtitle">{achvmtInfo[index].text1}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
