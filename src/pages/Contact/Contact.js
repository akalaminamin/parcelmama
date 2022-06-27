import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div className="container section-padding font-JosefinSans mt-36">
        <div>
          <h3 className="text-5xl font-bold text-heading mb-3">
            Call us or visit our corporate Office
          </h3>
          <p className="text-gray-400 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
          {/* phone */}
          <div>
            <span className="text-7xl font-bold text-primary">
              <MdOutlinePhoneIphone />
            </span>
            <h2 className="text-2xl font-bold mt-10 mb-4">Phone:</h2>
            <p className="text-gray-400">+ 44 123 456 78 90</p>
            <p className="text-gray-400">+ 844 123 444 77 88</p>
          </div>
          {/* email */}
          <div>
            <span className="text-7xl font-bold text-primary">
              <MdOutlinePhoneIphone />
            </span>
            <h2 className="text-2xl font-bold mt-10 mb-4">Email:</h2>
            <p className="text-gray-400">contact@example.com</p>
            <p className="text-gray-400">info@example.com</p>
          </div>
          {/* map */}
          <div>
            <span className="text-7xl font-bold text-primary">
              <FaMapMarkerAlt />
            </span>
            <h2 className="text-2xl font-bold mt-10 mb-4">Address:</h2>
            <p className="text-gray-400">
              Box 565, Pinney's Beach, Charlestown,
            </p>
            <p className="text-gray-400">Nevis, West Indies, Caribbean</p>
          </div>
        </div>
        {/* google map */}
        <section className="text-gray-600 body-font relative mt-24 rounded-2xl mb-12">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14601.290319937092!2d90.34350753955074!3d23.807125600000028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10f393a9feb%3A0x9154114e80938f3b!2sParcel%20Mama!5e0!3m2!1sen!2sbd!4v1656032806951!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
              <h2 className="text-gray-900 text-2xl mb-1 font-medium">
                Send us a message
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  for="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg">
                Contact Us
              </button>
              <p className="text-xs text-gray-500 mt-3">
                Chicharrones blog helvetica normcore iceland tousled brook viral
                artisan.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
