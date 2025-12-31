import React from "react";
import Header from "../../Header";
import { RiBuildingLine, RiCheckboxCircleLine, RiFundsLine, RiUserHeartLine } from "react-icons/ri";

const Impact = () => {
  const works = [
    { number: 1, goal: "No Poverty", bgColor: "bg-red-600" },
    { number: 3, goal: "Good Health", bgColor: "bg-green-600" },
    { number: 4, goal: "Quality Education", bgColor: "bg-red-700" },
    { number: 5, goal: "Gender Equality", bgColor: "bg-orange-600" },
    { number: 8, goal: "Decent Work", bgColor: "bg-red-800" },
    { number: 10, goal: "Reduced Inequalities", bgColor: "bg-pink-600" },
    { number: 13, goal: "Climate Action", bgColor: "bg-green-700" },
    { number: 17, goal: "Partnerships", bgColor: "bg-jci-navy" },
  ];

  //   For KEY RESULTS
  const items = [
    {
      icon: <RiUserHeartLine />,
      Header: "2.5M+",
      Content: "People Reached",
    },
    {
      icon: <RiCheckboxCircleLine />,
      Header: "8,500+",
      Content: "Projects Completed",
    },
    {
      icon: <RiBuildingLine />,
      Header: "450+",
      Content: "Partner Organizations",
    },
    ,
    {
      icon: <RiFundsLine />,
      Header: "$12M+",
      Content: "Impact Investment",
    },
  ];
  return (
    <div className="py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500 bg-gray-50">
      <h1 className=" font-bold text-xs uppercase tracking-widest text-jci-teal text-center">
        OUR IMPACT
      </h1>
      <Header
        text1={"Aligned with UN Sustainable Development Goals"}
        text2={
          "Our initiatives directly contribute to achieving the global goals for sustainable development"
        }
      />
      {/* Works done */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mb-24">
        {works.map((work, index) => (
          <div
            key={index}
            className={`${work.bgColor} aspect-square rounded-xl flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform cursor-pointer shadow-lg`}
          >
            <div className=" font-black text-4xl text-white mb-2">
              {work.number}
            </div>
            <div className="font-semibold text-xs text-white text-center leading-tight">
              {work.goal}
            </div>
          </div>
        ))}
      </div>

      {/* KEY RESULTS */}
      <div className="bg-linear-to-br from-jci-blue to-jci-navy rounded-3xl p-16">
        <h2 className=" font-bold text-4xl text-white text-center mb-12">
          Key Results 2024
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, index) => (
            <div key={index} className="text-center transition-transform">
              {/* icon */}
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className=" text-5xl text-white transition-colors">
                  {item.icon}
                </i>
              </div>
              {/*  */}
              <h2 className="text-5xl font-black text-white mb-3">{item.Header}</h2>
              <p className=" text-sm text-white/80 uppercase tracking-wider">
                {item.Content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
