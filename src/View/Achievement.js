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
import ap_bg from "../img/achievement/AP_bg.png";
import ap_cat from "../img/achievement/AP_cat.png";
import ap_text from "../img/achievement/AP_text.png";
import xpy_bg from "../img/achievement/xpy_bg.png";
import xpy_cat from "../img/achievement/xpy_cat.png";
import xpy_text from "../img/achievement/xpy_text.png";
import wiki_bg from "../img/achievement/wiki_bg.png";
import wiki_cat from "../img/achievement/wiki_cat.png";
import wiki_text from "../img/achievement/wiki_text.png";
import profile from "../img/achievement/profile.png";
import html2canvas from "html2canvas";
import achiveIcon from "../img/achievement/achieve_icon.png";
// import profileHistory from "../img/achievement/profile_history.png";
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import { padNimoerId } from "../utils/dataFormat";
import { achievementApi, getBlob, getRequest, wordcloudApi } from "../apis";
import { formatDateTimeHHMMSS } from "../utils/dataFormat";
// import Card from "../Component/Card";
import saveButton from "../img/icon/saveButton.png";
// import wordcloud from "../img/achievement/wordcloud.png";
import notice from "../img/achievement/notice.png";
import notice_mobile from "../img/achievement/notice_potrait.png";
import nextReminder from "../img/personal1/cat_next.png";
import { useNavigate } from "react-router-dom";
import next from "../img/personal2/next.PNG";
import { useIsMobile } from "../hooks";


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
  const [isMobile] = useIsMobile();
  const navigate = useNavigate();

  const nimoerInfo = useSelector((state) => state.nimoer.nimoerInfo);
  const isRetired = useSelector((state) => state.nimoer.isRetired);
  const signInDate = useSelector((state) => state.nimoer.signInOut.signIn);
  const [achievementList, setAchievementList] = useState([1]);
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
      // const test=[1]
      // setAchievementList(test);
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

  const handleClick = () => {
    navigate("/EasterEggs");
  };

  return (
    <div style={{position: "relative", overflow:"hidden"}}>
      
      <img src={saveButton} onClick={onClick} className="savebutton"/>
      {achievementList.length !== 0 && !isMobile && <img src={notice} className="notice"/>}
      {achievementList.length !== 0 && isMobile && <img src={notice_mobile} className="notice"/>}
      <div className="achievement" ref={containerRef}>
        <div className="border" />
        <div className="achievement-text">
          <img style={{ height: isMobile?"5vh":"10vh" }} src={achiveIcon} />
          <span>年度成就</span>
        </div>
        <div className="id_card">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img style={{ height: isMobile?"10vh":"25vh" }} src={profile} />
            <h style={{ fontWeight: "bold", fontSize: "3vh" }}>身份认证</h>
            <h style={{ fontSize: "2vh" }}>
              #Nimoer {padNimoerId(nimoerInfo.id)} {nimoerInfo.name}
            </h>
            <h style={{ fontSize: "2vh" }}>
              状态：{isRetired ? "退休" : "在职"}
            </h>
            <h style={{ fontSize: "2vh" }}>
              入职时间：{signInDate}
            </h>
            {isRetired && <h style={{ fontSize: "2vh" }}>
              退休时间：{signInDate}
            </h>}
          </div>
          {/* <div
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
          </div> */}
          
        </div>
        <div  className="wordCloud" >
        <h4><span style={{writingMode: "initial", transform: "rotate(90deg)", marginBottom: "0.5em", lineHeight: "1em"}}>QQ</span>群词云</h4>
        <img style={{height:isMobile?"15vh":"35vh"}} ref={imageRef} />
        {/* <img style={{height:"35vh"}} src={wordcloud} /> */}
        </div>
        
        {achievementList.length === 0 ? (
           <div className="no-achievements">
           啊偶，今年没有获得成就，{isMobile &&<br/>} 明年加油
         </div>
       ) : (
        <div>
          {isMobile && achievementList.length > 2 && <h6> 左右滑动查看成就</h6>}
        <div className="shell">
          
          {achievementList.map((index) => (
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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
        )}
        
        {!isMobile && <div onClick={handleClick} className="next_reminder">
          <img src={nextReminder} style={{ width:"100%", height:"100%", objectFit: "contain", cursor: "pointer" }}/>
        </div>}
        {isMobile && <div onClick={handleClick} className="next_reminder">
          <img src={next} style={{ width:"100%", height:"100%", objectFit: "contain", cursor: "pointer" }}/>
        </div>}
      </div>

    </div>
  );
}
