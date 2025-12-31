import React from "react";
import Header from "../../Header";
import kenya from "../../assets/kenya.webp";
import brazil from "../../assets/brazil.webp";
import india from "../../assets/india.webp";
import { RiMapPinLine } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      <h2 className="font-bold text-xs uppercase tracking-widest text-jci-teal text-center">
        SUCCESS STORIES
      </h2>
      <Header
        text1={"Projects Making a Difference"}
        text2={
          "Real stories of transformation from communities around the world"
        }
      />
      <div className="space-y-20">
        {/* 1ST Both sections */}
        <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-2xl">
          {/* image section */}
          <div className="w-full">
            <div className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
              <img
                src={kenya}
                className="w-full h-96 object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                alt=""
              />
            </div>
          </div>
          {/* text section */}
          <div className="w-full">
            <div className="p-6">
              {/* Location */}
              <div className="flex items-center gap-2 text-jci-teal mb-4">
                <i>
                  <RiMapPinLine />
                </i>
                <p className="font-semibold text-sm">Nairobi, Kenya</p>
              </div>
              {/* What was done in the location */}
              <p className=" font-bold text-3xl text-jci-navy mb-4">
                Clean Water Initiative - Kenya
              </p>
              {/* Number of thosoe who benefitted */}
              <div className="bg-jci-yellow/20 border-l-4 border-jci-yellow px-6 py-4 mb-6">
                <p className="font-bold text-lg text-jci-navy">
                  15,000 people gained access to clean water
                </p>
              </div>
              {/*  */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Partnered with local communities to install 25 water filtration
                systems across rural villages, reducing waterborne diseases by
                78%.
              </p>
            </div>
          </div>
        </div>
        {/* 2ND Both sections */}
        <div className="flex md:flex-row-reverse flex-col items-center rounded-2xl shadow-2xl">
          {/* image section */}
          <div className="w-full">
            <div className="w-full h-full object-cover md:rounded-r-2xl">
              <img
                src={brazil}
                className="w-full h-96 object-cover md:rounded-r-2xl rounded-t-2xl md:rounded-t-none"
                alt=""
              />
            </div>
          </div>
          {/* text section */}
          <div className="w-full">
            <div className="p-6">
              {/* Location */}
              <div className="flex items-center gap-2 text-jci-teal mb-4">
                <i>
                  <RiMapPinLine />
                </i>
                <p className="font-semibold text-sm">São Paulo, Brazil</p>
              </div>
              {/* What was done in the location */}
              <p className=" font-bold text-3xl text-jci-navy mb-4">
                Youth Employment Program - Brazil
              </p>
              {/* Number of thosoe who benefitted */}
              <div className="bg-jci-yellow/20 border-l-4 border-jci-yellow px-6 py-4 mb-6">
                <p className="font-bold text-lg text-jci-navy">
                  2,300 youth trained and employed
                </p>
              </div>
              {/*  */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Comprehensive skills training program connecting disadvantaged
                youth with employment opportunities in technology and
                entrepreneurship.
              </p>
            </div>
          </div>
        </div>
        {/* 3RD Both sections */}
        <div className="flex flex-col md:flex-row items-center rounded-2xl shadow-2xl">
          {/* image section */}
          <div className="w-full">
            <div className="w-full h-full object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
              <img
                src={india}
                className="w-full h-96 object-cover rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                alt=""
              />
            </div>
          </div>
          {/* text section */}
          <div className="w-full">
            <div className="p-6">
              {/* Location */}
              <div className="flex items-center gap-2 text-jci-teal mb-4">
                <i>
                  <RiMapPinLine />
                </i>
                <p className="font-semibold text-sm">Mumbai, India</p>
              </div>
              {/* What was done in the location */}
              <p className=" font-bold text-3xl text-jci-navy mb-4">
                Clean Water Initiative - Kenya
              </p>
              {/* Number of thosoe who benefitted */}
              <div className="bg-jci-yellow/20 border-l-4 border-jci-yellow px-6 py-4 mb-6">
                <p className="font-bold text-lg text-jci-navy">
                  15,000 people gained access to clean water
                </p>
              </div>
              {/*  */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Partnered with local communities to install 25 water filtration
                systems across rural villages, reducing waterborne diseases by
                78%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
