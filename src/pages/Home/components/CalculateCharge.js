import React from "react";

const CalculateCharge = () => {
  return (
    <section className="font-Rubik section_padding" id="pricing">
      <h2 className="section-title mb-10 text-center">Charge Calculation</h2>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 space-x-0 md:space-x-4 lg:px-16 md:px-10 px-0">
          <div className="mb-6">
            <label
              htmlFor="from"
              className="!text-left text-lg block font-semibold"
            >
              From
            </label>
            <select id="from" className="form-select">
              <option value="Dhaka" selected>
                Dhaka
              </option>
              <option value="Barishal">Barishal</option>
              <option value="Comilla">Comilla</option>
              <option value="Bandarban">Bandarban</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="from"
              className="!text-left text-lg block font-semibold"
            >
              Destination
            </label>
            <select id="from" className="form-select">
              <option value="Dhaka" selected>
                Dhaka
              </option>
              <option value="Barishal">Barishal</option>
              <option value="Comilla">Comilla</option>
              <option value="Bandarban">Bandarban</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 space-x-0 md:space-x-4 lg:px-16 md:px-10 px-0">
          <div className="mb-6">
            <label
              htmlFor="from"
              className="!text-left text-lg block font-semibold"
            >
              Service
            </label>
            <select id="from" className="form-select">
              <option value="Express_Delivery" selected>
                Express Delivery
              </option>
              <option value="Same_Day_delivery">Same Day Delivery</option>
              <option value="Schedule_delivery">
                Regular Schedule Delivery
              </option>
              <option value="service_point_delivery">Service Point Delivery</option>
            </select>
          </div>
          <div className="form-group mb-6">
            <label
              htmlFor="from"
              className="!text-left text-lg block font-semibold"
            >
              Weight(Max: 10 kg)
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInput124"
              aria-describedby="emailHelp124"
              placeholder="Max: 10 kg"
              defaultValue="0.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculateCharge;
// Where There s willl, there is way Computer is the most wonderfulll contributaion and communication techjnlogy.
