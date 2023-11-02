import { useState } from "react";
import "../css/DayNightToggleButton.css";

export default function DayNightToggleButton(props) {
  // onToggle: () => void, a function to be called when the button is clicked
  // defaultMode: boolean, the default mode of the button
  // size: number, for controlling size of the button
  const { onToggle, defaultMode, size } = props;
  const [isToggleOn, setIsToggleOn] = useState(defaultMode);
  const [isHovering, setIsMouseHovering] = useState(false);
  const modeClassName = isToggleOn ? "dark" : "light";
  const hoverClassName = isHovering ? "hover" : "leave";

  return (
      <div className="daynight-toggle-container" style={{ "font-size": size }}>
        <div className={"components " + `components-${modeClassName} `}>
          <div
            className={
              "main-button " +
              `main-button-${modeClassName} ` +
              (isHovering
                ? `main-button-${modeClassName}-${hoverClassName}`
                : "")
            }
            onClick={() => {
              setIsToggleOn((prev) => !prev);
              onToggle();
            }}
            onMouseEnter={() => {
              setIsMouseHovering(true);
            }}
            onMouseLeave={() => {
              setIsMouseHovering(false);
            }}
          >
            <div className={"moon " + `moon-${modeClassName}`}></div>
            <div className={"moon " + `moon-${modeClassName}`}></div>
            <div className={"moon " + `moon-${modeClassName}`}></div>
          </div>
          <div
            className={
              "daytime-background " +
              `daytime-background-${modeClassName} ` +
              (isHovering
                ? `daytime-background-${modeClassName}-${hoverClassName}`
                : "")
            }
          ></div>
          <div
            className={
              "daytime-background " +
              `daytime-background-${modeClassName} ` +
              (isHovering
                ? `daytime-background-${modeClassName}-${hoverClassName}`
                : "")
            }
          ></div>
          <div
            className={
              "daytime-background " +
              `daytime-background-${modeClassName} ` +
              (isHovering
                ? `daytime-background-${modeClassName}-${hoverClassName}`
                : "")
            }
          ></div>
          <div className={"cloud " + `cloud-${modeClassName}`}>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-hover" : "")}
            ></div>
          </div>
          <div className={"cloud-back " + `cloud-back-${modeClassName}`}>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-2-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-2-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-2-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-2-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-2-hover" : "")}
            ></div>
            <div
              className={"cloud-son " + (isHovering ? "cloud-son-2-hover" : "")}
            ></div>
          </div>
          <div className={"stars " + `stars-${modeClassName}`}>
            <div className={"star big " + (isHovering ? "star-hover" : "")}>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
            </div>
            <div className={"star big " + (isHovering ? "star-hover" : "")}>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
            </div>
            <div className={"star medium " + (isHovering ? "star-hover" : "")}>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
            </div>
            <div className={"star medium " + (isHovering ? "star-hover" : "")}>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
            </div>
            <div className={"star small " + (isHovering ? "star-hover" : "")}>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
            </div>
            <div className={"star small " + (isHovering ? "star-hover" : "")}>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
              <div className="star-son"></div>
            </div>
          </div>
        </div>
      </div>
  );
}
