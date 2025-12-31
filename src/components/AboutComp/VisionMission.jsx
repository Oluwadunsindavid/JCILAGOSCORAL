import React from "react";
import { RiCompass3Line, RiEyeLine } from "react-icons/ri";

const VisionMission = () => {
  const items = [
    {
      icon: <RiCompass3Line />,
      header: "Our Mission",
      content:
        "To provide leadership development opportunities that empower young people to create positive change.",
      // Adding specific color classes here
      bgColor: "from-jci-blue to-jci-navy",
      iconColor: "from-jci-blue to-jci-teal",
    },
    {
      icon: <RiEyeLine />,
      header: "Our Vision",
      content: "To be the foremost global network of young leaders.",
      // You can change these to "from-red-500 to-red-700" or "from-green-500 to-green-700"
      bgColor: "from-jci-teal to-jci-blue ",
      iconColor: "from-jci-navy to-jci-blue ",
    },
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 ">
        {items.map((item, index) => (
          <div
            key={index}
            /* We use template literals to inject the item.bgColor dynamically */
            className={`group shadow-xl bg-linear-to-br ${item.bgColor} rounded-3xl p-12 text-white transition-all duration-500 hover:-translate-y-2`}
          >
            {/* icon */}
            <div
              className={`w-14 h-14 sm:w-20 sm:h-20 bg-linear-to-br ${item.iconColor} rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
            >
              <i className="text-white text-2xl sm:text-3xl">{item.icon}</i>
            </div>

            {/* header - Note: Changed text color to white to be readable on the new backgrounds */}
            <h2 className="font-bold text-2xl sm:text-4xl text-white mb-6">
              {item.header}
            </h2>

            {/* content - Note: Changed text to white/90 for better contrast on dark colors */}
            <p className="text-sm sm:text-lg opacity-90 text-white/90 mb-4 sm:mb-6 leading-relaxed">
              {/* class="font-jakarta " */}
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionMission;
