import React from "react";
import Hero from "../components/AboutComp/Hero";
import VisionMission from "../components/AboutComp/VisionMission";
import OurCores from "../components/AboutComp/OurCores";
import Impact from "../components/AboutComp/Impact";
import Projects from "../components/AboutComp/Projects";
import OurLeaders from "../components/AboutComp/OurLeaders";

const Aboutpage = () => {
  return (
    <div>
      <Hero />
      <VisionMission />
      <OurCores />
      <Impact />
      <Projects />
      <OurLeaders/>
    </div>
  );
};

export default Aboutpage;
