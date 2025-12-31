import React from "react";
import bg from "../../assets/bg.png";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";

const MakeYourMark = () => {
  return (
    <section className="relative h-150 overflow-hidden px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      {/* Blue overlay */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt="JCI International Conference"
          className="w-full h-full object-cover objecttop"
        />
        {/* blue */}
        <div className="absolute inset-0 bg-jci-blue/80"></div>
      </div>
      {/* circles */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
        style={{ transform: "rotate(15deg)", opacity: "0.12" }}
      >
        <div className="absolute inset-0 border-4 border-white rounded-full"></div>
        <div className="absolute inset-8 border-4 border-white rounded-full"></div>
        <div className="absolute inset-16 border-4 border-white rounded-full"></div>
        <div className="absolute inset-24 border-4 border-white rounded-full"></div>
      </div>
      {/* content of this page */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex flex-col justify-between py-20">
        {/* upper section */}
        <div className="text-center sm:text-left">
          <h2 className=" font-bold text-3xl sm:text-5xl md:text-7xl text-white leading-tight max-w-2xl">
            Ready to Make <br /> Your Mark?
          </h2>
        </div>
        {/* lower section */}
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-end sm:justify-between">
          <Link
            className="group bg-white px-8 py-5 rounded-full flex items-center gap-4 hover:scale-105 transition-all shadow-2xl cursor-pointer"
            to="/contact"
          >
            <span className=" font-bold text-lg text-jci-navy whitespace-nowrap">
              Apply Now
            </span>
            <div className="w-14 h-14 bg-jci-yellow rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
              <i className="text-white text-2xl">
                <RiArrowRightLine />
              </i>
            </div>
          </Link>
          <div className="text-center sm:text-right max-w-lg">
            <p className="text-xl text-white/95 leading-relaxed">
              Join a global network of changemakers. <br /> Applications open
              year-round.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeYourMark;
