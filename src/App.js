import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Certifications } from "./components/Certifications";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Certifications />
      <Projects />
    </div>
  );
}

export default App;
