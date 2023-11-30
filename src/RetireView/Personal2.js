import { useState, useRef } from "react";
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
import { saveAs } from 'file-saver';
import "../css/SaveButton.css";
import html2canvas from 'html2canvas';


const common = {
    building: "D23",
    colleague: "Meow",
}

const consumables = [
    { icon: icon, count: 500 },
    { icon: icon, count: 300 },
    { icon: icon, count: 200 }
  ];

const profileInfo = [
  {item: "身份认证", content: "在职网管 · 胡彤"},
  {item: "入职时间", content: "2023.10.01"},
  {item: "退休时间", content: "2023.10.01"},
];

const statistics = [
  {text1:"值班", count:"100", text2:"次"},
  {text1:"出报修", count:"100", text2:"次"},
  {text1:"留下进展记录", count:"100", text2:"条"},
  {text1:"你所在的值班共接到电话", count:"100", text2:"个"},
  {text1:"你所在的值班共分配 IP ", count:"100", text2:"个"},
  {text1:"你所在的值班共更换 MAC ", count:"100", text2:"个"},
]


const Personal2Special = () => {
  const containerRef = useRef();
  const handleRouter =()=> {
    history.push("/Achievement");
    window.location.reload();
  }

  const onClick = () => {
    html2canvas(containerRef.current).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, 'page.png');
      });
    });
  };

  
    return (
      <div 
        className="personal2special_container" 
        style={{
          backgroundImage: `url(${BG1})`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh'
        }}
        ref = {containerRef}
      >
      <div className='title_container'>
        <div className="header">
          <img style={{width:"6vw"}} src={logo} alt="logo"/>
          <h1>NIMO 来信 · 职业生涯回顾</h1>
        </div>
      </div>

      <div className="outer_container">
      <div className="inner_container" style={{display: 'flex'}}>
            <img style={{width:"25vh",height:"27vh",marginRight:"2vw"}} src={profileImg}/>
            <div >
              <p>&gt;&gt;&gt; </p>
              {profileInfo.map((info, index) => (
                <Combination4 key={index} item={info.item} content={info.content} />
              ))}
            </div>
            <div style={{marginLeft:"10vw"}}>
            <IconTitle icon={titleIcon} text={"累计霍霍器材"}/>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
    {consumables.slice(0, 2).map((data, index) => (
        <div style={{ marginRight: '2vw' }}>
            <IconCount key={index} icon={data.icon} count={data.count} height={8}/>
        </div>
    ))}
</div>
    <div>
        <IconCount icon={consumables[2].icon} count={consumables[2].count} height={8}/>
    </div>
            </div>
            

            <div className="inner_bottom_container">
              <div>
            <p style={{fontSize:"3vh"}}>&gt;&gt;&gt; NIMO@localhost: loading log......</p>
              <div style={{lineHeight: "1.7"}}>
            {statistics.map((stat, index) => (
              <Combination5 key={index} text1={stat.text1} count={stat.count} text2={stat.text2} />
            ))}
            </div>
            </div>
            <div >
                <div style={{position:"absolute", top:"10vh", left:"30vw"}}>
                <IconTitle icon={titleIcon} text={"报修最常去的楼栋"} isMargin={false}/>
                <img style={{width:"40vw"}} src={baoxiuBG}/>
                <h style={{position:"absolute", top:"12vh", left:"9vw",fontSize:"4vh"}}>{common.building}</h> 
                </div>
                
                <div style={{position:"absolute", top:"32vh", left:"30vw"}}>
                <IconTitle icon={titleIcon} text={"报修最常一起去的人"} isMargin={false}/>
                <img style={{width:"30vw"}} src={renBG}/>
                <h style={{position:"absolute", top:"14vh", left:"7vw",fontSize:"4vh"}}>{common.colleague}</h> 
                </div>
                </div>
            </div>
        </div>
      </div>
      <div className="cat_container" onClick={handleRouter}>
      <ImageTransition cat1={cat1} cat2={cat2} size={20}/>
      </div>
      <div className="savebutton">
  <button onClick={onClick}>保存为图片</button>
</div>
      </div>
      
    );
};
  
export default Personal2Special;
