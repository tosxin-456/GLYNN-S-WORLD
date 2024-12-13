import React from "react";
import search from "../assets/search.svg";

function Navbar() {
  return (
    <div className="justify-between flex w-[80%] m-auto mt-[20px]">
      <h1 className="text-black font-bold">GLYNN’S WORLD</h1>
      <div className="relative w-[50%]">
        <img
          src={search}
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 cursor-pointer"
        />
        <input
          className="w-full pl-10 p-2 rounded-2xl border-[2px] border-solid"
          style={{
            borderColor: "rgba(0, 0, 0, 0.5)",
            color: "rgba(0, 0, 0, 0.5)"
          }}
          placeholder="Search..."
          type="text"
        />
      </div>
    </div>
  );
}

export default Navbar;
