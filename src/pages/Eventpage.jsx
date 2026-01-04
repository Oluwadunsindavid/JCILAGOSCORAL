import React from "react";
import Hero from "../components/EventComp/Hero";
import UpcomingEvents from "../components/EventComp/UpcomingEvents";
import Subscribe from "../components/EventComp/Subscribe";

const Eventpage = () => {
  return (
    <div>
      <Hero />
      <UpcomingEvents />
      <Subscribe />
    </div>
  );
};

export default Eventpage;
