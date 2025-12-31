import React from "react";
import Header from "../../Header";
import {
  RiGlobalLine,
  RiHandHeartLine,
  RiLightbulbLine,
  RiTeamLine,
} from "react-icons/ri";

const OurCores = () => {
  const items = [
    {
      icon: <RiHandHeartLine />,
      Header: "Service",
      Content: "Commitment to improving our communities",
    },
    {
      icon: <RiTeamLine />,
      Header: "Fellowship",
      Content: "Building lasting friendships globally",
    },
    {
      icon: <RiLightbulbLine />,
      Header: "Leadership",
      Content: "Developing skills to lead change",
    },
    ,
    {
      icon: <RiGlobalLine />,
      Header: "International",
      Content: "Connecting cultures and perspectives",
    },
  ];
  return (
    <div className=" relative py-16 sm:py-20 lg:py-24 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      {/* circles */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 sm:w-96 h-56 sm:h-96 pointer-events-none"
        style={{ transform: "rotate(15deg)", opacity: "0.05" }}
      >
        <div className="absolute inset-0 border-4 border-blue-500 rounded-full"></div>
        <div className="absolute inset-8 border-4 border-blue-500 rounded-full"></div>
        <div className="absolute inset-16 border-4 border-blue-500 rounded-full"></div>
        <div className="absolute inset-24 border-4 border-blue-500 rounded-full"></div>
      </div>
      <Header text1={"Our Core Values"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="text-center group hover:scale-105 transition-transform"
          >
            {/* icon */}
            <div className="w-24 h-24 bg-jci-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-jci-blue group-hover:shadow-xl transition-all">
              <i className=" text-5xl text-jci-blue group-hover:text-white transition-colors">
                {item.icon}
              </i>
            </div>
            {/*  */}
            <h2 className="font-jakarta font-bold text-xl text-jci-navy mb-3">
              {item.Header}
            </h2>
            <p className="font-jakarta text-sm text-gray-600">{item.Content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCores;
