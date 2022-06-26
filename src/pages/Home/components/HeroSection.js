import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="hero_area bg-heroBg bg-no-repeat h-[700px]">
        <div className="container flex items-center justify-center h-full">
          <div className="flex items-center justify-between flex-col md:flex-row gap-10 lg:gap-0">
            <div className="text-left">
              <h2 className="text-6xl font-bold text-white capitalize">
                Fastest But always secure
              </h2>
              <p className="text-white text-[18px] mt-2">
                Easily track your courier, Get courier within hours. Efficient &
                safe delivery.
              </p>
            </div>
            <div>
              <img
                src={require("../.././../Assets/Images/hero_img.png")}
                alt="hero-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;


// today work list
  // 1. contact us page
  // 2. Services area design change
  // 3. faq section add 