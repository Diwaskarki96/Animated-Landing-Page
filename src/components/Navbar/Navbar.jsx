import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* upper nav */}
      <div>
        <div>
          <div>
            <a href="#">
              <img src="\logo.png" alt="Logo image" />
            </a>
          </div>
          {/* search bar and other buttons */}
          <div>
            <div className="group">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
      {/* lower nav */}
      <div></div>
    </div>
  );
};

export default Navbar;
