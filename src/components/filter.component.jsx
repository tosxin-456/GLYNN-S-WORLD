import React, { useState } from "react";

function Filter() {
  const [filter, setFilter] = useState(""); // Current selected category
  const [gender, setGender] = useState(""); // Selected gender
  const [head, setHead] = useState(""); // Selected gender

  const handleFilterClick = (type) => {
    const toUpper = type.toUpperCase();
    setHead(toUpper)
    setFilter(type);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="p-5">
      {/* Dynamic Heading */}
      <h1 className="text-2xl font-bold mb-4">
        {head || "SHOES"} tailored to fit your unique taste.
      </h1>

      <div className="flex justify-between" >
      <div className="flex gap-4 mb-4">
        {["shoes", "clothes", "accessories", "bags"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-2xl text-sm  font-medium ${
              filter === type
                ? "bg-black text-white"
                : "border-[1.5px] border-solid border-black bg-white text-black"
            }`}
            onClick={() => handleFilterClick(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Gender Dropdown */}
      <div className="flex items-center gap-4">
        <label htmlFor="gender" className="text-sm font-medium text-black">
          Gender:
        </label>
        <select
          id="gender"
          value={gender}
          onChange={handleGenderChange}
          className="p-2 rounded-lg border-[2px] border-gray-300 text-black bg-white"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      </div>
      {/* Filter Categories */}
    </div>
  );
}

export default Filter;
