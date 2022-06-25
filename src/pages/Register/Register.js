import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="register py-10 font-Rubik mt-20">
      <div className="container h-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 h-full rounded-2xl shadow-md">
          <div className="bg-primary col-span-5 md:col-span-3 rounded-tl-2xl lg:rounded-bl-2xl rounded-tr-2xl lg:rounded-tr-none  p-10">
            <h2 className="text-3xl text-white text-left">
              Welcome to <br />
              percel mama Courier
            </h2>
            <img
              className=""
              src={require("../.././Assets/Images/delivery_by.png")}
              alt="delivery boy"
            />
          </div>
          <div className="bg-gray-50 col-span-3 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl lg:rounded-bl-none lg:p-16 p-8 py-10 shadow-md">
            <img
              className="mx-auto mb-5 w-36"
              src={require("../../Assets/Images/logo.png")}
              alt="logo"
            />
            <h2 className="text-2xl text-title mb-5 text-center">Become a Merchant</h2>
            <form>
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                type="text"
                name="businessName"
                placeholder="Enter your business organization name"
              />
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                type="text"
                name="BusinessUrl"
                placeholder="Your Business website or page link"
              />
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                type="text"
                name="userName"
                placeholder="Enter Your Name"
              />
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                type="gmail"
                name="gmail"
                placeholder="Enter Your gmail"
              />
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                type="tel"
                name="phone"
                placeholder="Enter Your phone"
              />
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                type="password"
                name="password"
                placeholder="Password"
              />
              <input
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />
              <textarea
                className="shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-primary focus:shadow-outline text-sm mb-5"
                name="address"
                cols="30"
                rows="5"
                placeholder="Address Your pickup location"
              ></textarea>
              <button type="submit" className="nav-btn w-full uppercase mb-4">
                Register Now
              </button>
            </form>
            <p>
              Already have an account?  &nbsp;
              <Link to="/login" className="text-primary text-sm lg:text-lg cursor-pointer">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;


// tomorrow work list
// 1. Calculate Total Price and render total Price component
// 4. Responsive Navbar
