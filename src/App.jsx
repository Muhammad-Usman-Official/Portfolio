import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
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
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      {disabled === false && (
        <div className="lg:hidden flex flex-col z-20 absolute left-0 top-0 right-0 rounded  bg-violet-800 text-white">
          <button
            className="w-fit self-end bg-violet-700 px-3 py-2 rounded-bl-xl"
            onClick={() => setDisabled(true)}
          >
            Close
          </button>
          <p className="px-3 pt-1 pb-2">
            Due to some mobile browsers restriction for multiple canvases its
            better to view on pc
            <br /> <hr className="my-2" /> I am creating a new portfolio which
            will be 3D and can be easily viewed on any device
          </p>
        </div>
      )}
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
