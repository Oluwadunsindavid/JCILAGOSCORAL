import React from "react";
import President from "../../assets/President.jpg";
import Header from "../../Header";

const Welcome2026 = () => {
  return (
    <div className="py-8 sm:py-10 lg:py-12 px-6 md:px-10 lg:px-16 xl:px-40 transition-all duration-500">
        <Header text1={"Message from Our President"}/>
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SECTION */}
        <div>
          {/* President Image */}
          <img
            src={President}
            loading="lazy"
            alt="President Portrait"
            className="w-full max-w-md rounded-md shadow-lg mb-8 bg-gray-200 mx-auto"
          />

          <h2 className="text-2xl font-bold mb-4">
            Dear Esteemed Members <br />
            of JCI Lagos Coral,
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed text-justify">
            As we step into this new year, I want to sincerely appreciate every
            member of this great organization. Your dedication, resilience, and
            commitment to service continue to define the true spirit of JCI
            Lagos Coral.
          </p>

          <p className="text-gray-700 leading-relaxed text-justify">
            The year ahead calls us to move as One Pulse – united in purpose,
            aligned in vision, and connected by our shared values. Building on
            this unity, we are reminded of the need to continually Elevate
            ourselves: in leadership, in service, and in the standards we uphold
            as JCI members.
          </p>
        </div>

        {/* RIGHT SECTION */}
        <div className="text-gray-800 leading-relaxed text-justify space-y-6">
          <p>
            As we look forward, this new season presents us with an opportunity
            to Leverage our strengths, Integrate our diverse talents, and Focus
            our energy on what truly matters, so that together, we can Transform
            ideas into impact. This year calls us to deepen collaboration,
            strengthen unity, and remain Purpose-Driven in all that we do. When
            we are intentional and Purpose-Driven, our collective efforts do not
            just create change – they Amplify it.
          </p>

          <p className=" text-justify">
            This year calls us to strengthen accountability, and show up for one
            another with clarity and commitment. Every member matters. Every
            contribution counts. When we work together with clarity and shared
            intent, we position ourselves to transform ideas into action and
            impact into lasting legacy.
          </p>

          <p className=" text-justify">
            I look forward to a year of growth, service, and shared progress
            with each of you.
          </p>

          <p className=" text-justify">
            As One Pulse, we LIFT: Leveraging strength, Integrating Purpose,
            Focusing action and Transforming lives. Here’s to a year of Unity,
            Purpose, and Amplified Impact.
          </p>

          <p className=" text-justify">
            Happy New Year once again – and cheers to all that we will achieve
            together.
          </p>

          <div className="pt-6">
            <p className="font-semibold">With warm regards,</p>
            <p className="font-bold mt-2">JCIN Amb. Racheal C. John Emeyazia</p>
            <p className="text-sm font-bold">Local Organization President</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome2026;
