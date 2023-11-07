import React from "react";
import "../css/Achievement.css";
import A1 from "../img/image/01.png";
import Atext from "../img/image/text-1.png";
import A2 from "../img/image/02.png";
import B3 from "../img/image/03.png";
import Btext from "../img/image/text-2.png";
import B4 from "../img/image/04.png";
import C1 from "../img/image/12.PNG";
import Ctext from "../img/image/11.PNG";
import C2 from "../img/image/13.PNG";
import sub from "../img/achievement/achieve_back.png";
import profile from "../img/achievement/profile.png";
import wordCloud from "../img/achievement/wordcloud.png";
import achiveIcon from "../img/achievement/achieve_icon.png";
import profileHistory from "../img/achievement/profile_history.png";

const userInfo = {
  id: 378,
  name:"胡彤",
  hireDate:"2023.10.01",
}

export default function Achievement(props) {
//   const { h } = props;
const handleProfileHistory =()=> {
  // to de implemented
}

  return (
    <div className="achievement">
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
     </div>
     <img className="wordCloud" src={wordCloud}/>
    <div className="shell">
    <div className="card">
        <div className="wrapper">
          <img src={sub} alt="" className="cover-image" />
        </div>
        <img src={Ctext} alt="" className="title" />
        <img src={C2} alt="" className="character" />
      </div>

      <div className="card">
        <div className="wrapper">
          <img src={sub} alt="" className="cover-image" />
        </div>
        <img src={Ctext} alt="" className="title" />
        <img src={C2} alt="" className="character" />
      </div>

      <div className="card">
        <div className="wrapper">
          <img src={sub} alt="" className="cover-image" />
        </div>
        <img src={Ctext} alt="" className="title" />
        <img src={C2} alt="" className="character" />
      </div>

    </div>
    </div>
  );
}
