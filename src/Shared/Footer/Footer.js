import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <>
    <section className="footer section_padding bg-primary font-Rubik pb-10">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 md:gap-5 lg:gap-6 text-center md:text-left">
          {/* 1 */}
          <div className="mx-auto ">
            <img
              className="mb-8 w-40 mx-auto md:mx-0"
              src={require("../../Assets/Images/logo.png")}
              alt="footer logo"
            />
            <p className="text-xl text-white">
              Our service very fasted and <br /> always secure
            </p>
            <img
              className="w-40 mt-7 mx-auto md:mx-0"
              src={require("../../Assets/Images/google-play.png")}
              alt="google-pay"
            />
          </div>
          {/* 2 */}
          <div>
            <h2 className="text-2xl uppercase font-semibold text-white mb-8">
              Services
            </h2>
            <ul className="text-white space-y-3">
              <li>Express Day Delivery</li>
              <li>Same Day Delivery</li>
              <li>Regular Delivery</li>
              <li>Service Point Delivery</li>
            </ul>
          </div>
          {/* 3 */}
          <div>
            <h2 className="text-2xl uppercase font-semibold text-white mb-8">
              Company
            </h2>
            <ul className="text-white space-y-3">
              <li>
                <Link className="" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="" to="/goal">
                  Our Main Goal
                </Link>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div>
            <h2 className="text-2xl uppercase font-semibold text-white mb-8">
              Links
            </h2>
            <div className="flex items-center justify-start gap-3 flex-wrap">
              <Link
                to="/"
                className="text-lg rounded-full cursor-pointer text-white bg-gray-400 w-10 h-10 flex items-center justify-center mb-5 hover:bg-gray-600 transition-all ease-out shadow-md"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="/"
                className="text-lg rounded-full cursor-pointer text-white bg-gray-400 w-10 h-10 flex items-center justify-center mb-5 hover:bg-gray-600 transition-all ease-out shadow-md"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="/"
                className="text-lg rounded-full cursor-pointer text-white bg-gray-400 w-10 h-10 flex items-center justify-center mb-5 hover:bg-gray-600 transition-all ease-out shadow-md"
              >
                <FaYoutube />
              </Link>
              <Link
                to="/"
                className="text-lg rounded-full cursor-pointer text-white bg-gray-400 w-10 h-10 flex items-center justify-center mb-5 hover:bg-gray-600 transition-all ease-out shadow-md"
              >
                <FaWhatsapp />
              </Link>
              <Link
                to="/"
                className="text-lg rounded-full cursor-pointer text-white bg-gray-400 w-10 h-10 flex items-center justify-center mb-5 hover:bg-gray-600 transition-all ease-out shadow-md"
              >
                <FaInstagram />
              </Link>
            </div>
            <div className="flex items-center justify-start gap-3 text-white">
              <span className="!text-white text-xl">
                <FaMapMarkerAlt />
              </span>
              <p>
              HA4 7AE and Mirpur, Dhaka-1216.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterBottom />
    </>
  );
};

export default Footer;
