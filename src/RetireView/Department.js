import React, { useEffect, useState, useRef } from "react";
import hill1 from "../img/paraScroll_demo/hill1.png";
import hill2 from "../img/paraScroll_demo/hill2.png";
import hill3 from "../img/paraScroll_demo/hill3.png";
import hill4 from "../img/paraScroll_demo/hill4.png";
import hill5 from "../img/paraScroll_demo/hill5.png";
import leaf from "../img/paraScroll_demo/leaf.png";
import tree from "../img/paraScroll_demo/tree.png";
import plant from "../img/paraScroll_demo/plant.png";
import message from "../img/paraScroll_demo/message.png";
import popupWindow from "../img/paraScroll_demo/popupWindow.png";
import cat from "../img/paraScroll_demo/cat.png";
import icon from "../img/paraScroll_demo/ICON.png";
import ufo from "../img/paraScroll_demo/UFO2.png";
import "../css/ParaScroll.css";
import { history } from "../utils/history";
import IconCount from "../Component/IconCount";
import Combination3 from "../Component/Combination3";
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import html2canvas from "html2canvas";
import { useNavigate } from "react-router-dom";
// import messageNotice from "../audio/message.mp3";
import { departmentStatsApi, getRequest } from "../apis";
import { dataFormatter } from "../utils/dataFormat";

const defaultDepartmentStats = {
  numRequests: 0,
  numAuditions: 0,
  consumables: {
    numKeystonJacks: 0,
    numConnectors: 0,
    numPlates: 0,
  },
};

function formatConsumables(consumables) {
  return dataFormatter(
    consumables,
    "count",
    ["numKeystonJacks", "numConnectors", "numPlates"],
    [{ icon: icon }, { icon: icon }, { icon: icon }]
  );
}

function sumConsumables(consumables) {
  let sum = 0;
  for (let key in consumables) {
    sum += consumables[key];
  }
  return sum;
}

