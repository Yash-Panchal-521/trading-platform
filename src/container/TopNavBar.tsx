import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg ">
                  Trading Application
                </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3 ">
            <Link
              to="/register"
              className="py-4 px-4 basis-1/2 text-gray-500 font-semibold hover:bg-purple-600  hover:text-white transition duration-300 rounded-xl"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="py-4 px-4 basis-1/2 text-gray-500 font-semibold hover:bg-purple-600  hover:text-white transition duration-300 rounded-xl"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavBar;
