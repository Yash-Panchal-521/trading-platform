import React from "react";
import { NavLink } from "react-router-dom";

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return `flex items-center py-4 px-2 return font-semibold ${
                    isActive ? "text-purple-600" : "text-gray-500"
                  } text-xl transition duration-300 hover:text-purple-600`;
                }}
              >
                Trading Application
              </NavLink>
            </div>
          </div>
          <div className="flex items-center space-x-3 ">
            <NavLink
              to="/register"
              className={({ isActive }) => {
                return `py-2 px-4 basis-1/2 text-gray-500 font-semibold hover:bg-purple-600  hover:text-white transition duration-300 rounded-xl ${
                  isActive ? "bg-purple-600 text-white" : ""
                }`;
              }}
            >
              Register
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) => {
                return `py-2 px-4 basis-1/2 text-gray-500 font-semibold hover:bg-purple-600  hover:text-white transition duration-300 rounded-xl ${
                  isActive ? "bg-purple-600 text-white" : ""
                }`;
              }}
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
