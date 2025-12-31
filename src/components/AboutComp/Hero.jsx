import React from "react";
import BGImg from "../../assets/abtHero.jpg";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center pt-40 p-4 py-16 sm:py-28 md:py-36 lg:py-40 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      {/* Blue overlay */}
      <div className="absolute inset-0">
        <img
          src={BGImg}
          alt="JCI International Conference"
          className="w-full h-full object-cover objecttop"
        />
        {/* blue */}
        <div className="absolute inset-0 bg-jci-navy/85"></div>
      </div>
      {/* circles */}
      <div
        className="absolute top-25 right-18 w-96 h-96 pointer-events-none"
        style={{ transform: "rotate(15deg)", opacity: "0.12" }}
        // class="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none"
      >
        <div className="absolute inset-0 border-4 border-white rounded-full"></div>
        <div className="absolute inset-8 border-4 border-white rounded-full"></div>
        <div className="absolute inset-16 border-4 border-white rounded-full"></div>
        <div className="absolute inset-24 border-4 border-white rounded-full"></div>
      </div>
      {/* content */}
      <div className="relative max-w-4xl">
        <h2 className="font-bold text-xs uppercase tracking-widest text-jci-teal mb-6 text-center sm:text-left">
          ABOUT JCI NATIONAL
        </h2>
        <p className="font-black text-3xl sm:text-5xl md:text-7xl text-center sm:text-left text-white leading-tight mb-8">
          Empowering Young Leaders to Create Positive Change
        </p>
        <p className="text-2xl text-center sm:text-left text-white/80 leading-relaxed mb-8">
          JCI (Junior Chamber International) is a global community of young
          active citizens aged 18-40 who share the belief that in order to
          create lasting positive change, we must invest in improving ourselves
          and the world around us.
        </p>
        {/* Details div */}
        <div className="flex flex-col sm:flex-row items-center gap-8">
          <div>
            <div className="font-black text-5xl text-jci-yellow mb-2">200K+</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Active Members
            </div>
          </div>
          <div>
            <div className="font-black text-5xl text-jci-yellow mb-2">124</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Countries
            </div>
          </div>
          <div>
            <div className="font-black text-5xl text-jci-yellow mb-2">5K+</div>
            <div className="text-sm text-white/70 uppercase tracking-wider">
              Local Chapter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
