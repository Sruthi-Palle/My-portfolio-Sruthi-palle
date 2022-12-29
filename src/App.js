import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Certifications } from "./components/Certifications";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Home />
      <About />
      <Certifications />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
