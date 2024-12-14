import React, { useState, useEffect, useRef } from "react";
import dropDown from "../assets/arrow_down.svg";
import shopItems from "../utils/shop.utils";

function Filter({ isDarkMode }) {
  const [filter, setFilter] = useState("shoes"); // Current selected category
  const [gender, setGender] = useState("Male"); // Selected gender
  const [head, setHead] = useState("SHOES"); // Selected category heading
  const [filteredItems, setFilteredItems] = useState([]); // Filtered items
  const [selectedItem, setSelectedItem] = useState(null); // Selected item for popup
  const popupRef = useRef(null); // Reference for the popup

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

  // Close popup when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setSelectedItem(null);
      }
    };

    if (selectedItem) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [selectedItem]);

  useEffect(() => {
    const items = shopItems.filter(
      (item) => item.type === filter.toLowerCase() && item.gender === gender
    );
    setFilteredItems(items);
  }, [filter, gender]);

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

      {/* Filtered Items */}
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:w-[80%] m-auto ">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg cursor-pointer ${
                isDarkMode
                  ? "bg-gray-800 shadow-sm shadow-white" // Dark mode shadow
                  : "bg-white shadow-lg shadow-gray-500/50" // Light mode shadow
              }`}
              onClick={() => setSelectedItem(item)} // Show popup on click
            >
              <p className="text-sm mb-2 font-medium text-[20px]">
                {item.name}
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-20 object-cover rounded-lg mb-3"
              />
              <div className="flex justify-between items-center">
                <p className="text-sm mb-2 font-medium">
                  ₦{item.price.toLocaleString()}
                </p>
                <button
                  className={`w-[40%] py-1 mt-2 rounded-3xl font-medium ${
                    isDarkMode
                      ? "bg-[#FDA400] text-white"
                      : "bg-[#FDA400] text-white"
                  }`}
                >
                  Order
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center h-40">
            <p className="text-center text-lg font-medium">
              No items available for the selected filters.
            </p>
          </div>
        )}
      </div>
      {/* Popup for Item Details */}
      {selectedItem && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50`}
        >
          <div
            ref={popupRef} // Reference for the popup
            className={`relative p-6 rounded-lg max-w-md w-full ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-lg font-bold"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-40 object-fit rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold mb-2">{selectedItem.name}</h3>
            <p className="text-sm mb-2">Price: ${selectedItem.price}</p>
            <p className="text-sm mb-2">
              Colors: {selectedItem.colorsAvailable.join(", ")}
            </p>
            <p className="text-sm mb-2">
              Sizes: {selectedItem.size.join(", ")}
            </p>
            <p
              className={`text-sm font-medium ${
                selectedItem.inStock ? "text-green-500" : "text-red-500"
              }`}
            >
              {selectedItem.inStock ? "In Stock" : "Out of Stock"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
