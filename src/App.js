import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Certifications } from "./components/Certifications";
import { About } from "./components/About";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Certifications />
    </div>
  );
}

export default App;
