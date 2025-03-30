import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper nav */}
      <div className="bg-primary/40 py-3">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src="\logo.png" alt="Logo image" className="w-10 " /> Shopy
            </a>
          </div>
          {/* search bar and other buttons */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
                duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none 
                focus:border-1 focus:border-primary  bg-white text-black"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("Ordering not available yet")}
              className="cursor-pointer bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex gap-3 group items-center"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm " />
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
      {/* lower nav */}
      <div></div>
    </nav>
  );
};

export default Navbar;
