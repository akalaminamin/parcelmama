import React from "react";
import { GrDeliver } from "react-icons/gr";
import { GiCardPickup } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";
const OurServices = () => {
  const services = [
    {
      icon: <GrDeliver />,
      title: "E-commerce Delivery",
    },
    {
      icon: <GiCardPickup />,
      title: "Pick and Drop",
    },
    {
      icon: <FaWarehouse />,
      title: "Warhousing",
    },
    {
      icon: <FiPackage />,
      title: "Packaging",
    },
  ];
  return (
    <section className="bg-gray-100 section_padding font-Rubik" id="ourServices">
      <div className="container">
        <h2 className="section-title mb-10 text-center">Our Services</h2>
        <Link
          to="/"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {services.map((service, index) => (
            <div
              className="bg-white shadow-lg px-2 py-10 text-center w-full group"
              key={index}
            >
              <div className="text-5xl mx-auto w-[130px] h-[130px] flex items-center justify-center bg-gray-100 rounded-[30px] rotate-45 group-hover:rotate-360">
                <span className="-rotate-45 !text-primary">{service.icon}</span>
              </div>
              <h2 className="text-xl font-semibold mt-10">{service.title}</h2>
            </div>
          ))}
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
