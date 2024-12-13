import React from "react";
import search from "../assets/search.svg";

function Navbar({ isDarkMode, toggleMode }) {
  return (
    <div
      className={`justify-between flex w-[80%] m-auto mt-[20px] p-4 rounded-lg ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Title */}
      <h1 className="font-bold">GLYNN’S WORLD</h1>

      {/* Search Bar */}
      <div className="relative w-[50%]">
        <img
          src={search}
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
        />
        <input
          className={`w-full pl-10 p-2 rounded-2xl border-[2px] border-solid ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
          style={{
            borderColor: isDarkMode
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(0, 0, 0, 0.5)"
          }}
          placeholder="Search..."
          type="text"
        />
      </div>

      {/* Light/Dark Mode Toggle */}
      <div>
        <button
          onClick={toggleMode}
          className={`px-4 py-2 rounded-md font-medium ${
            isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
          }`}
        >
          {isDarkMode ? "Dark" : "Light"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
