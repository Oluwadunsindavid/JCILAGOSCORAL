import { FiX } from "react-icons/fi";
import { useUI } from "./UIContext";
import { Country, State } from "country-state-city";
import { useState } from "react";


const Modal = () => {
  const { modalOpen, setModalOpen } = useUI();

  // for country and state

  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);

  const countries = Country.getAllCountries();
  const states = country ? State.getStatesOfCountry(country.isoCode) : [];


  if (!modalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={() => setModalOpen(false)}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative px-6 py-5 border-b bg-jci-teal text-white">
          <h2 className="text-center leading-tight transition-transform duration-300 font-bold text-3xl sm:text-4xl lg:text-5xl text-jci-black">
            Contact Us
          </h2>

          {/* Close */}
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div
          className="
            p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-80px)]
            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          <form className="space-y-5">
            {/* -----------------------------FIRST NAME------------------------------- */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                placeholder="John"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
              />
            </div>
            {/* -----------------------------LAST NAME------------------------------- */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
              />
            </div>
            {/* -----------------------------EMAIL------------------------------- */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
              />
            </div>
            {/* -----------------------------PHONE------------------------------- */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="07012345678"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
              />
            </div>
            {/* -----------------------------COUNTRY------------------------------- */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                Country *
              </label>
              <select className="mt-2 w-full rounded-lg border px-4 py-3 bg-white focus:ring-2 focus:ring-jci-teal focus:outline-none">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Membership</option>
                <option>Support</option>
              </select>
            </div> */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country *
              </label>

              <select
                value={country?.isoCode || ""}
                onChange={(e) => {
                  const selected = countries.find(
                    (c) => c.isoCode === e.target.value
                  );
                  setCountry(selected);
                  setState(null);
                }}
                className="mt-2 w-full rounded-lg border px-4 py-3 bg-white
               focus:ring-2 focus:ring-jci-teal focus:outline-none"
              >
                <option value="">Select a country</option>

                {countries.map((c) => (
                  <option key={c.isoCode} value={c.isoCode}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* -----------------------------STATE------------------------------- */}

            {/* <div>
              <label className="block text-sm font-medium text-gray-700">
                State *
              </label>
              <select className="mt-2 w-full rounded-lg border px-4 py-3 bg-white focus:ring-2 focus:ring-jci-teal focus:outline-none">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Membership</option>
                <option>Support</option>
              </select>
            </div> */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                State / Province *
              </label>

              <select
                value={state?.isoCode || ""}
                onChange={(e) => {
                  const selected = states.find(
                    (s) => s.isoCode === e.target.value
                  );
                  setState(selected);
                }}
                disabled={!country}
                className={`mt-2 w-full rounded-lg border px-4 py-3 bg-white
      focus:ring-2 focus:ring-jci-teal focus:outline-none
      ${!country ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <option value="">
                  {country ? "Select a state" : "Select country first"}
                </option>

                {states.map((s) => (
                  <option key={s.isoCode} value={s.isoCode}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* BTN */}

            <button
              type="submit"
              className="w-full mt-4 bg-jci-teal text-white py-3.5 rounded-xl font-semibold  transition shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
