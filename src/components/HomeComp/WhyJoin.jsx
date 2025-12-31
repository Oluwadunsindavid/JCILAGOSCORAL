import React from "react";
import Header from "../../Header";
import {
  RiBriefcase2Line,
  RiCalendarEventLine,
  RiGlobalLine,
  RiLightbulbLine,
  RiTeamLine,
  RiTrophyLine,
} from "react-icons/ri";

const WhyJoin = () => {
  const items = [
    {
      icon: <RiGlobalLine />,
      header: "Global Network",
      content:
        "Connect with 200,000+ young leaders across 100+ countries and expand your international reach.",
    },
    {
      icon: <RiLightbulbLine />,
      header: "Leadership Development",
      content:
        "Access world-class training programs designed to enhance your leadership capabilities.",
    },
    {
      icon: <RiTrophyLine />,
      header: "Recognition & Awards",
      content:
        "Gain recognition for your achievements and contributions to community development.",
    },
    {
      icon: <RiBriefcase2Line />,
      header: "Career Growth",
      content:
        "Accelerate your professional development through mentorship and networking opportunities.",
    },
    {
      icon: <RiTeamLine />,
      header: "Community Impact",
      content:
        "Lead meaningful projects that create lasting positive change in your local community.",
    },
    {
      icon: <RiCalendarEventLine />,
      header: "Exclusive Events",
      content:
        "Attend international conferences, workshops, and networking events around the world.",
    },
  ];
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      <Header
        text1={"Why Join JCI?"}
        text2={
          "Discover the benefits of becoming part of the world's largest leadership development organization"
        }
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className=" bg-linear-to-br from-gray-50 to-blue-50 px-8 space-x-10 py-8 group rounded-xl shadow-xl "
          >
            {/* icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-jci-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="text-white text-2xl sm:text-3xl">{item.icon}</i>
            </div>
            {/* header */}
            <h2 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3 group-hover:text-jci-blue transition-colors">
              {item.header}
            </h2>
            {/* content */}
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoin;
