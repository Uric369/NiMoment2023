import React from 'react';
import Combination from '../Component/Combination';
import icon from "../img/paraScroll_demo/ICON.png";
import star_mid from "../img/personal1/Star_Mid.png";
import star_big from "../img/personal1/Star_Big.png";
import logo from "../img/personal1/Logo.png";
import "../css/Personal1.css";
import Rotator from '../Component/Rotator';
import Glitter from '../Component/Glitter';
import DashedLines from '../Component/DashedLines';
import wifi from "../img/personal1/Wifi.png"
import { history } from '../utils/history';




const user = {
    id: 378,
    username: "胡彤",
}

const rotatingObjects = [
  {img: star_mid, width: 10, x: 60, y:15, speed:10},
  {img: star_big, width: 15, x: 80, y:60, speed:20},
]

const glitteringObjects = [
  {img: star_mid, width: 5, x: 50, y:10, speed:3},
  {img: star_mid, width: 5, x: 40, y:15, speed:5},
  {img: star_mid, width: 3, x: 90, y:50, speed:2},
  {img: wifi, width: 7, x: 78, y:70, speed:1},
]

const dashedLine = [
  {x: 43, y:21},
  {x: 53, y:15},
  {x: 65, y:25},
  {x: 85, y:70},
]


const handleClick = () => {
  history.push('/Personal2'); // 当组件被点击时，跳转到/Personal2路径
  window.location.reload();
};

const lastDay = "2023.10.01";



const Personal1Special = () => {
  return (
    <div className='personal1_container'>
      
      <DashedLines points={dashedLine} color="yellow" />
      <div className='title_container_special'>
        <div className="header">
          <img style={{width:"6vw"}} src={logo} alt="logo"/>
          <h1>NIMO 来信</h1>
        </div>
        <div className="divider"/>
      </div>
        <div className="text_container">
            <h4>欢迎回家！</h4>
            <h3>NIMO 23岁啦！ </h3>
            <h5>因为你的热爱与努力，nimo才能走到今天。<br/> 还记得第⼀次上班吗？那时你第一次来到办公室。<br/>电话座机的铃声，还会勾起你紧张的情绪吗？<br/>官网的后台，还是你记忆中的样子吗？</h5>

        <div className='content2'>
        <h5 style={{fontWeight:"bold",fontStyle:"italic"}}> {lastDay}</h5>
        <h5>是你最后一天上班的日子，签离的那一刻，想必百感交集吧...</h5>
        </div>
        </div>

        <div>
          {rotatingObjects.map((star, index) => 
            <Rotator 
              key={index} 
              src={star.img}   // 这里假设 star_mid 是一个已定义的图像源
              width={star.width}
              height={star.height}
              x={star.x}
              y={star.y}
              speed={star.speed}
            />
          )}
        </div>

        <div>
        {glitteringObjects.map((star, index) => 
            <Glitter 
              key={index} 
              img={star.img}   // 这里假设 star_mid 是一个已定义的图像源
              width={star.width}
              height={star.height}
              x={star.x}
              y={star.y}
              speed={star.speed}
            />
          )}
        </div>
    </div>
  );
};

export default Personal1Special;
