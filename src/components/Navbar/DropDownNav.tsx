import React from "react";
import { FaCaretDown } from "react-icons/fa6";

const DropDownNav = () => {
  const menu = [
    {
      id: 1,
      title: "Home",
      path: "/#",
    },
    {
      id: 2,
      title: "Top Rated",
      path: "/#",
    },
    {
      id: 3,
      title: "Kids Wear",
      path: "/#",
    },
    {
      id: 4,
      title: "Mens Wear",
      path: "/#",
    },
    {
      id: 5,
      title: "Electronic",
      path: "/#",
    },
  ];
  const dropDown = [
    {
      id: 1,
      title: "Trending products",
      path: "/#",
    },
    {
      id: 2,
      title: "Best Selling",
      path: "/#",
    },
    {
      id: 3,
      title: "Top Rated",
      path: "/#",
    },
  ];
  return (
    //TODO: fix the dark mode and change the main div's text and bg color
    <div className="bg-white text-black">
      <ul className="flex flex-row gap-2 justify-center">
        {menu.map((item) => {
          return (
            <li
              className="inline-block px-4 cursor-pointer hover:text-primary duration-200
              "
              key={item.id}
            >
              {item.title}
            </li>
          );
        })}
        <li className="group relative cursor-pointer">
          <a
            href="#"
            className=" group flex items-center px-4 cursor-pointer hover:text-primary duration-200"
          >
            Trending Products
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block rounded-md bg-white p-2 text-black shadow-md">
            <ul>
              {dropDown.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                  >
                    {item.title}
                  </li>
                );
              })}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDownNav;
