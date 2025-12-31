import React from "react";
import ReuseableHero from "../../ReusableHero";
import bgIMG from "../../assets/eventHero.webp";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <ReuseableHero
        text1={"Gallery"}
        text2={"Moments That Matter"}
        text3={
          "Capturing the spirit of leadership, service, and fellowship through our projects and events around the world"
        }
        backgroundImage={bgIMG}
        rippleConfig={{
          positionClasses:
            "top-100 -right-28 -translate-x-1/2 -translate-y-1/2",
          opacity: "opacity-20",
          rotation: "rotate-[30deg]",
          borderColor: "border-white",
          sizeClasses: "w-56 sm:w-96 md:w-150 h-56 sm:h-96 md:h-150",
        }}
      />
    </div>
  );
};

export default Hero;
