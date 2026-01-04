import React from "react";
import { RiCalendarLine, RiNotificationLine } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div class="relative bg-linear-to-br from-jci-blue to-jci-navy overflow-hidden py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
        <i className="text-6xl text-white">
          <RiCalendarLine />
        </i>
      </div>
      <h2 class="font-bold text-5xl text-center text-white mb-6">
        Never Miss an Event
      </h2>
      <p class="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
        Subscribe to our event calendar and get notifications about upcoming
        programs, workshops, and networking opportunities
      </p>
      {/* btns */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
        <button class="bg-jci-yellow text-jci-navy px-8 py-4 rounded-lg font-jakarta font-bold text-base hover:bg-jci-yellow/90 transition-all flex items-center gap-3 whitespace-nowrap cursor-pointer text-center mx-auto w-full justify-center">
          <i className="text-xl">
            <RiCalendarLine />
          </i>
          Subscribe to Calendar
        </button>
        <button class="bg-white/20 text-white px-8 py-4 rounded-lg font-jakarta font-bold text-base hover:bg-white/30 transition-all flex items-center gap-3 whitespace-nowrap cursor-pointer backdrop-blur-sm mx-auto w-full justify-center">
          <i className="text-xl">
            <RiNotificationLine />
          </i>
          Get Email Updates
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
