import React from "react";

const Track = () => {
  return (
    <section className="track -mt-40 font-Rubik section_padding">
      <div className="container flex items-center justify-center">
        <div className="md:w-[80%] w-full bg-white shadow-xl px-10 py-8 rounded-lg">
          <div className="text-left mb-3">
            <h2 className="text-title text-[17px] font-semibold text-left inline-block mr-3">
              TRACK YOUR CONSIGNMENT
            </h2>
            <span className="text-[14px] text-gray-500">
              Now you can easily track your consignment
            </span>
          </div>
          <div className="flex items-center justify-between gap-3 flex-col md:flex-row">
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm"
              id="trackId"
              type="text"
              placeholder="Enter your tracking code"
            />
            <button className="bg-primary text-white font-lg px-14 py-[8px] rounded-sm">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Track;
