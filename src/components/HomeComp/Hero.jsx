import React from "react";
import BGImg from "../../assets/homeHero.webp";
import { RiTeamLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center p-4"
      style={{
        backgroundImage: `url(${BGImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
        }}
      ></div>
      {/* Text in the Hero section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center w-full">
        <h1 className=" font-bold text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight py-6">
          Empowering Young Leaders <br />
          <span className="text-jci-yellow">To Change The World</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Join a global network of passionate individuals creating positive
          impact in communities worldwide
        </p>
        {/* The box in the Hero section */}
        <div className="max-w-md mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-jci-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="text-2xl sm:text-3xl text-jci-blue">
                <RiTeamLine />
              </i>
            </div>
            <h3 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3">
              Join the Movement
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Connect with 200,000+ young leaders acr
            </p>
            <button className="flex items-center justify-center gap-6 w-full px-6 sm:px-8 py-3 sm:py-4 bg-jci-yellow text-jci-navy font-bold text-sm sm:text-base rounded-lg hover:bg-jci-yellow/90 transition-all shadow-lg whitespace-nowrap cursor-pointer">
              Start Your Journey
              <br /> <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* The bounce */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
