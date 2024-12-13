import React from "react";
import cart from "../assets/mdi_cart.svg";

function BlackFridayComponent() {
  return (
    <div className="bg-[#FFDD55]">
      <div className="relative flex overflow-x-hidden">
        {/* First set of items */}
        <div className="animate-marquee flex items-center whitespace-nowrap gap-10">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="ml-[20px] mr-[20px] flex items-center justify-center"
            >
              <img src={cart} alt="Cart" className="w-6 h-5" />
              <p className="text-xl font-bold text-black ml-2">
                BLACK FRIDAY SALES 10% OFF!!!
              </p>
            </div>
          ))}
        </div>

        {/* Second set of items for smooth transition */}
        <div className="animate-marquee2 flex items-center whitespace-nowrap gap-10 absolute top-0">
          {[...Array(3)].map((_, idx) => (
            <div
              key={idx}
              className="ml-[20px] mr-[20px] flex items-center justify-center"
            >
              <img src={cart} alt="Cart" className="w-6 h-5" />
              <p className="text-xl font-bold text-black ml-2">
                BLACK FRIDAY SALES 10% OFF!!!
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlackFridayComponent;
