import React from "react";
import { useRef } from "react";
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
import profile from "../img/achievement/profile.png";
import wordCloud from "../img/achievement/wordcloud.png";
import html2canvas from 'html2canvas';
import achiveIcon from "../img/achievement/achieve_icon.png";
import profileHistory from "../img/achievement/profile_history.png";
import { saveAs } from 'file-saver';
import "../css/SaveButton.css";
import Card from "../Component/Card";

const userInfo = {
  id: 378,
  name:"胡彤",
  hireDate:"2023.10.01",
}

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
    bg: BG_bg,
    cat: BG_cat,
    text: BG_text,
  }
]

const achievementList = [0, 1, 2]

export default function Achievement(props) {

  const containerRef = useRef();
//   const { h } = props;
const handleProfileHistory =()=> {
  // to de implemented
}
const onClick = () => {
  html2canvas(containerRef.current).then((canvas) => {
    canvas.toBlob((blob) => {
      saveAs(blob, 'page.png');
    });
  });
};


  return (
    <div>
<div className="savebutton">
  <button onClick={onClick}>保存为图片</button>
</div>

    <div className="achievement" ref={containerRef}>
      
      <div className="border"/>
     <div className="achievement-text">
      <img style={{height:"10vh"}} src={achiveIcon}/>
      成就
      </div>
     <div className="id_card" >
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
     <img style={{height:"25vh"}}  src={profile}/>
     <h style={{fontWeight:"bold", fontSize:"3vh"}}>身份认证</h>
     <h style={{fontSize:"2vh"}}>#Nimoer {userInfo.id} {userInfo.name}</h>
     <h style={{fontSize:"2vh"}}>状态：在职  入职时间：{userInfo.hireDate}</h>
     </div>
     <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
     <img style={{height:"10vh"}}  src={profileHistory} onClick={handleProfileHistory}/>
     <h style={{fontSize:"2vh"}}>查看NIMO后台</h>
     <h style={{fontSize:"2vh"}}>历史头像</h>
     </div>
     <h style={{marginLeft:"10vw", fontSize:"4vh"}}>xxx群词云</h>
     </div>
     <img className="wordCloud" src={wordCloud}/>
    <div className="shell">
    {achievementList.map((index) => (
      <div className="card" key={index}>
        <div className="wrapper">
          <img src={achievements[index].bg} alt="" className="cover-image" />
        </div>
        <img src={achievements[index].text} alt="" className="title" />
        <img src={achievements[index].cat} alt="" className="character" />
      </div>
    ))}

    </div>
    </div>
    </div>
  );
}
