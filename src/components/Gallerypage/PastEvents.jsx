import React, { useState } from "react";
import at1 from "../../assets/1.webp";
import at2 from "../../assets/2.webp";
import at3 from "../../assets/3.webp";
import at4 from "../../assets/4.webp";
import at5 from "../../assets/5.webp";
import at6 from "../../assets/6.webp";
import at7 from "../../assets/7.webp";
import at8 from "../../assets/8.webp";
import at9 from "../../assets/9.webp";
import at10 from "../../assets/10.webp";
import at11 from "../../assets/11.webp";
import at12 from "../../assets/12.webp";

import { Link } from "react-router-dom";
import { RiEyeLine } from "react-icons/ri";

const details = [
  { image: at1, desc: "Leadership Conference 2024", category: "Events" },
  {
    image: at2,
    desc: "Community Clean-Up Drive",
    category: "Community Projects",
  },
  {
    image: at3,
    desc: "Public Speaking Workshop",
    category: "Training Sessions",
  },
  {
    image: at4,
    desc: "International Exchange Program",
    category: "Networking",
  },
  { image: at5, desc: "Education Support Initiative", category: "Events" },
  {
    image: at6,
    desc: "Gala Dinner & Awards Night",
    category: "Community Projects",
  },
  {
    image: at7,
    desc: "Entrepreneurship Bootcamp",
    category: "Training Sessions",
  },
  { image: at8, desc: "Health Awareness Campaign", category: "Networking" },
  { image: at9, desc: "Business Mixer Event", category: "Events" },
  { image: at10, desc: "Regional Summit", category: "Community Projects" },
  {
    image: at11,
    desc: "Leadership Development Program",
    category: "Training Sessions",
  },
  { image: at12, desc: "Food Bank Volunteer Day", category: "Networking" },
];

const PEG = () => {
  // For filter
  const [selectedCategory, setSelectedCategory] = useState("All Photos");

  // Filter Logic
  const filteredEvents =
    selectedCategory === "All Photos"
      ? details
      : details.filter((item) => item.category === selectedCategory);

  //   For the image modal
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // helper functions
  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === filteredEvents.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredEvents.length - 1 : prev - 1
    );
  };

  return (
    <div className="md:py-24 px-2 sm:px-24 xl:px-36 ">
      {/* px-24 md:px-36  */}
      {/* Title */}

      <div className="text-center font-medium text-[28px] sm:text-[33px] leading-relaxed text-[rgb(0,29,56)] transition-transform duration-300 pt-10 sm:pt-2">
        <h2 className="">Past Event Galleries</h2>
        <p className="text-[16px] text-gray-400 font-normal">
          Relive the memories from our sold-out events
        </p>
      </div>
      {/* Filter Buttons */}

      <section className="px-6 md:px-10 lg:px-16 xl:px-4 flex items-center justify-center flex-wrap py-12 bg-white gap-2 sm:gap-4">
        {[
          { name: "All Photos", Desc: "All Photos" },
          { name: "Events", Desc: "Events" },
          { name: "Community Projects", Desc: "Community Projects" },
          { name: "Training Sessions", Desc: "Training Sessions" },
          { name: "Networking", Desc: "Networking" },
        ].map((btn) => (
          <button
            key={btn.name}
            onClick={() => setSelectedCategory(btn.name)}
            className={`px-3 py-2 font-semibold transition-all duration-300 rounded-full m-1 flex items-center justify-center text-[16px] cursor-pointer ${
              selectedCategory === btn.name
                ? "bg-jci-blue text-white shadow-lg"
                : " bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            <i className="mr-2">{btn.icon}</i> <p>{btn.Desc}</p>
          </button>
        ))}
      </section>
      {/* Image Section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 pb-16">
        {filteredEvents.map((detail, index) => (
          <div
            onClick={() => openLightbox(index)}
            key={index}
            className="relative w-full h-64 overflow-hidden rounded-lg group"
          >
            {/* Image */}
            <img
              onClick={() => openLightbox(index)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              src={detail.image}
              alt=""
              loading="lazy"
            />

            {/* Blue overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-jci-navy/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
              <p className=" text-[16px] text-center text-white font-black">
                {detail.desc}
              </p>
              <div className="flex items-center justify-center gap-1 mt-2 text-yellow-400 cursor-pointer">
                <div
                  onClick={() => openLightbox(index)}
                  className="flex items-center gap-2"
                >
                  <i className="cursor-pointer">
                    <RiEyeLine />
                  </i>
                  <p className="cursor-pointer">View Full Size</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* modal */}
        {lightboxOpen && (
          <div
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
          >
            {/* Stop propagation so clicks on image don't close */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-gray-300"
              >
                &times;
              </button>

              {/* Image */}
              <img
                src={filteredEvents[currentIndex].image}
                alt={filteredEvents[currentIndex].desc}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Title */}
              <p className="text-center text-white mt-4 text-lg font-semibold">
                {filteredEvents[currentIndex].desc}
              </p>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
              >
                ‹
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PEG;
