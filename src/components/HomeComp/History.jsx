import React, { useEffect, useState } from "react";
import Header from "../../Header";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

// Images
import img1 from "../../assets/Pres1.jpeg";
import img2 from "../../assets/Pres2.jpeg";
import img3 from "../../assets/Pres3.jpeg";
import img4 from "../../assets/pres4.jpeg";
import img5 from "../../assets/pres5.jpeg";
import img6 from "../../assets/pres6.jpeg";
import img7 from "../../assets/pres7.jpeg";
import img8 from "../../assets/pres8.jpeg";
import img9 from "../../assets/pres9.jpeg";
import img10 from "../../assets/pres10.jpeg";
import img11 from "../../assets/pres11.jpeg";
import img12 from "../../assets/pres12.jpeg";
import img13 from "../../assets/pres13.jpeg";
import img14 from "../../assets/pres14.jpeg";
import img15 from "../../assets/pres15.jpeg";
import img16 from "../../assets/pres16.jpeg";
import img17 from "../../assets/pres17.jpeg";
import img18 from "../../assets/pres18.jpeg";
import img19 from "../../assets/pres19.jpeg";
import img20 from "../../assets/pres20.jpeg";
import img21 from "../../assets/pres21.jpeg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

const History = () => {
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [current, setCurrent] = useState(1);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  /* ---------- RESPONSIVE ---------- */
  useEffect(() => {
    const updateView = () => {
      const view = window.innerWidth >= 1024 ? 3 : 1;
      setSlidesPerView(view);
      setCurrent(view);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  /* ---------- CLONES FOR INFINITE ---------- */
  const extendedImages = [
    ...images.slice(-slidesPerView),
    ...images,
    ...images.slice(0, slidesPerView),
  ];

  /* ---------- AUTOSWIPE ---------- */
  useEffect(() => {
    if (paused || lightboxOpen) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [current, paused, lightboxOpen, slidesPerView]);

  /* ---------- SNAP WHEN HITTING CLONES ---------- */
  useEffect(() => {
    if (!isTransitioning) return;

    const maxIndex = images.length + slidesPerView;

    if (current >= maxIndex) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(slidesPerView);
      }, 700);
    }

    if (current < slidesPerView) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(images.length);
      }, 700);
    }
  }, [current, isTransitioning, slidesPerView, images.length]);

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => setIsTransitioning(true));
    }
  }, [isTransitioning]);

  /* ---------- CONTROLS ---------- */
  const nextSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev + slidesPerView);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setCurrent((prev) => prev - slidesPerView);
  };

  /* ---------- LIGHTBOX ---------- */
  const openLightbox = (extendedIndex) => {
    const realIndex =
      (extendedIndex - slidesPerView + images.length) % images.length;

    setActiveIndex(realIndex);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextLightbox = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prevLightbox = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  /* ---------- BUTTON STYLE ---------- */
  const navBtn =
    "bg-white text-jci-blue p-3 sm:p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300";

  return (
    <div className="py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40">
      <Header text1={"Coral in history"} />

      {/* ---------- CAROUSEL ---------- */}
      <div
        className="relative mt-10 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={`flex ${
            isTransitioning
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${(current * 100) / slidesPerView}%)`,
          }}
        >
          {extendedImages.map((img, index) => (
            <div key={index} className="min-w-full lg:min-w-[33.3333%] px-2">
              <img
                src={img}
                loading="lazy"
                alt=""
                onClick={() => openLightbox(index)}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={prevSlide}
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${navBtn}`}
        >
          <FiChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className={`absolute right-3 top-1/2 -translate-y-1/2 ${navBtn}`}
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* ---------- LIGHTBOX ---------- */}
      {lightboxOpen && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-white text-jci-blue p-2 rounded-full shadow-lg hover:scale-110 transition"
            >
              <FiX size={22} />
            </button>

            <img
              src={images[activeIndex]}
              loading="lazy"
              alt=""
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />

            <button
              onClick={prevLightbox}
              className={`absolute left-4 top-1/2 -translate-y-1/2 ${navBtn}`}
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={nextLightbox}
              className={`absolute right-4 top-1/2 -translate-y-1/2 ${navBtn}`}
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
