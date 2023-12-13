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

import planet1_m from "../img/mobile_cover/planet1.png";
// import planet2_m from "../img/mobile_cover/planet2.png";
import man_m from "../img/mobile_cover/man.png";
import earth_m from "../img/mobile_cover/earth.png";
import planet3_m from "../img/mobile_cover/planet3.png";
import planet4_m from "../img/mobile_cover/planet4.png";
import rocket_m from "../img/mobile_cover/rocket.png";
import NiMoment_m from "../img/mobile_cover/NiMoment.png";

import Typewriter from "../Component/TypeWriter";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatDateTimeHHMM, padNimoerId } from "../utils/dataFormat";
import {
  setNimoerInfo,
  setIsRetired,
  setSignInOut,
} from "../features/nimoerReducer";
import {
  setDepartmentStats,
  setPersonalStatsGeneral,
  setPersonalStatsOffice,
  setPersonalStatsConsumables,
  setPersonalStatsProgressUpdates,
  setPersonalStatsHiFrequencies,
} from "../features/statsReducer";
import {
  getRequest,
  nimoerApi,
  departmentStatsApi,
  personalStatsGeneralApi,
  personalStatsOfficeApi,
  personalStatsProgressApi,
  personalStatsFieldApi,
  signinApi,
} from "../apis";

function Entry() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const sceneRef = useRef(null);
  const [animateText, setAnimateText] = useState(false);
  const navigate = useNavigate();

  const nimoer = useSelector((state) => state.nimoer.nimoerInfo);
  const isRetired = useSelector((state) => state.nimoer.isRetired);
  const dispatch = useDispatch();

  function prefetchEverything() {
    // prefetch all data
    getRequest(
      nimoerApi,
      (data) => {
        const { id, name, isRetired } = data.data;
        dispatch(setNimoerInfo({ id, name }));
        dispatch(setIsRetired(isRetired));
      },
      (error) => {
        console.error(error);
        dispatch(setNimoerInfo({ id: 0, name: "全校断网" }));
        dispatch(setIsRetired(null));
      }
    );
    getRequest(
      departmentStatsApi,
      (res) => {
        dispatch(setDepartmentStats(res.data));
      },
      (error) => {
        console.error(error);
      }
    );
    getRequest(
      personalStatsGeneralApi,
      (res) => {
        dispatch(setPersonalStatsGeneral(res.data));
      },
      (error) => {
        console.error(error);
      }
    );
    getRequest(
      personalStatsOfficeApi,
      (res) => {
        dispatch(setPersonalStatsOffice(res.data));
      },
      (error) => {
        console.error(error);
      }
    );
    getRequest(
      personalStatsProgressApi,
      (res) => {
        dispatch(
          setPersonalStatsProgressUpdates({
            earliest: formatDateTimeHHMM(res.data.earliestProgress),
            latest: formatDateTimeHHMM(res.data.latestProgress),
          })
        );
      },
      (error) => {
        console.error(error);
      }
    );
    getRequest(
      personalStatsFieldApi,
      (res) => {
        dispatch(setPersonalStatsConsumables(res.data.personalConsumables));
        dispatch(
          setPersonalStatsHiFrequencies({
            building: res.data.topDormBuilding,
            colleague: res.data.topColleague.name,
          })
        );
      },
      (error) => {
        console.error(error);
      }
    );
    getRequest(signinApi, (res) => {
      dispatch(
        setSignInOut({
          signIn: formatDateTimeHHMM(res.data.firstTime),
          signOut: formatDateTimeHHMM(res.data.lastTime),
        })
      );
    });
  }

  // get nimoer info
  useEffect(() => {
    prefetchEverything();
  }, []);

  useEffect(() => {
    if (sceneRef.current) {
      const parallaxInstance = new Parallax(sceneRef.current, {
        relativeInput: true,
      });
  
      // 立即调整图片大小以适应屏幕
      handleResize();
  
      // 添加 resize 事件监听器
      window.addEventListener('resize', handleResize);
  
      // 组件卸载时清理事件监听器和parallax实例
      return () => {
        parallaxInstance.destroy();
        window.removeEventListener('resize', handleResize);
      };
      handleResize();
    }
  }, []);
  
  // 现在，无论是页面加载还是大小改变，handleResize 都会被调用
  

  const handleResize = () => {
    // 获取窗口的宽度和高度
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log("window");
    console.log(windowWidth);
    console.log(windowHeight);

    // 遍历所有图片元素，更新它们的尺寸
    const images = sceneRef.current.getElementsByTagName("img");
    for (const image of images) {
      // 用 onload 而不是 addEventListener 的原因是 onload 可以被覆盖
      // 当 handleResize 再次被调用的时候，旧的 onload 事件会被新的覆盖
      image.onload = () => {
        const widthRatio = windowWidth / image.naturalWidth;
        const heightRatio = windowHeight / image.naturalHeight;
        const scaleRatio = Math.max(widthRatio, heightRatio);
        const newWidth = image.naturalWidth * scaleRatio;
        const newHeight = image.naturalHeight * scaleRatio;
        image.style.width = `${newWidth}px`;
        image.style.height = `${newHeight}px`;
      }
    }
  };

  const handleClick = () => {
    setAnimateText(true);
  };

  return (
    <div style={{position: "relative", overflow:"hidden"}}>
      {isMobile ? (
        <div>
          <div className="container">
            <ul ref={sceneRef}>
              <li className="layer" data-depth=".2">
                <img src={planet1_m} alt="" />
              </li>
              <li className="layer" data-depth=".2">
                <img src={man_m} alt="" />
              </li>
              <li className="layer" data-depth=".5">
                <img src={earth_m} alt="" />
              </li>
              <li className="layer" data-depth=".1">
                <img src={NiMoment_m} alt="" />
              </li>
              <li className="layer" data-depth=".4">
                <img src={planet3_m} alt="" />
              </li>
              <li className="layer" data-depth=".8">
                <img src={planet4_m} alt="" />
              </li>
              <li className="layer" data-depth="0">
                <img src={rocket_m} alt="" />
              </li>
            </ul>
          </div>
          {animateText ? (
            <Typewriter
              originalText1={`>> Authenticating... ${
                isRetired === null ? "FAILED" : "DONE"
              }`}
              originalText2={
                isRetired === null
                  ? "> FATAL: Login required. REDIRECTING."
                  : `> Welcome NIMOer#${padNimoerId(nimoer.id)} ${nimoer.name} `
              }
              destination={
                isRetired === null
                  ? "https://nimo.sjtu.edu.cn/kaleid/login/?next=/nimoment/"
                  : isRetired
                  ? "/DepartmentSpecial"
                  : "/Department"
              }
              navigate={
                isRetired === null
                  ? (url) => {
                      window.location.href = url;
                    }
                  : navigate
              }
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
      ) : (
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
              originalText1={`>> Authenticating... ${
                isRetired === null ? "FAILED" : "DONE"
              }`}
              originalText2={
                isRetired === null
                  ? "> FATAL: Login required. REDIRECTING."
                  : `> Welcome NIMOer#${padNimoerId(nimoer.id)} ${nimoer.name} `
              }
              destination={
                isRetired === null
                  ? "https://nimo.sjtu.edu.cn/kaleid/login/?next=/nimoment/"
                  : isRetired
                  ? "/DepartmentSpecial"
                  : "/Department"
              }
              navigate={
                isRetired === null
                  ? (url) => {
                      window.location.href = url;
                    }
                  : navigate
              }
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
      )}
    </div>
  );
}

export default Entry;
