// Modal for the join now button
import { FiX } from "react-icons/fi";
import { useUI } from "./UIContext";
import { Country, State } from "country-state-city";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Modal = () => {
  const { modalOpen, setModalOpen } = useUI();

  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const countries = Country.getAllCountries();
  const states = country ? State.getStatesOfCountry(country.isoCode) : [];

  if (!modalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      phone: form.phone.value,
      country: country?.name || "",
      state: state?.name || "",
      subject: subject || "General Inquiry",
      message: message || "",
    };

    emailjs
      .send(
        "service_7eido38",
        "template_xjyt1im",
        formData,
        "f5t1I1rp6E318V766"
      )
      .then(
        (res) => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setModalOpen(false);

          // reset form and states
          form.reset();
          setCountry(null);
          setState(null);
          setSubject("");
          setMessage("");
        },
        (err) => {
          console.error("Email send error:", err);
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={() => setModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-lg max-h-[90vh] shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="relative px-6 py-5 border-b bg-jci-teal text-white">
          <h2 className="text-center leading-tight font-bold text-3xl sm:text-4xl lg:text-5xl text-jci-black">
            Contact Us
          </h2>

          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition"
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-80px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Doe"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                placeholder="07012345678"
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
              />
            </div>

            {/* Country */}
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
                className="mt-2 w-full rounded-lg border px-4 py-3 bg-white focus:ring-2 focus:ring-jci-teal focus:outline-none"
                required
              >
                <option value="">Select a country</option>
                {countries.map((c) => (
                  <option key={c.isoCode} value={c.isoCode}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* State */}
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
                className={`mt-2 w-full rounded-lg border px-4 py-3 bg-white focus:ring-2 focus:ring-jci-teal focus:outline-none ${
                  !country ? "opacity-50 cursor-not-allowed" : ""
                }`}
                required
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

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject *
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-2 w-full rounded-lg border px-4 py-3 focus:ring-2 focus:ring-jci-teal focus:outline-none"
                required
              >
                <option value="">Select a subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Membership">Membership</option>
                <option value="Support">Support</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-blue-900">
                Message *
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
                placeholder="Tell us how we can help you..."
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                maxLength={500}
                required
              />
              <p className="text-right text-xs text-gray-400 mt-1">
                {message.length}/500 characters
              </p>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-jci-teal text-white py-3.5 rounded-xl font-semibold transition shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Notification */}
      {submitted && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-50 animate-fadeIn">
          Submitted successfully!
        </div>
      )}
    </div>
  );
};

export default Modal;
