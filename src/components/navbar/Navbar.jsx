import "./navbar.scss";
import "../../variables.scss";
import { MailOutline } from "@material-ui/icons";

export default function Navbar({ menuIsOpen, setMenuIsOpen }) {
  return (
    <div className={"navbar " + (menuIsOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <span>me.Dmitry</span>
          </a>
          <div className="mail-container">
            <MailOutline className="icon" />
            <span>krepakdima@gmail.com</span>
          </div>
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
