import React from "react";
import darklogo from "./assets/123.PNG";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiLinkedinFill,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { BiHeart } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-jci-navy relative overflow-hidden px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500" >
      {/* Circles */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-48 h-48 border-4 border-white rounded-full"
          style={{ transform: "rotate(15deg)" }}
        ></div>
        <div
          className="absolute top-32 left-16 w-32 h-32 border-4 border-white rounded-full"
          style={{ transform: "rotate(15deg)" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-56 h-56 border-4 border-white rounded-full"
          style={{ transform: "rotate(15deg)" }}
        ></div>
        <div
          className="absolute bottom-32 right-28 w-40 h-40 border-4 border-white rounded-full"
          style={{ transform: "rotate(15deg)" }}
        ></div>
      </div>
      {/* Content */}
      <div className="max-w-7xl mx-auto  py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* 1st section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 object-cover">
              <img src={darklogo} className="w-full h-full" alt="" />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering young leaders to create positive change in their
              communities and around the world.
            </p>
          </div>
          {/* 2nd section */}
          <div>
            <h3 className=" font-bold text-base sm:text-lg mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to="/about"> About Us</Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to="/gallery"> Gallery</Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to="/events"> Events</Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
          {/* 3rd section */}
          <div>
            <h3 className=" font-bold text-base sm:text-lg mb-4 text-white">
              Get Involved
            </h3>
            <ul className="space-y-2.5">
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to="">Become a Member </Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to=""> Volunteer</Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to=""> Donate </Link>
              </li>
              <li className="text-white/80 hover:text-white transition-colors text-sm cursor-pointer">
                <Link to=""> Partner With Us</Link>
              </li>
            </ul>
          </div>
          {/* 4th section */}
          <div>
            <h3 className=" font-bold text-base sm:text-lg mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <i className="mt-0.5 flex-shink-0">
                  <RiMailLine />
                </i>
                <span className="break-all">Jcilagoscoral@jci.ng</span>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <i className="mt-0.5 flex-shink-0">
                  <RiPhoneLine />
                </i>
                <span className="break-all"> 08062806026</span>
              </li>
              <li className="flex items-start gap-2 text-white/80 text-sm">
                <i className="mt-0.5 flex-shink-0">
                  <RiMapPinLine />
                </i>
                <span className="break-all">
                  Golden Gate Restaurant, Alfred Rewane Rd (former Kingsway Rd)
                  OR 25B Golden Gate Complex, Glover Rd, Ikoyi, Lagos
                </span>
              </li>
            </ul>
            {/* socials */}
            <div className="flex gap-3 mt-6">
              <Link
                to="https://facebook.com"
                className="w-9 h-9 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <i className="text-base">
                  <RiFacebookFill />
                </i>
              </Link>
              <Link
                to="https://x.com"
                className="w-9 h-9 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <i className="text-base">
                  <RiTwitterXFill />
                </i>
              </Link>
              <Link
                to="https://youtube.com"
                className="w-9 h-9 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <i className="text-base">
                  <RiYoutubeFill />
                </i>
              </Link>
              <Link
                to="https://linkedin.com"
                className="w-9 h-9 flex items-center justify-center bg-white/10 text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer"
              >
                <i className="text-base">
                  <RiLinkedinFill />
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------ */}
      <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70 pb-12">
        <p className="text-center sm:text-left">
          © 2025 JCI National. All rights reserved.
        </p>
        <Link
          to="https://x.com/OluwadunsinDav1"
          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
        >
          Built with <BiHeart /> by Dave
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
