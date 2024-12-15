import React, { useState, useEffect, useRef } from "react";
import dropDown from "../assets/arrow_down.svg";
import shopItems from "../utils/shop.utils";
import cart from "../assets/mdi_cart(white).svg";

function Filter({ isDarkMode }) {
  const [filter, setFilter] = useState("shoes");
  const [gender, setGender] = useState("Male");
  const [head, setHead] = useState("SHOES");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const popupRef = useRef(null);

  const colorMapping = {
    shoes: "#000",
    clothes: "#FFDD55",
    accessories: "#4B0082",
    bags: "#1FAF38"
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

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
          color: isDarkMode
            ? "rgba(255, 255, 255, 0.7)"
            :  "rgba(0, 0, 0, 0.7)"
        }}
        className="text-[40px] text-center font-bold mb-4"
      >
        <span
          style={{
            color: isDarkMode
              ? "rgba(255, 255, 255, 0.7)"
              : colorMapping[filter] || "black"
          }}
          className="text-black"
        >
          {head}
        </span>{" "}
        tailored to fit your unique taste.
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between md:w-[70%] md:m-auto gap-4">
        <div className="flex flex-wrap gap-4">
          {["shoes", "clothes", "accessories", "bags"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-2xl text-sm font-medium ${
                filter === type
                  ? isDarkMode
                    ? "bg-black text-white border-[1.5px] border-solid border-white"
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

        <div className="relative flex items-center md:w-auto w-full">
          <img
            src={dropDown}
            alt="Dropdown Icon"
            className="w-5 h-5 absolute right-4 pointer-events-none"
          />
          <select
            id="gender"
            value={gender}
            style={{
              backgroundColor: "#0000004D"
            }}
            onChange={handleGenderChange}
            className={`appearance-none p-2 pr-10 rounded-lg border-[2px] w-full text-white md:w-auto`}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 md:w-[80%] w-full m-auto">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div
              key={index}
              className={`md:p-4 p-2 rounded-lg cursor-pointer ${
                isDarkMode
                  ? "bg-gray-800 shadow-sm shadow-white"
                  : "bg-white shadow-lg shadow-gray-500/50"
              }`}
              onClick={() => setSelectedItem(item)}
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
                  className={`md:w-[40%] w-[60%] py-1 mt-2 rounded-3xl font-medium ${
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
      {selectedItem && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-70`}
        >
          <div
            ref={popupRef}
            className={`relative p-6 rounded-lg max-w-md w-full ${
              isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
            }`}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-40 object-fit rounded-lg mb-3"
            />
            <h3 className="text-xl font-bold mb-2">{selectedItem.name}</h3>
            <p className="text-xl mb-2">{selectedItem.description}</p>
            <div className="flex justify-between">
              <p className="text-sm mb-2 bg-black text-white w-fit rounded-3xl p-[15px]">
                Colors: {selectedItem.colorsAvailable.join(", ")}
              </p>
              <p className="text-sm mb-2 bg-black text-white w-fit rounded-3xl p-[15px]">
                Sizes: {selectedItem.size.join(", ")}
              </p>
            </div>
            <div className="flex justify-between items-center w-[60%] mt-[20px]">
              <p className="text-sm mb-2">₦{selectedItem.price}</p>
              <p
                className={`flex items-center justify-center gap-2 text-sm font-medium ${
                  selectedItem.inStock
                    ? "text-[#1FAF38] border-[#1FAF38] border-solid border-[1.5px] w-fit rounded-full pt-[7px] pb-[7px] pl-[15px] pr-[15px]"
                    : "text-red-500 border-red-500 border-solid border-[1.5px] w-fit rounded-full pt-[7px] pb-[7px] pl-[15px] pr-[15px]"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    selectedItem.inStock ? "bg-[#1FAF38]" : "bg-red-500"
                  }`}
                ></span>
                {selectedItem.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <div
              className={`flex justify-center gap-2 w-full py-2 mt-3 rounded-lg font-medium ${
                isDarkMode
                  ? "bg-[#FDA400] text-white"
                  : "bg-[#FDA400] text-white"
              }`}
            >
              <p>Order Now</p>
              <img src={cart} className="w-6" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
