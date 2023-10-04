import { BrowserRouter as Router } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <>
      <Router>
        <div className="relative z-10 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
