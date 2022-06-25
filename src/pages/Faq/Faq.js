import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Faq = () => {
  const faqQuestions = [
    {
      title: "What is parcel mama?",
      description:
        " Parcel mama is a technology-based logistics company that provides industrial logistics services across the country, ranging from SME product delivery services to personal documents, parcel delivery, and large corporate companies.",
    },
    {
      title: "What kind of services does parcel mama offer?",
      description:
        " parcel mama is a complete platform for providing delivery services for any business or personal needs. parcel mama also provides parcel delivery, bulk shipment, line hall, truck rental, loading-unloading, warehouse, logistics solution as a service and customized solution as required.",
    },
    {
      title: "Want to know about your logistics charges?",
      description: `We charge merchants for parcel delivery at Rs 60 per kg inside Dhaka, Rs 100 per kg inside Dhaka, Rs 100 per kg around Dhaka and Rs 130 per kg outside Dhaka. 1% cash on delivery charge is applicable for every delivery in and around Dhaka.
        See our Home Delivery and Hub Delivery Price Chart for personal parcel shipping charges.
        We have a skilled sales team for enterprise logistics. You will get all the related information by calling 0910006339.`,
    },
  ];
  return (
    <section className="container section_padding font-Rubik">
      <h2 className="section-title text-center mb-3">
        Fequently Asked Question
      </h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        See the most asked questions, we are by your side in any need
      </p>
      {faqQuestions.map((faq, index) => (
        <div
          className="relative w-1/2 overflow-hidden mb-4 mx-auto"
          key={index}
        >
          <input
            type="checkbox"
            className="absolute top-0 inset-x-0 w-full h-12 opacity-0 cursor-pointer z-10 peer"
          />
          <div className="bg-gray-400 h-12 w-full pl-5 flex items-center">
            <h1 className="text-lg text-white">{faq.title}</h1>
          </div>
          {/* arrow icon */}
          <span className="text-2xl absolute top-3 right-3 text-white bg-primary h-6 w-6 rounded-full transition-transform duration-500 rotate-0 peer-checked:rotate-180">
            <MdKeyboardArrowDown />
          </span>
          {/* content */}
          <div className="bg-gray-100 overflow-hidden duration-500 max-h-0 peer-checked:max-h-52 ">
            <div className="p-4">
              <p>{faq.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Faq;
