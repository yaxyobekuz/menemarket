import React from "react";
import { Link } from "react-router-dom";

// Utils
import { getPercentageBgColor, getRandomNumber } from "../utils";

const StreamItem = ({ data = {} }) => {
  const percentage = getRandomNumber(0, 99);

  return (
    <li className="space-y-0.5">
      {/* Top */}
      <div className="flex items-center justify-between gap-3.5 bg-white p-4 rounded-t-lg">
        <h3 className="text-lg font-semibold truncate">
          Mening oqimim #{getRandomNumber(0, 99)}
        </h3>

        <div
          className={`${getPercentageBgColor(
            percentage
          )} rounded-full px-2 py-0.5 text-white text-sm`}
        >
          {percentage}%
        </div>
      </div>

      {/* Main */}
      <div className="bg-white p-4 space-y-3.5">
        {/* Product */}
        <div className="space-y-1">
          <b className="font-medium text-[17px]">Mahsulot</b>
          <Link
            to={`/products/product/productId`}
            className="line-clamp-2 text-neutral-500 transition-colors duration-200 hover:text-primary-default"
          >
            {data.title}
          </Link>
        </div>

        {/* Url */}
        <div className="bg-gradient-gray py-2 px-3 rounded-lg">
          <div className="overflow-hidden">
            <span>menemarket.uz/oqim/</span>
            {getRandomNumber(0, 999999)}
          </div>
        </div>

        {/* Date & Time */}
        <div className="flex items-center justify-end gap-3.5">
          <span className="text-neutral-500 text-sm">12/08/2024</span>
          <span className="text-neutral-500 text-sm">12:00</span>
        </div>
      </div>

      {/* Sub */}
      <div className="flex items-center justify-between gap-3.5 bg-white p-4 rounded-b-lg">
        <button className="btn-primary w-full h-10 font-normal">
          Nusxa olish
        </button>
      </div>
    </li>
  );
};

export default StreamItem;
