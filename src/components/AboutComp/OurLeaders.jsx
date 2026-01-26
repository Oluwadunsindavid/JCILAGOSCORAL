import React from "react";
import Header from "../../Header";
import presido from "../../assets/Presido.jpg";
import vp from "../../assets/VP.jpg";
import gensec from "../../assets/Gen Sec.jpg";
import treasurer from "../../assets/Treasurer.jpg";

const OurLeaders = () => {
  const items = [
    { image: presido, name: "Michael Chen", position: "National President" },
    { image: vp, name: "Sarah Johnson", position: "Vice President" },
    { image: gensec, name: "Aisha Patel", position: "Secretary General" },
    { image: treasurer, name: "David Martinez", position: "Treasurer" },
  ];
  return (
    <div className="py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
      <h2 className="font-bold text-xs uppercase tracking-widest text-jci-teal text-center">
        LEADERSHIP TEAM
      </h2>
      <Header
        text1={"Meet Our National Board"}
        text2={
          "Dedicated young leaders driving positive change across the nation"
        }
      />
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mx-auto place-items-center">
        {items.map((item, index) => (
          <div key={index}>
            <div className="w-full h-full object-cover mb-4">
              <img src={item.image} loading="lazy" className="rounded-2xl" />
            </div>
            <h2 className="font-jakarta font-bold text-xl text-jci-navy mb-2">
              {item.name}{" "}
            </h2>
            <h4 className="font-jakarta text-sm text-jci-teal font-semibold">
              {item.position}{" "}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLeaders;
