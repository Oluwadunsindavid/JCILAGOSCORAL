import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "./assets/logo.PNG";
import darkLogo from "./assets/darkLogo.PNG";
import { IoMdClose } from "react-icons/io";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  // Auto-close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setVisible(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowNav(currentScroll > 50);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // JCI Brand Typography: Plus Jakarta Sans is required for all communications [cite: 103, 108]
  const navLink = `text-lg md:text-sm px-3 py-4 md:py-2 font-medium transition-all duration-300 hover:text-jci-teal ${
    showNav ? "text-jci-black" : "text-white"
  }`;

  return (
    <>
      <nav
        className={`w-full flex justify-between items-center px-6 md:px-10 lg:px-16 xl:px-40 z-50 transition-all duration-500 ${
          showNav
            ? "fixed top-0 bg-jci-white py-2 shadow-lg"
            : "absolute top-0 bg-transparent pt-8 pb-4"
        }`}
      >
        {/* Logo - Stays visible always */}
        {/* Logo Area */}
        <Link to="/" className="z-60 font-bold">
          {visible ? (
            /* Dark version of logo when menu is open */
            <div className="w-20 h-20 animate-disk">
              <img
                src={darkLogo}
                alt="JCI Logo"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            /* Original image logo when menu is closed */
            <div className="w-20 h-20 animate-disk">
              <img
                src={logo}
                alt="JCI Logo"
                className="w-full h-full object-contain"
              />
            </div>
          )}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          {["home", "about", "gallery", "event", "contact"].map((item) => (
            <NavLink
              key={item}
              to={item === "home" ? "/" : `/${item}`} // If it's home, point to /
              // className={navLink}
              // UPDATE TO ISACTIVE

              className={({ isActive }) =>
                `text-lg md:text-sm px-3 py-4 md:py-2 font-medium transition-all duration-300
     ${isActive ? "text-jci-black" : showNav ? "text-jci-navy" : "text-white"}
     hover:text-jci-blue`
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="px-6 py-2.5 bg-jci-yellow text-jci-navy font-jakarta font-bold text-sm rounded-lg hover:bg-jci-yellow/90 transition-all shadow-lg cursor-pointer">
            JOIN NOW
          </button>
        </div>

        {/* Mobile Menu Toggle Icon */}
        <div
          onClick={() => setVisible(!visible)}
          className="md:hidden z-60 cursor-pointer transition-transform duration-300 active:scale-90"
        >
          {visible ? (
            <IoMdClose size={32} className="text-white mt-6 mr-4" />
          ) : (
            <BiMenuAltRight size={32} className="text-jci-black" />
          )}
        </div>

        {/* Full Screen Mobile Menu - Left to Right Slide */}
        <div
          className={`fixed inset-0 bg-jci-black z-55 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out md:hidden ${
            visible ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Centered Navigation Links */}
          <div className="flex flex-col items-center space-y-6 text-center">
            {["home", "about", "gallery", "event", "contact"].map((item) => (
              <NavLink
                key={item}
                to={item === "home" ? "/" : `/${item}`}
                // If it's home, point to
                onClick={() => setVisible(false)}
                // className="text-xl fontbold text-white hover:text-jci-teal transition-colors"
                // UPDATE TO ISACTIVE
                className={({ isActive }) =>
                  `text-xl font-bold transition-colors
     ${isActive ? "text-jci-blue" : "text-white"}
     hover:text-jci-blue`
                }
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            ))}

            <button className="mt-8 px-10 py-4 bg-jci-yellow text-jci-navy font-jakarta font-bold text-lg rounded-full shadow-2xl">
              JOIN NOW
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
