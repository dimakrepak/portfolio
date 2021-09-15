import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["FULL STACK", "Frontend", "Backend"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="assets/profil2.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* <span className="hello">HELLO:)</span> */}
          <span className="name">Hi, I'm Dmitry Krepak.</span>
          <span className="description">
            I AM <span ref={textRef}></span> DEVELOPER
          </span>
        </div>
        <a href="#works">
          <KeyboardArrowDown className="arrow-down" />
        </a>
      </div>
    </div>
  );
}
