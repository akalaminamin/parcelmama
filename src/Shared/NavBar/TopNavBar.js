import React from "react";
import { MdCallEnd } from "react-icons/md";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
const TopNavBar = () => {
  return (
    <section className="bg-gray-800 py-3 text-white font-Rubik hidden md:block">
      <div className="container">
        <div className="flex items-cener justify-between font-Rubik">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center justify-center gap-3">
              <span className="text-primary text-xl">
                <MdCallEnd />
              </span>
              0170833091
            </p>
            <p className="flex items-center justify-center gap-3">
              <span className="text-primary text-xl">
                <FaEnvelope />
              </span>
              parcelmama@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/"
              target="_blank"
              className="flex items-center justify-center gap-3"
            >
              <span className="text-primary text-xl">
                <FaWhatsapp />
              </span>
              Whatsapp
            </Link>
            <select className="form-select py-2 border-none outline-none focus:outline-none bg-primary text-white">
                <option value="BD">BD</option>
                <option value="EN" selected>EN</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopNavBar;
