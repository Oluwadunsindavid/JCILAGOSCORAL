import React from "react";
import Header from "../../Header";
import sarah from "../../assets/sarah.webp";
import chen from "../../assets/chen.webp";
import emily from "../../assets/emily.webp";

import { RiStarFill } from "react-icons/ri";

const Stories = () => {
  const items = [
    {
      image: sarah,
      name: "Sarah Johnson",
      position: "Chapter President, New York",
      content:
        '"JCI transformed my leadership skills and connected me with incredible people who share my passion for making a difference."',
    },
    {
      image: chen,
      name: "Michael Chen",
      position: "Active Member, San Francisco",
      content:
        '"The networking opportunities and leadership training I received through JCI have been invaluable for my career growth."',
    },
    {
      image: emily,
      name: "Emily Rodriguez",
      position: "Project Director, Miami",
      content:
        '"Being part of JCI gave me the platform to lead community projects that have impacted thousands of lives."',
    },
  ];
  return (
    <div className="py-16 sm:py-20 lg:py-24 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500 bg-linear-to-br from-gray-50 to-blue-50">
      <Header
        text1={"Member Stories"}
        text2={
          "Hear from our members about their transformative experiences with JCI"
        }
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-xl">
            {/* profile section */}
            <div className="flex items-center gap-2">
              {/* profile img */}
              <div className="w-16 h-16 object-cover">
                <img
                  src={item.image}
                  className="rounded-full w-full h-full"
                  loading="lazy"
                  alt="sarah"
                />
              </div>
              {/* profile name and position */}
              <div>
                <h1 className="text-jci-navy font-bold text-lg">{item.name}</h1>
                <p className="text-sm text-gray-600">{item.position}</p>
              </div>
            </div>
            {/* Rating */}
            <div className="flex text-yellow-400 gap-2 py-6">
              <RiStarFill /> <RiStarFill /> <RiStarFill /> <RiStarFill />{" "}
              <RiStarFill />
            </div>
            {/* What was said */}
            <div>
              <i className="text-gray-700 leading-relaxed text-sm sm:text-lg">
                {item.content}
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
