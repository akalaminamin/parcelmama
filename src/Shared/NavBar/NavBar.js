import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import TopNavBar from "./TopNavBar";
const NavBar = () => {
  const [innerHeight, setInnerHeight] = useState(null);
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
      if(window.scrollY > 200){
        setInnerHeight(window.scrollY)
        setSticky(true)
      }else{
        setSticky(false)
      }
  }, [innerHeight])
  return (
    <>
      {/* <TopNavBar /> */}
      <header className={`bg-white py-2 shadow-md font-Rubik block left-0 w-full z-50 mb-16`}>
        <nav className="container flex flex-col md:flex-row md:items-center items-start justify-between">
          {/* <div className="flex items-center justify-between w-full">
       <Link to="/">
          <img
            className="cursor-pointer w-2/3 md:w-full md:flex-auto flex-1"
            src={require("../Assets/Images/logo.png")}
            alt="main logo"
          />
        </Link>
        {/* <span className="block md:hidden">
        <AiOutlineMenu />
        </span> */}
          {/* </div>  */}
          <NavLink to="/">
            <img
              className="cursor-pointer w-2/3 md:w-full md:flex-auto flex-1"
              src={require("../../Assets/Images/logo.png")}
              alt="main logo"
            />
          </NavLink>
          <div className="menu">
            <ul className="flex flex-col gap-5 md:flex-row md:gap-0">
              <li className="list-none px-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="list-none px-4">
                <a
                  href="#ourServices"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  Services
                </a>
              </li>
              <li className="list-none px-4">
                <NavLink
                  to="/servicesArea"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  Services Area
                </NavLink>
              </li>
              <li className="list-none px-4">
                <a
                  href="#pricing"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  Pricing
                </a>
              </li>
              <li className="list-none px-4">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="list-none px-4">
                <NavLink to="/register" className="nav-btn group">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-20 ease"></span>
                  <span className="relative">Register</span>
                </NavLink>
              </li>
              <li className="list-none px-4">
                <NavLink to="/login" className="nav-btn group">
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-20 ease"></span>
                  <span className="relative">Login</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
