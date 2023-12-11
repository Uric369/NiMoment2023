import { useState, useRef, useEffect } from "react";
import DayNightToggleButton from "../Component/DayNightToggleButton";
import "../css/Personal2.css";
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
import { saveAs } from "file-saver";
import "../css/SaveButton.css";
import html2canvas from "html2canvas";
import {
  personalStatsProgressApi,
  personalStatsFieldApi,
  getRequest,
} from "../apis";
import { useSelector } from "react-redux";
import { formatDateTimeHHMM, dataFormatter } from "../utils/dataFormat";
import { useNavigate } from "react-router-dom";
import baoxiu_cat1 from "../img/personal2/cat2.png";
import baoxiu_cat2 from "../img/personal2/baoxiu_cat2.png";
import board from "../img/paraScroll_demo/board.png";
import crystal from "../img/paraScroll_demo/crystal.png";
import module from "../img/paraScroll_demo/module.png";
import next from "../img/personal2/next.PNG";
import saveButton from "../img/icon/saveButton.png";

function formatPersonalConsumables(consumables) {
  return dataFormatter(
    consumables,
    "count",
    ["numKeystonJacks", "numConnectors", "numPlates"],
    [{ icon: module }, { icon: crystal }, { icon: board }]
  );
}

const Personal2 = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [catMode, setCatMode] = useState(0);
  const containerRef = useRef();

  const progressUpdate = useSelector(
    (state) => state.stats.personalStats.progressUpdates
  );
  const consumables = useSelector(
    (state) => state.stats.personalStats.consumables
  );
  const hifrequencies = useSelector(
    (state) => state.stats.personalStats.hiFrequencies
  );

  const handleClick = () => {
    if (!isDarkMode) {
      console.log(catMode);
      console.log(catMode);
      setTimeout(() => {
        setCatMode(2);
        console.log(catMode);
      }, 4000); // 2000 milliseconds = 2 seconds
    } else {
      console.log(catMode);
      setCatMode(3);
      console.log(catMode);
      setTimeout(() => {
        setCatMode(0);
        console.log(catMode);
      }, 4000); // 2000 milliseconds = 2 seconds
    }
    setIsDarkMode(!isDarkMode);
  };

  const navigate = useNavigate();

  const handleRouter = () => {
    navigate("/Achievement");
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
      <div
        className="personal2_container"
        style={{
          backgroundImage: `url(${isDarkMode ? BG1 : BG2})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
        ref={containerRef}
      >
        <div className="title_container">
          <div className="header">
            <img style={{ width: isMobile? "20vw":"6vw" }} src={logo} alt="logo" />
            <h1>工作情况统计</h1>
            <DayNightToggleButton
              size={isMobile? 0.4: "0.05vw"}
              onToggle={() => handleClick()}
              defaultMode={false}
            ></DayNightToggleButton>
          </div>
        </div>

        <div className="outer_container">
          <div
            className="inner_container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconTitle
                icon={titleIcon}
                text={"最早/最晚更新进展（hint: 怎么触发“最晚”呢）"}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              {isDarkMode ? (
                <Combination2
                  text={"你最晚更新进展是在"}
                  time={progressUpdate.latest}
                />
              ) : (
                <Combination2
                  text={"你最早更新进展是在"}
                  time={progressUpdate.earliest}
                />
              )}
            </div>

            <div className="inner_bottom_container">
              <div style={{ display: isMobile? "column":"flex", justifyContent: "space-between" }}>
                <IconTitle icon={titleIcon} text={"器材消耗"} />
                {!isMobile && <IconTitle
                  icon={titleIcon}
                  text={"最常一起出报（郊）修（游）的人"}
                />}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "5vw",
                }}
              >
                { isMobile ? (<div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: isMobile? "100%":"39%",
                    marginRight: "auto",
                  }}
                >
                  {formatPersonalConsumables(consumables)
                    .map((data, index) => (
                      <div style={{ marginRight: "4vw" }}>
                        <IconCount
                          key={index}
                          icon={data.icon}
                          count={data.count}
                          height={10}
                        />
                      </div>
                    ))}
                </div>):(
                  <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    maxWidth: isMobile? "100%":"39%",
                    marginRight: "auto",
                  }}
                >
                  {formatPersonalConsumables(consumables)
                    .slice(0, 2)
                    .map((data, index) => (
                      <div style={{ marginRight: "2vw" }}>
                        <IconCount
                          key={index}
                          icon={data.icon}
                          count={data.count}
                          height={4}
                        />
                      </div>
                    ))}
                </div>
                )}

                {!isMobile && <div>
                  <IconCount
                    icon={formatPersonalConsumables(consumables)[2].icon}
                    count={formatPersonalConsumables(consumables)[2].count}
                    height={4}
                  />
                </div>}
              </div>

              <IconTitle icon={titleIcon} text={"报修最常去的楼栋"} />

              {isMobile && 
              <div>
                <img style={{width:"85vw"}} src={baoxiu_cat1}/>
                <IconTitle
                  icon={titleIcon}
                  text={"最常一起出报（郊）修（游）的人"}
                />
                <img style={{width:"80vw"}} src={baoxiu_cat2}/>
                </div>
              }
              <h4>{hifrequencies.building}</h4>
              <h5>{hifrequencies.colleague}</h5>
            </div>
          </div>
        </div>
        <div className="cat_container" onClick={handleRouter}>
          {/* <img src={next} style={{position:"absolute", bottom:"vh", right:"4vw",width:"8vw",height:"auto"}}/> */}
          {catMode === 0 && (
            <img style={{ width: isMobile? "40vw":"20vw" }} src={cat2} alt="cat2" />
          )}
          {catMode === 1 && (
            <ImageTransition cat1={cat2} cat2={cat1} size={20} />
          )}
          {catMode === 2 && (
            <img style={{ width: isMobile? "40vw":"20vw" }} src={cat1} alt="cat1" />
          )}
          {catMode === 3 && (
            <ImageTransition cat1={cat1} cat2={cat2} size={20} />
          )}
        </div>
        <img src={next} style={{position:"absolute", bottom:"5vh", right:"4vw",width:isMobile? "20vw":"8vw",height:"auto",cursor:"pointer"}}/>
      </div>
      <img src={saveButton} onClick={onClick} className="savebutton"/>
    </div>
  );
};

export default Personal2;
