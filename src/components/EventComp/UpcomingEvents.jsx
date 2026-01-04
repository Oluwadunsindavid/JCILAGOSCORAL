import React from "react";
import Header from "../../Header";
import img from "../../assets/UpcomingImg.webp";
import img1 from "../../assets/workshop.webp";
import img2 from "../../assets/cslday.webp";
import img3 from "../../assets/publicSpeakingMasterclass.webp";
import img4 from "../../assets/internationalNetworkingGala.webp";
import img5 from "../../assets/susainabilitySummit.webp";
import {
  RiArrowRightLine,
  RiCalendarLine,
  RiGroupLine,
  RiMapPinLine,
  RiTimeLine,
} from "react-icons/ri";

const UpcomingEvents = () => {
  const details = [
    {
      img: img1,
      title: "Entrepreneurship Workshop Series",
      date: "March 22, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Innovation Hub, Downtown",
      about:
        "Three-day intensive leadership development conference featuring international speakers, workshops, and networking opportunities.",
    },
    {
      img: img2,
      title: "Community Service Day",
      date: "March 29, 2024",
      time: "8:00 AM - 4:00 PM",
      location: "Various Locations Citywide",
      about:
        "Join fellow members in making a difference through various community service projects including park cleanup, food distribution, and more.",
    },
    {
      img: img3,
      title: "Public Speaking Masterclass",
      date: "April 5, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Business Center Auditorium",
      about:
        "Develop your public speaking skills with expert trainers. Learn techniques for confident presentations and effective communication.",
    },
    {
      img: img4,
      title: "International Networking Gala",
      date: "April 12, 2024",
      time: "7:00 PM - 11:00 PM",
      location: "Luxury Hotel Ballroom",
      about:
        "Elegant evening of networking with JCI members from around the world. Includes dinner, awards ceremony, and entertainment.",
    },
    {
      img: img5,
      title: "Sustainability Summit",
      date: "April 19, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Eco Center",
      about:
        "Explore sustainable development practices and environmental initiatives. Panel discussions with experts and interactive sessions.",
    },
  ];
  return (
    <div className="py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500 ">
      <h1 className=" font-bold text-xs uppercase tracking-widest text-jci-teal text-center">
        UPCOMING EVENTS
      </h1>
      <Header
        text1={"Join Us at Our Next Event"}
        text2={"Mark your calendar and be part of transformative experiences"}
      />
      {/* UPPER SECTION */}
      <div className="flex flex-col sm:flex-row rounded-2xl bg-[#1562a3] sm:p-2">
        {/* LHS / IMAGE CONTAINER */}
        <div className="w-full ">
          <img
            src={img}
            className="w-full h-96 sm:h-full object-cover rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl"
          />
        </div>
        {/* RHS / TEXT CONTAINER */}
        <div className="w-full p-12 bg-[#1562a3] text-white flex flex-col justify-center rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl">
          <div className="inline-block bg-jci-yellow text-jci-navy px-4 py-2 rounded-full font-jakarta font-bold text-xs uppercase tracking-wider mb-6 self-start mx-auto sm:mx-0">
            Featured Event
          </div>
          <h3 className="font-black text-center sm:text-left text-2xl sm:text-4xl mb-6">
            National Leadership Conference 2025
          </h3>
          {/* icons */}
          <div className="space-y-4 mb-8 mx-auto sm:mx-0">
            <div className="flex items-center gap-3">
              <i className=" text-2xl text-jci-yellow">
                <RiCalendarLine />
              </i>
              <span className="text-lg">March 15-17, 2024</span>
            </div>
            <div className="flex items-center gap-3">
              <i className=" text-2xl text-jci-yellow">
                <RiTimeLine />
              </i>
              <span className="text-lg">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <i className=" text-2xl text-jci-yellow">
                <RiMapPinLine />
              </i>
              <span className="text-lg">
                Grand Convention Center, Capital City
              </span>
            </div>
            <div className="flex items-center gap-3">
              <i className=" text-2xl text-jci-yellow">
                <RiGroupLine />
              </i>
              <span className="text-lg">500+ Expected Attendees</span>
            </div>
          </div>
          {/* paragraph */}
          <p className=" text-base text-center sm:text-left text-white leading-relaxed mb-8">
            Hands-on workshop covering business planning, funding strategies,
            and startup essentials for aspiring entrepreneurs.
          </p>
          {/* btn */}
          <button className="sm:self-start bg-jci-yellow text-jci-navy px-8 py-4 rounded-lg justify-center font-bold text-base hover:bg-jci-yellow/90 transition-all flex items-center gap-3 whitespace-nowrap cursor-pointer">
            Register Now
            <i className="text-xl">
              <RiArrowRightLine />
            </i>
          </button>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {details.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl bg-white mt-12 shadow-xl hover:shadow-2xl group"
          >
            {/* LHS / IMAGE CONTAINER */}
            <div className="w-full group overflow-hidden">
              <img
                src={detail.img}
                className="w-full h-96 sm:h-full object-cover rounded-t-2xl object-top group-hover:scale-110 transition-transform "
              />
            </div>
            {/* RHS / TEXT CONTAINER */}
            <div className="w-full p-12 bg-white text-gray-600 flex flex-col justify-center rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl">
              <div className="font-bold text-2xl text-jci-navy mb-4">
                {detail.title}{" "}
              </div>
              {/* icons */}
              <div className="space-y-4 mb-8 ">
                <div className="flex items-center gap-3">
                  <i className=" text-2xl text-jci-teal">
                    <RiCalendarLine />
                  </i>
                  <span className="text-lg">{detail.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className=" text-2xl text-jci-teal">
                    <RiTimeLine />
                  </i>
                  <span className="text-lg">{detail.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className=" text-2xl text-jci-teal">
                    <RiMapPinLine />
                  </i>
                  <span className="text-lg">{detail.location}</span>
                </div>
              </div>
              {/* paragraph */}
              <p className=" text-base text-left text-gray-600 leading-relaxed mb-8">
                {detail.about}
              </p>
              {/* btn */}
              <button className="w-full bg-jci-blue text-white hover:text-jci-black text-center py-4 rounded-lg justify-center font-bold text-base hover:bg-jci-yellow/90 transition-all whitespace-nowrap cursor-pointer">
                Learn More & Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
