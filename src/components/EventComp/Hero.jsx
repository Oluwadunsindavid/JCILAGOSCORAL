import React from "react";
import ReuseableHero from "../../ReusableHero";
import bgImg from "../../assets/galleryHero.webp";

const Hero = () => {
  return (
    <div>
      <ReuseableHero
        text1={"EVENTS & PROGRAMS"}
        text2={"Connect, Learn, Lead"}
        text3={
          "Join us at upcoming events, training sessions, and networking opportunities designed to develop your leadership skills and expand your impact"
        }
        backgroundImage={bgImg}
        rippleConfig={{
          positionClasses: "sm:top-150 sm:-right-28 -translate-x-1/2 -translate-y-1/2",
          opacity: "opacity-20",
          rotation: "rotate-[30deg]",
          borderColor: "border-jci-yellow"
        }}
      />
    </div>
  );
};

export default Hero;
