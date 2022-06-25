import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiComputerLine } from "react-icons/ri";
import { BsClockFill,BsCashCoin, BsPersonBoundingBox } from "react-icons/bs";
import { MdOutlineArrowForwardIos, MdPayment } from "react-icons/md";
const Accordion = () => {
  const accordionInfo = [
    {
      icon: <TbTruckDelivery />,
      title: "Daily Pick up, No limitations",
      description:
        "Parcel mama Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.",
    },
    {
      icon: <MdPayment />,
      title: " Faster Payment Service      ",
      description:
        "Parcel mama Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.",
    },
    {
      icon: <BsCashCoin />,
      title: "Cash on Delivery",
      description:
        "Parcel mama Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.",
    },
    {
      icon: <RiComputerLine />,
      title: "Online Management",
      description:
        "Parcel mama Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.",
    },
    {
      icon: <BsClockFill />,
      title: "Real time tracking",
      description:
        "Parcel mama Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.",
    },
    {
      icon: <BsPersonBoundingBox />,
      title: "Advanced customer services",
      description:
        "Parcel mama Courier gives you the opportunity of unlimited pickup. You can give any amount of parcels regardless of their size and weight. Also you don’t have to bring your parcels to our office! Our trusted pickup man will visit your location and pick up your parcels on behalf of you. You can request for pickup for every day of the week.",
    },
  ];
  const [open, setOpen] = useState(false);
  const [matchIndex, setMatchIndex] = useState(null);
  return (
    <section className="accordion section_padding font-Rubik">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accordionInfo.map((item, index) => (
            <div>
              <div
                key={index}
                className="accordion-shadow bg-white px-6 py-5 flex items-center justify-between rounded-sm cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                  setMatchIndex(index);
                }}
              >
                <div className="flex items-center justify-start gap-4">
                  <span className="text-3xl text-primary">{item.icon}</span>
                  <h2 className="text-xl font-semibold text-title">
                    {item.title}
                  </h2>
                </div>
                <span
                  className={`cursor-pointer text-lg transition-all ease duration-300 ${
                    open && matchIndex === index ? "-rotate-90" : ""
                  }`}
                >
                  <MdOutlineArrowForwardIos />
                </span>
              </div>
              <p
                className={`bg-white text-left shadow-lg border-t ${
                  open && matchIndex === index
                    ? "max-h-auto transform duration-200 p-5 ease-linear border-gray-300"
                    : "max-h-0"
                } overflow-hidden`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
