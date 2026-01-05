import React from "react";
import Hero from "../components/HomeComp/Hero";
import History from "../components/HomeComp/History";
import Details from "../components/HomeComp/Details";
import ExploreJCI from "../components/HomeComp/ExploreJCI";
import Stories from "../components/HomeComp/Stories";
import WhyJoin from "../components/HomeComp/WhyJoin";
import MakeYourMark from "../components/HomeComp/MakeYourMark";
import PresidentMessage from "../components/HomeComp/PresidentMessage";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <PresidentMessage />
      <History />
      <Details />
      <ExploreJCI />
      <Stories />
      <WhyJoin />
      <MakeYourMark />
    </div>
  );
};

export default Homepage;
