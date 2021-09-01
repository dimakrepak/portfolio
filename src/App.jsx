import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Works from "./components/works/Works";

function App() {
  return (
    <div className="App">
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
