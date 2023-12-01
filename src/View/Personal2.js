import { useState, useRef } from "react";
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
import { saveAs } from 'file-saver';
import "../css/SaveButton.css";
import html2canvas from 'html2canvas';


const progressUpdate = {
    earliest: "2023.01.01 10:00",
    latest: "2023.07.23 23:59",
}

const common = {
    building: "D23",
    colleague: "Meow",
}

const consumables = [
    { icon: icon, count: 500 },
    { icon: icon, count: 300 },
    { icon: icon, count: 200 }
  ];


const Personal2 = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [catMode, setCatMode] = useState(0);
  const containerRef = useRef();
  const handleClick =()=> {
    if(!isDarkMode){
        console.log(catMode);
        console.log(catMode);
        setTimeout(() => {
            setCatMode(2);
            console.log(catMode);
          }, 4000); // 2000 milliseconds = 2 seconds
    }
    else {
        console.log(catMode);
        setCatMode(3);
        console.log(catMode);
        setTimeout(() => {
            setCatMode(0);
            console.log(catMode);
        }, 4000); // 2000 milliseconds = 2 seconds
    }
    setIsDarkMode(!isDarkMode);
  }

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
      <div>
      <div 
        className="personal2_container" 
        style={{
          backgroundImage: `url(${isDarkMode ? BG1 : BG2})`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh'
        }}
        ref = {containerRef}
      >
      <div className='title_container'>
        <div className="header">
          <img style={{width:"6vw"}} src={logo} alt="logo"/>
          <h1>工作情况统计</h1>
          <DayNightToggleButton
                    size={1.2}
                    onToggle={() => handleClick()}
                    defaultMode={false}
          ></DayNightToggleButton>
        </div>
      </div>

      <div className="outer_container">
      <div className="inner_container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                <IconTitle icon={titleIcon} text={"最早/最晚更新进展（猜猜怎么触发“最晚”呢）"}/>
            </div>
            
            <div style={{textAlign: 'center'}}>
                {isDarkMode ?
                  <Combination2 text={"你最晚更新进展是在"} time={progressUpdate.latest} />
                  :
                  <Combination2 text={"你最早更新进展是在"} time={progressUpdate.earliest} /> 
                }
            </div>

            <div className="inner_bottom_container">
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <IconTitle icon={titleIcon} text={"器材消耗"}/>
                    <IconTitle icon={titleIcon} text={"最常一起出报（郊）修（游）的人"}/>  
                </div>
                <div style={{ display: 'flex', flexDirection: 'column',marginLeft: '5vw'  }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '39%', marginRight: 'auto'}}>
        {consumables.slice(0, 2).map((data, index) => (
                    <div style={{ marginRight: '2vw' }}>
                    <IconCount key={index} icon={data.icon} count={data.count} height={4}/>
                </div>
        ))}
    </div>

    <div>
        <IconCount icon={consumables[2].icon} count={consumables[2].count} height={4}/>
    </div>
</div>

                <IconTitle icon={titleIcon} text={"报修最常去的楼栋"}/>
                <h4>{common.building}</h4>
                <h5>{common.colleague}</h5>
            </div>
        </div>
      </div>
      <div className="cat_container" onClick={handleRouter}>
      {catMode === 0 && <img style={{width:"20vw"}} src={cat2} alt="cat2"/>}
      {catMode === 1 && <ImageTransition cat1={cat2} cat2={cat1} size={20}/>}
      {catMode === 2 && <img style={{width:"20vw"}} src={cat1} alt="cat1"/>}
      {catMode === 3 && <ImageTransition cat1={cat1} cat2={cat2} size={20}/>}
      </div>
      </div>
      <div className="savebutton">
  <button onClick={onClick}>保存为图片</button>
</div>
      </div>
    );
};
  
export default Personal2;
