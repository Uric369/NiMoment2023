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
import cat1 from "../img/testGradient/Meow1.png";
import cat2 from "../img/testGradient/Meow2.png";
import ImageTransition from '../Component/ImageTransition';
import { history } from '../utils/history';


const content1 = [
    {icon: icon, text1: "值班", text2 : "次", count: 30},
    {icon: icon, text1: "出报修", text2 : "次", count: 30},
    {icon: icon, text1: "留下进展", text2 : "条", count: 30},
    {icon: icon, text1: "查看用户侧最差 AP ", text2 : "个", count: 30},
]

const content2 = [
    {icon: icon, text1: "接到电话", text2 : "个", count: 30},
    {icon: icon, text1: "分配 IP ", text2 : "个", count: 30},
    {icon: icon, text1: "更换 MAC ", text2 : "个", count: 30},
    {icon: icon, text1: "遇到用户上门", text2 : "次", count: 30},
]

const user = {
    id: 378,
    username: "胡彤",
}

const rotatingObjects = [
  {img: star_mid, width: 250, height: 250, x: 60, y:15, speed:10},
  {img: star_big, width: 300, height: 300, x: 80, y:60, speed:20},
]

const glitteringObjects = [
  {img: star_mid, width: 100, height: 100, x: 50, y:10, speed:3},
  {img: star_mid, width: 100, height: 100, x: 40, y:15, speed:5},
  {img: star_mid, width: 100, height: 100, x: 90, y:50, speed:2},
  {img: wifi, width: 100, height: 100, x: 78, y:70, speed:1},
]

const dashedLine = [
  {x: 43, y:21},
  {x: 53, y:15},
  {x: 65, y:25},
  {x: 85, y:70},
]


const Divider = () => <hr style={{ borderColor: 'blue' }} />;


const handleClick = () => {
  history.push('/Personal2'); // 当组件被点击时，跳转到/Personal2路径
  window.location.reload();
};



const Personal1 = () => {
  return (
    <div className='personal1_container'>
      
      <DashedLines points={dashedLine} color="yellow" />
      <div className='title_container'>
        <div className="header">
          <img style={{width:"150px"}} src={logo}/>
          <h1>工作情况统计</h1>
        </div>
        <div className="divider"/>
      </div>
        <div className="text_container">
            <h2>Nimoer # {user.id+ " " +user.username}， 在2023年度， 你....... </h2>
        {content1.map((item, index) => 
          <Combination 
            key={index} 
            icon={item.icon} 
            text1={item.text1} 
            text2={item.text2} 
            count={item.count}
            sequence={"left"}
          />
        )}

        <div className='content2'>
        <h2> 2023年你所在的所有值班班次一共 </h2>
        {content2.map((item, index) => 
          <Combination 
            key={index} 
            icon={item.icon} 
            text1={item.text1} 
            text2={item.text2} 
            count={item.count}
            sequence={"right"}
          />
        )}
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
        <div onClick={handleClick}>
        <ImageTransition 
        cat1={cat1}
        cat2={cat2}
      />
      </div>
    </div>
  );
};

export default Personal1;
