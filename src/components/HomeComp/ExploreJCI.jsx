import React from "react";
import Header from "../../Header";
import { RiCalendarEventLine, RiGalleryLine, RiInformationLine, RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ExploreJCI = () => {
  return (
    <div className=" py-16 sm:py-20 lg:py-24 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      {/* Header */}
      <Header
        text1={"Explore JCI National"}
        text2={
          "Discover everything we offer to help you grow as a leader and make a difference"
        }
      />
      <div className="bg-re-200 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* ................................ABOUT................................. */}

        <Link to="/about">
          <div className=" bg-white hover:bg-blue-50 px-8 space-x-10 py-8 group rounded-xl shadow-xl h-88 md:h-80 lg:h-108">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-jci-blue to-blue-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="text-white text-2xl sm:text-3xl">
                <RiInformationLine />
              </i>
            </div>
            <h2 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3 group-hover:text-jci-blue transition-colors">
              About Us
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Learn about our mission, vision, and the impact we create globally
            </p>
            <div class="flex items-center text-jci-blue font-jakarta font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Learn More</span>
              <i className="text-lg">
                <FaArrowRight />
              </i>
            </div>
          </div>
        </Link>
        {/* ................................GALLERY................................. */}
        <Link to="/gallery">
          <div className=" bg-white hover:bg-yellow-50 px-8 space-x-10 py-8 group rounded-xl shadow-xl h-88 md:h-80 lg:h-108">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-jci-yellow to-yellow-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="text-white text-2xl sm:text-3xl">
                <RiGalleryLine />
              </i>
            </div>
            <h2 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3 group-hover:text-jci-blue transition-colors">
              Gallery
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Explore photos from our events, projects, and community activities
            </p>
            <div class="flex items-center text-jci-blue font-jakarta font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Learn More</span>
              <i className="text-lg">
                <FaArrowRight />
              </i>
            </div>
          </div>
        </Link>
        {/* ................................EVENT................................ */}
        <Link to="/event">
          <div className=" bg-white hover:bg-emerald-50 px-8 space-x-10 py-8 group rounded-xl shadow-xl h-88 md:h-80 lg:h-108">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="text-white text-2xl sm:text-3xl">
                <RiCalendarEventLine />
              </i>
            </div>
            <h2 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3 group-hover:text-jci-blue transition-colors">
              Events
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Discover upcoming conferences, workshops, and networking
              opportunities
            </p>
            <div class="flex items-center text-jci-blue font-jakarta font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Learn More</span>
              <i className="text-lg">
                <FaArrowRight />
              </i>
            </div>
          </div>
        </Link>
        {/* ................................CONTACT................................. */}
        <Link to="/contact">
          <div className=" bg-white hover:bg-pink-50 px-8 space-x-10 py-8 group rounded-xl shadow-xl h-88 md:h-80 lg:h-108">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className="text-white text-2xl sm:text-3xl">
                <RiMailLine />
              </i>
            </div>
            <h2 className="font-bold text-xl sm:text-2xl text-jci-navy mb-3 group-hover:text-jci-blue transition-colors">
              Contact
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Get in touch with us for inquiries, partnerships, or support
            </p>
            <div class="flex items-center text-jci-blue font-jakarta font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
              <span>Learn More</span>
              <i className="text-lg">
                <FaArrowRight />
              </i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ExploreJCI;
