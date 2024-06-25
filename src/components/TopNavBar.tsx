import React from "react";
import { Link } from "react-router-dom";

const TopNavBar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo */}
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg ">
                  Trading Application
                </span>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <Link
              to="/register"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-400 transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-purple-500 transition duration-300"
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
