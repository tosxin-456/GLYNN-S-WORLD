import React, { useState } from "react";
import dropDown from "../assets/arrow_down.svg";

function Filter({ isDarkMode }) {
  const [filter, setFilter] = useState("shoes"); // Current selected category
  const [gender, setGender] = useState("Male"); // Selected gender
  const [head, setHead] = useState("SHOES"); // Selected category heading

  const handleFilterClick = (type) => {
    const toUpper = type.toUpperCase();
    setHead(toUpper);
    setFilter(type);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div
      className={`p-5 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1
        style={{
          color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)"
        }}
        className="text-[40px] text-center font-bold mb-4"
      >
        <span>{head}</span> tailored to fit your unique taste.
      </h1>

      <div className="flex justify-between md:w-[70%] md:m-auto">
        {/* Category Buttons */}
        <div className="flex gap-4 mb-4">
          {["shoes", "clothes", "accessories", "bags"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-2xl text-sm font-medium ${
                filter === type
                  ? isDarkMode
                    ? "bg-black text-white border-[1.5px] border-solid border-white "
                    : "bg-black text-white"
                  : `border-[1.5px] border-solid ${
                      isDarkMode
                        ? "border-gray-600 bg-gray-700 text-white"
                        : "border-black bg-white text-black"
                    }`
              }`}
              onClick={() => handleFilterClick(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Gender Dropdown */}
        <div className="relative flex items-center">
          <img
            src={dropDown}
            alt="Dropdown Icon"
            className="w-5 h-5 absolute right-4 pointer-events-none"
          />
          <select
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            className={`appearance-none p-2 pr-10 rounded-lg border-[2px] ${
              isDarkMode
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-gray-800 text-white border-gray-300"
            } w-full`}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filter;
