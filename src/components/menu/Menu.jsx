import "./menu.scss";

export default function Menu({ menuIsOpen, setMenuIsOpen }) {
  return (
    <div className={"menu " + (menuIsOpen && "active")}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#works">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
