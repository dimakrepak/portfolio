import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sections">
        <Intro />
      </div>
    </div>
  );
}

export default App;
