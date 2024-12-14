import React from "react";
import search from "../assets/search.svg";
function Navbar({ isDarkMode, toggleMode }) {
  return (
    <div
      className={`flex items-center justify-between w-[90%] m-auto mt-[20px] p-4 rounded-lg ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold text-lg">GLYNN’S WORLD</h1>
      <div className="relative w-[60%] sm:w-[50%]">
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
      <button
        onClick={toggleMode}
        className={`flex items-center justify-center p-2 ml-[10px] rounded-full ${
          isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="size-6"
          >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
    </div>
  );
}


export default Navbar;