const DepartmentSpecial = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [isSlideEnd, setIsSlideEnd] = useState(false);
  const [departmentStats, setDepartmentStats] = useState(
    defaultDepartmentStats
  );
  const containerRef = useRef();
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const textRef = React.useRef(null);
  const leafRef = React.useRef(null);
  const hill1Ref = React.useRef(null);
  const hill4Ref = React.useRef(null);
  const hill5Ref = React.useRef(null);
  const spaceShipRef = React.useRef(null);

  useEffect(() => {
    getRequest(
      departmentStatsApi,
      (data) => {
        setDepartmentStats(data.data);
      },
      (error) => {
        console.error(error);
        setDepartmentStats(defaultDepartmentStats);
      }
    );
  }, []);

  useEffect(() => {
    let timeoutId;
    if (isMobile) {
      // 设置一个新的定时器
      timeoutId = setTimeout(() => {
        // 触发向左滑特效
        if (messageRef && messageRef.current && messageRef.current.style) {
          // audio.play();
          messageRef.current.style.transition = "all 0.3s";
          messageRef.current.style.transform = "translateX(-70vw)";
        }
        console.log("执行特效");
        timeoutId = setTimeout(() => {
          if (catRef && catRef.current && catRef.current.style) {
            catRef.current.style.visibility = "visible";
            catRef.current.style.transform = "scale(800%)";
            catRef.current.style.transition = "width 0.5s, height 0.5s";
          }
          timeoutId = setTimeout(() => {
            setIsSlideEnd(true);
          }, 300);
        }, 300);
      }, 1000); // 延迟0.5秒触发特效
    }
    // const audio = new Audio(messageNotice);
    const handleScroll = () => {
      timeoutId = setTimeout(() => {
        // 触发向左滑特效
        if (messageRef && messageRef.current && messageRef.current.style) {
          // audio.play();
          messageRef.current.style.transition = "all 0.3s";
          messageRef.current.style.transform = "translateX(-40vw)";
        }
        console.log("执行特效");
        timeoutId = setTimeout(() => {
          if (catRef && catRef.current && catRef.current.style) {
            catRef.current.style.visibility = "visible";
            catRef.current.style.transform = "scale(800%)";
            catRef.current.style.transition = "width 0.5s, height 0.5s";
          }
          timeoutId = setTimeout(() => {
            setIsSlideEnd(true);
          }, 300);
        }, 300);
        // catRef.current.style.width = '30px';
        // catRef.current.style.height = '30px';
        // 执行你的特效代码
      }, 1000); // 延迟0.5秒触发特效
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timeoutId && timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPopUpOpen]);

  const messageRef = React.useRef(null);
  const catRef = React.useRef(null);

  const handleClick = () => {
    if (isSlideEnd) {
      setIsPopUpOpen(true);
    }
  };

  const handleRouter = () => {
    navigate("/Personal1Special");
  };

  const handleCloseClick = () => {
    setIsPopUpOpen(false);
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
      {!isMobile && (
        <section className="parallax">
          <img src={hill1} id="hill1" ref={hill1Ref} alt="hill1" />
          <img src={hill2} id="hill2" alt="hill2" />
          <img src={hill3} id="hill3" alt="hill3" />
          <img src={hill4} id="hill4" ref={hill4Ref} alt="hill4" />
          <img src={hill5} id="hill5" ref={hill5Ref} alt="hill5" />
          <img src={tree} id="tree" alt="tree" />
          <img src={ufo} id="spaceShip" ref={spaceShipRef} alt="ufo" />
          <h2 id="text" ref={textRef}>
            NiMoment飞船正在降落👇
          </h2>
          <img src={leaf} id="leaf" ref={leafRef} alt="leaf" />
          <img src={plant} id="plant" alt="plant" />
        </section>
      )}
      <section class="sec" ref={containerRef}>
        <h3>看看后辈们吧！</h3>
        <h3>2023年度，NIMO......</h3>
        <img className="cat box-2" ref={catRef} src={cat} alt="cat" />
        <div className="fixed-box1">
          <img
            className="icon-div1"
            style={{ zIndex: 2 }}
            src={icon}
            alt="icon"
          />
          <div className="text-div1">
            <Combination3
              text1="处理请求"
              count={departmentStats.numRequests}
              text2="个"
            />
          </div>
        </div>

        <div>
          {isPopUpOpen && (
            <div className="overlay">
              <div className="popup-image-container">
                <img
                  src={popupWindow} // The larger image you want to show
                  style={{
                    width: isMobile ? "90vw" : "50vw",
                    height: "auto",
                    objectFit: "cover", // Adjust as needed
                  }}
                  alt="Popup"
                  onClick={handleRouter}
                />
                <img
                  src={icon} // The close icon image
                  className="close-button"
                  onClick={handleCloseClick}
                  alt="Close"
                />
              </div>
            </div>
          )}
          <img
            className="message-box"
            style={{ zIndex: 2 }}
            ref={messageRef}
            src={message}
            onClick={handleClick}
            alt="message"
          />
        </div>

        <div className="fixed-box2" style={{ zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              position: "absolute",
              top: isMobile ? "10%" : "30%",
              left: "60%",
              height: "30%",
            }}
          >
            <div>
              {formatConsumables(departmentStats.consumables).map(
                (data, index) => (
                  <IconCount
                    key={index}
                    icon={data.icon}
                    count={data.count}
                    height={isMobile ? 10 : 5}
                  />
                )
              )}
            </div>
          </div>
          <div className="text-div2">
            <div>
              <Combination3
                text1="消耗耗材共"
                count={sumConsumables(departmentStats.consumables)}
                text2="个"
              />
            </div>
          </div>
        </div>
        <div className="fixed-box3">
          <img
            className="icon-div1"
            style={{ zIndex: 2 }}
            src={icon}
            alt="icon"
          />
          <div className="text-div1">
            <div>
              <Combination3
                text1="通过新开网审批"
                count={departmentStats.numAuditions}
                text2="个"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="savebutton">
        <button onClick={onClick}>保存为图片</button>
      </div>
    </div>
  );
};

export default DepartmentSpecial;
