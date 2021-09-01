import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Works from "./components/works/Works";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Intro />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
