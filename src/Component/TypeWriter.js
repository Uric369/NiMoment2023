import React, { Component } from "react";
import typeSound from "../audio/typewriter.mp3";
import "../css/Entry.css";

class Typewriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2: "",
    };
    this.currentIndex = 0;
  }

  componentDidMount() {
    const { originalText1, originalText2, destination, navigate } = this.props;

    this.interval = setInterval(() => {
      if (this.currentIndex < originalText1.length + originalText2.length - 2) {
        if (this.currentIndex < originalText1.length - 1) {
          this.setState((prevState) => ({
            text1:
              prevState.text1.slice(0, -1) +
              originalText1[this.currentIndex] +
              "▊",
          }));
          this.currentIndex++;
        } else {
          if (this.currentIndex === originalText1.length - 1) {
            this.setState((prevState) => ({
              text1: prevState.text1.slice(0, -1),
              text2:
                prevState.text2.slice(0, -1) +
                originalText2[this.currentIndex - originalText1.length] +
                "▊",
            }));
            this.currentIndex++;
          } else {
            this.setState((prevState) => ({
              text2:
                prevState.text2.slice(0, -1) +
                originalText2[this.currentIndex - originalText1.length] +
                "▊",
            }));
            this.currentIndex++;
          }
        }
      } else {
        this.setState((prevState) => ({
          text2: prevState.text2.slice(0, -1),
        }));
        clearInterval(this.interval);
        if (destination && destination.trim() !== "") {
          this.timer = setTimeout(() => {
            navigate(destination);
          }, 1000); // Navigate to the destination page after 1 second
        }
      }
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div>
        <audio
          src={typeSound}
          controls
          autoPlay
          loop
          style={{ position: "fixed", top: "-1000px" }}
        />
        <p className="animated-text-2">
          {this.state.text1}
          <br />
          {this.state.text2}
        </p>
        ;
      </div>
    );
  }
}

export default Typewriter;
