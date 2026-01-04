import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900">
            Send Us a Message
          </h2>
          <p className="mt-4 text-gray-600 max-w-md">
            Fill out the form and our team will get back to you within 24 hours.
          </p>

          {/* CONTACT INFO */}
          <div className="mt-10 space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Email</h4>
                <p className="text-gray-600 text-sm">
                  info@jcinationl.org
                  <br />
                  membership@jcinationl.org
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Phone</h4>
                <p className="text-gray-600 text-sm">
                  +1 (555) 123-4567
                  <br />
                  Mon–Fri 9am–5pm
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                <FaLocationDot />
              </div>
              <div>
                <h4 className="font-semibold text-blue-900">Office</h4>
                <p className="text-gray-600 text-sm">
                  123 Leadership Avenue
                  <br />
                  Capital City, ST 12345
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mt-12">
            <h4 className="font-semibold text-blue-900 mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[
                FaFacebookF,
                FaXTwitter,
                FaInstagram,
                FaLinkedinIn,
                FaYoutube,
              ].map((Icon, i) => (
                <button
                  key={i}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-600 hover:text-white transition"
                >
                  <Icon />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-10 shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-blue-900">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900">
                Subject *
              </label>
              <select className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Select a subject</option>
                <option>General Inquiry</option>
                <option>Membership</option>
                <option>Support</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-900">
                Message *
              </label>
              <textarea
                rows="5"
                placeholder="Tell us how we can help you..."
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-right text-xs text-gray-400 mt-1">
                0/500 characters
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
