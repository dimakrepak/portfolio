import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Works from "./components/works/Works";
import { useState } from "react";
import "./app.scss";
import Menu from "./components/menu/Menu";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="app">
      <Navbar menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
      <div className="sections">
        <Intro />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
