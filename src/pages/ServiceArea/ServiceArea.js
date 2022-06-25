import React, { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
const ServicesArea = () => {
  const [selectValue, setSelectValue] = useState("Inside Dhaka");
  const districts = [
    "Barguna",
    "Barishal",
    "Bhola",
    "Bogra",
    "Brahmanbaria",
    "Chandpur",
    "Chapainawabganj",
    "Chittagong",
    "Chuadanga",
    "Cox's Bazar",
    "Cumilla",
    "Dhaka City",
    "Dhaka Sub-Urban",
    "Dinajpur",
    "Faridpur",
    "Feni",
    "Gaibandha",
    "Gazipur",
    "Gopalganj",
    "Habiganj",
    "Jamalpur",
    "Jashore",
    "Jhalokati",
    "Jhenaidah",
    "Joypurhat",
    "Khagrachori",
    "Khulna",
    "Kishoreganj",
    "Kurigram",
    "Kustia",
    "Sylhet",
    "Tangail",
    "Thakurgaon",
  ];
  return (
    <section className="services section_padding font-Rubik mt-14">
      <div className="container">
        <h2 className="section-title mb-10 text-center">Our Services Area</h2>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center justify-between gap-4 basis-2/3">
            <h2 className="text-2xl whitespace-nowrap">{selectValue}</h2>
            <select
              className="form-select"
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value="Inside Dhaka" selected>
                Inside Dhaka
              </option>
              <option value="Dhaka suburb">Dhaka suburb</option>
              <option value="Outside Dhaka">Outside Dhaka</option>
            </select>
            <input
              type="text"
              placeholder="area or district"
              className="form-control"
            />
          </div>
          <button className="px-5 py-2 border rounded-full flex">
            <span className="mr-2 text-xl">
              <AiOutlineDownload />
            </span>
            Download
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 border ">
                  District
                </th>
                <th scope="col" className="px-6 py-3 border ">
                  Area
                </th>
                <th scope="col" className="px-6 py-3 border ">
                  Post Code
                </th>
                <th scope="col" className="px-6 py-3 border ">
                  Home Delivery
                </th>
                <th scope="col" className="px-6 py-3 border ">
                  Charge(1kg)
                </th>
                <th scope="col" className="px-6 py-3 border ">
                  Charge(2kg)
                </th>
                <th scope="col" className="px-6 py-3 text-left border">
                  COD Charge
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium border whitespace-nowrap"
                >
                  Dhaka
                </th>
                <td className="px-6 border py-4">Mohammadpur(Dhaka)</td>
                <td className="px-6 border py-4">1207</td>
                <td className="px-6 border py-4">Yes</td>
                <td className="px-6 border py-4">60 kg</td>
                <td className="px-6 border py-4">75 kg</td>
                <td className="px-6 border py-4 text-left">90 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
