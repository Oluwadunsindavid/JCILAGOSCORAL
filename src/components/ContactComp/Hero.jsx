import React from "react";
import ReuseableHero from "../../ReusableHero";
import bgImg from "../../assets/contactHero.jpg"

const Hero = () => {
  return (
    <div>
      <ReuseableHero
        text1={"GET IN TOUCH"}
        text2={"Let's Connect"}
        text3={
          "Have questions about membership, partnerships, or our programs? We'd love to hear from you."
        }
        backgroundImage={bgImg}
        rippleConfig={{
          positionClasses:
            "sm:top-80 sm:-right-28 -translate-x-1/2 -translate-y-1/2",
          opacity: "opacity-20",
          rotation: "rotate-[30deg]",
          borderColor: "border-white",
        }}
      />
    </div>
  );
};

export default Hero;
