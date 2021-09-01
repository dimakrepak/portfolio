import "./navbar.scss";
import "../../variables.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <h1>Dmitry;</h1>
          </a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
