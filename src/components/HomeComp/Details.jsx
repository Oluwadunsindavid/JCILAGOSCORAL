import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiAwardLine, RiCommunityLine, RiTeamLine } from "react-icons/ri";

const Details = () => {
  const items = [
    { icon: < AiOutlineGlobal/>, number: "2000", word: "Year Founded" },
    { icon: < RiTeamLine />, number: "150+", word: "Current Membership" },
    { icon: <RiCommunityLine />, number: "100+", word: "Community Projects" },
    { icon: <RiAwardLine />, number: "18+", word: "National and International Awards" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-linear-to-br from-jci-navy via-jci-blue to-jci-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <i className=" text-2xl sm:text-3xl text-jci-yellow">{item.icon}</i>
              </div>
              <div className="font-jakarta font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-1 sm:mb-2">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-white/80 font-jakarta px-2">
                {item.word}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="max-w-md mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-jci-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="text-2xl sm:text-3xl text-jci-blue">
              <AiOutlineTeam />
            </i>
          </div>
          <h3 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3">
            Join the Movement
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            Connect with 200,000+ young leaders acr
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default Details;
