import React from "react";

const Header = ({ text1, text2 }) => {
  return (
    <div className="py-10">
      <div className=" relative flex flex-col justify-center items-center h-full">
        <h2 className="text-center leading-tight transition-transform duration-300 font-bold text-3xl sm:text-4xl lg:text-5xl text-jci-navy mb-4">
          {text1}
        </h2>
        <h2 className="text-base text-center sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          {text2}
        </h2>
      </div>
    </div>
  );
};

export default Header;
