// src/components/CategoryBar.js
import React from "react";
import { MdPhoneIphone, MdCheckroom, MdTv, MdWeekend, MdOutlineFace, MdToys } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";

const categories = [
  { name: "Mobiles", icon: <MdPhoneIphone size={26} /> },
  { name: "Fashion", icon: <MdCheckroom size={26} /> },
  { name: "Electronics", icon: <FaLaptop size={26} /> },
  { name: "Home & Furniture", icon: <MdWeekend size={26} /> },
  { name: "TV & Appliances", icon: <MdTv size={26} /> },
  { name: "Beauty & Care", icon: <MdOutlineFace size={26} /> },
  { name: "Toys", icon: <MdToys size={28} /> },
];

export default function CategoryBar() {
  return (
    <div className="bg-white shadow-sm py-2">
      <div className="w-full overflow-x-auto scrollbar-hide scrol-smooth">
        <div className="flex justify-between sm:justify-center flex-nowrap items-center gap-10 px-4 min-w-max">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex-shrink-0 w-24 h-20 flex flex-col items-center justify-center 
                         bg-blue-50 rounded-lg hover:bg-blue-100 
                         cursor-pointer transition transform hover:scale-105 shadow-sm"
            >
              <div className="text-blue-600 group-hover:scale-110 transition-transfrom duration-200">{cat.icon}</div>
              <span className="text-sm font-medium mt-2 text-gray-800 text-center">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
