import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills.js";

function App() {
  return (
    <div className="App">
       <Home />
       <About />
       <Skills />
       <Project />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
