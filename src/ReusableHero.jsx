// Use for the event page and contact page Hero sections
import React from "react";
import JCIRipples from "./JCIRipples";

const ReuseableHero = ({
  text1,
  text2,
  text3,
  backgroundImage,
  rippleConfig,
}) => {
  return (
    <div
      className="relative w-full h-full lg:h-137.5 bg-cover bg-center py-16 sm:py-20 lg:py-24 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0">
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-jci-blue/85 via-jci-navy/80 to-jci-navy/85"></div>
      </div>
      {/* circles */}
      <JCIRipples {...rippleConfig} />
      {/* content */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
        <h1 className="font-bold text-xs uppercase tracking-widest text-jci-yellow mb-6 pt-12">
          {text1}
        </h1>
        <h2 className="font-black text-3xl sm:text-5xl md:text-7xl text-white leading-tight mb-8">
          {text2}
        </h2>
        <h3 className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto">
          {text3}
        </h3>
      </div>
    </div>
  );
};

export default ReuseableHero;
