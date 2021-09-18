import "./navbar.scss";
import "../../variables.scss";
import { MailOutline } from "@material-ui/icons";
import { useState } from "react";

export default function Navbar({ menuIsOpen, setMenuIsOpen }) {
  const [isCv, setIsCv] = useState(false);
  return (
    <div className={"navbar " + (menuIsOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div
            className="cv"
            onMouseEnter={() => setIsCv(true)}
            onMouseLeave={() => setIsCv(false)}
          >
            <a
              href="assets/Dmitry-Krepak.cv.docx"
              download="Dmitry-Krepak.cv.docx"
            >
              <img className="cv-icon" src="assets/cv.png" alt="cv" />
            </a>
          </div>
          {isCv ? (
            <div className="mail-container">
              <span>Click to download my resume</span>
            </div>
          ) : (
            <div className="mail-container">
              <MailOutline className="icon" />
              <span>krepakdima@gmail.com</span>
            </div>
          )}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuIsOpen(!menuIsOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
