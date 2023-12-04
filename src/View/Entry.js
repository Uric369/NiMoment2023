import React, { useEffect, useRef, useState } from "react";
import Parallax from "parallax-js";
import "../css/Entry.css";
import planet1 from "../img/cover/planet1.png";
import planet2 from "../img/cover/planet2.png";
import man from "../img/cover/man.png";
import earth from "../img/cover/earth.png";
import planet3 from "../img/cover/planet3.png";
import planet4 from "../img/cover/planet4.png";
import rocket from "../img/cover/rocket.png";
import NiMoment from "../img/cover/NiMoment.png";
import Typewriter from "../Component/TypeWriter";
import { useNavigate } from "react-router-dom";

const userInfo = {
  id: 378,
  name: "胡彤",
};

function Entry() {
  const sceneRef = useRef(null);
  const [animateText, setAnimateText] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true,
      });

      // 添加 resize 事件监听器
      window.addEventListener("resize", handleResize);
      // 调用一次 handleResize 进行初始化
      handleResize();
      document.addEventListener("DOMContentLoaded", handleResize);

      return () => {
        parallaxInstance.destroy();
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleResize = () => {
    // 获取窗口的宽度和高度
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log("window");
    console.log(windowWidth);
    console.log(windowHeight);

    // 遍历所有图片元素，更新它们的尺寸
    const images = sceneRef.current.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      const image = images[i];

      // 计算图片的缩放比例
      const widthRatio = windowWidth / image.naturalWidth;
      const heightRatio = windowHeight / image.naturalHeight;
      const scaleRatio = Math.max(widthRatio, heightRatio);

      // 根据缩放比例设置图片的尺寸
      const newWidth = image.naturalWidth * scaleRatio;
      const newHeight = image.naturalHeight * scaleRatio;
      image.style.width = `${newWidth}px`;
      image.style.height = `${newHeight}px`;
    }
  };

  const handleClick = () => {
    setAnimateText(true);
  };

  return (
    <div>
      <div className="container">
        <ul ref={sceneRef}>
          <li className="layer" data-depth=".2">
            <img src={planet1} alt="" />
          </li>
          <li className="layer" data-depth=".3">
            <img src={planet2} alt="" />
          </li>
          <li className="layer" data-depth=".2">
            <img src={man} alt="" />
          </li>
          <li className="layer" data-depth=".5">
            <img src={earth} alt="" />
          </li>
          <li className="layer" data-depth=".1">
            <img src={NiMoment} alt="" />
          </li>
          <li className="layer" data-depth=".4">
            <img src={planet3} alt="" />
          </li>
          <li className="layer" data-depth=".8">
            <img src={planet4} alt="" />
          </li>
          <li className="layer" data-depth="0">
            <img src={rocket} alt="" />
          </li>
        </ul>
      </div>
      {animateText ? (
        <Typewriter
          originalText1={`>> Authenticating... DONE`}
          originalText2={`> Welcome NIMOer#${userInfo.id} ${userInfo.name} `}
          destination={"/Department"}
          navigate={navigate}
        />
      ) : (
        <div
          className="animated-text layer"
          style={{ cursor: "pointer" }}
          data-depth="0"
          onClick={() => handleClick()}
        >
          <h>&gt; GET STARTED</h>
        </div>
      )}
    </div>
  );
}

export default Entry;
