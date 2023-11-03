import React, { useEffect, useState } from 'react';
import hill1 from "../img/paraScroll_demo/hill1.png";
import hill2 from "../img/paraScroll_demo/hill2.png";
import hill3 from "../img/paraScroll_demo/hill3.png";
import hill4 from "../img/paraScroll_demo/hill4.png";
import hill5 from "../img/paraScroll_demo/hill5.png";
import leaf from "../img/paraScroll_demo/leaf.png";
import tree from "../img/paraScroll_demo/tree.png";
import plant from "../img/paraScroll_demo/plant.png";
import message from "../img/paraScroll_demo/message.png";
import cat from "../img/paraScroll_demo/cat.png";
import icon from "../img/paraScroll_demo/ICON.png"
import ufo from "../img/paraScroll_demo/UFO2.png";
import "../css/ParaScroll.css"
import { history } from "../utils/history";
import IconCount from '../Component/IconCount';
import Combination3 from '../Component/Combination3';

const consumables = [
  { icon: icon, count: 500 },
  { icon: icon, count: 300 },
  { icon: icon, count: 200 }
];


const Department = () => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
    const [isSlideEnd, setIsSlideEnd] = useState(false);
  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      let value = window.scrollY;

      textRef.current.style.marginTop = value * 1.5 + 'px';
      leafRef.current.style.top = value * -1.5 + 'px';
      leafRef.current.style.left = value * 1.5 + 'px';
      hill5Ref.current.style.left = value * 1.5 + 'px';
      hill4Ref.current.style.left = value * -1.5 + 'px';
      hill1Ref.current.style.top = value * 0.5 + 'px';
    //   spaceShipRef.current.style.marginTop = value * 0.8 + 'px';
      if (value  <= 0.8 * window.innerHeight) {
        spaceShipRef.current.style.marginTop = value * 0.8 + 'px';
      }
      

      if (!isPopUpOpen && messageRef && messageRef.current && messageRef.current.style){
        console.log(isPopUpOpen);
      const messageTop = messageRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      if ( !isPopUpOpen && window.pageYOffset > messageTop - windowHeight) {
         // 设置一个新的定时器
         timeoutId = setTimeout(() => {
            // 触发向左滑特效
            messageRef.current.style.transition = 'all 0.3s';
            messageRef.current.style.transform = 'translateX(-40vw)';
            console.log('执行特效');
            timeoutId = setTimeout(() => {
            catRef.current.style.visibility = 'visible';
            catRef.current.style.transform = 'scale(800%)';
            catRef.current.style.transition = 'width 0.5s, height 0.5s';
            timeoutId = setTimeout(() => {
                setIsSlideEnd(true);
            }, 300);

            }, 300);
            // catRef.current.style.width = '30px';
            // catRef.current.style.height = '30px';
            // 执行你的特效代码
          }, 1000); // 延迟0.5秒触发特效
        
      }
    }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textRef = React.useRef(null);
  const leafRef = React.useRef(null);
  const hill1Ref = React.useRef(null);
  const hill4Ref = React.useRef(null);
  const hill5Ref = React.useRef(null);
  const spaceShipRef = React.useRef(null);
  const messageRef = React.useRef(null);
  const catRef = React.useRef(null);

  const handleClick = () => {
    if (isSlideEnd) {
      setIsPopUpOpen(true);
  
      setTimeout(() => {
        history.push("/Personal1");
        window.location.reload();
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  }


  return (
    <div>
      {/* <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <a href="#" className="active">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
      </header> */}

      <section className="parallax">
        <img src={hill1} id="hill1" ref={hill1Ref} alt="hill1"/>
        <img src={hill2} id="hill2" alt="hill2"/>
        <img src={hill3} id="hill3" alt="hill3"/>
        <img src={hill4} id="hill4" ref={hill4Ref} alt="hill4"/>
        <img src={hill5} id="hill5" ref={hill5Ref} alt="hill5"/>
        <img src={tree} id="tree" alt="tree"/>
        <img src={ufo} id="spaceShip" ref={spaceShipRef}alt="ufo"/>
        <h2 id="text" ref={textRef}>NiMoment</h2>
        <img src={leaf} id="leaf" ref={leafRef} alt="leaf"/>
        <img src={plant} id="plant" alt="plant"/>
      </section>

      <section class="sec">
        <h2>2023年度，NIMO......</h2>
        <img className="cat box-2" ref={catRef} src={cat} alt="cat"/>
        <div className='fixed-box1'>
            <img className="icon-div1" style={{zIndex: 2}} src={icon} alt="icon"/>
            <div className="text-div1">
            <Combination3 text1="处理请求" count={1000} text2="个" />
            </div>
        </div>

        <div >
         {isPopUpOpen ? (
        <img className='message-box' style={{ zIndex: 3 }} src={cat} alt="cat"/>
      ) : (
        <img  className='message-box' style={{ zIndex: 3 }} ref={messageRef} src={message} onClick={handleClick} alt="message"/>
      )}
      </div>
        
        <div className="fixed-box2" style={{zIndex: 3}}>
            <div style={{
                display: 'flex',
                position: 'absolute',
                top: '30%',
                left: '70%',
                height: '30%'
            }}>
                <div>
                  {consumables.map((data, index) => (
                  <IconCount key={index} icon={data.icon} count={data.count} height={10}/>
                  ))}
                </div>
            </div>
            <div className="text-div2">
                <div>
                <Combination3 text1="消耗水晶头/模块/面板共" count={1000} text2="个" />
                </div>
            </div>
        </div>
        <div className="fixed-box3">
            <img className="icon-div1" style={{zIndex: 2}} src={icon} alt="icon"/>
            <div className="text-div1">
                <div>
                <Combination3 text1="通过新开网审批" count={1000} text2="个" />
                </div>
            </div>
        </div>
    </section>

    </div>
  );
};

export default Department;
