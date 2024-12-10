import React from "react";

import starIcon from "../assets/images/icons/mono-star-filled.svg";
import Icon from "./Icon";

const ProductItem = ({ data = {} }) => {
  return (
    <li className="relative">
      {/* Image wrapper */}
      <div className="relative overflow-hidden mb-1.5 rounded-xl">
        <img
          width={232}
          height={309}
          loading="lazy"
          src={data.image}
          alt={data.title}
          className="w-full h-auto aspect-[3/4] bg-gray-light"
        />
      </div>

      {/* Product details */}
      <div className="flex flex-col justify-between h-[88px] px-1.5">
        {/* title */}
        <h3 className="text-sm leading-[18px] line-clamp-2">{data.title}</h3>

        {/* bottom */}
        <div className="flex items-start justify-between">
          {/* price wrapper */}
          <div>
            <del className="inline-block text-sm text-neutral-400">
              {data.price.toLocaleString()}
            </del>

            {/* price */}
            <p className="text-[15px] leading-4 font-medium">
              {data.price.toLocaleString()}
              <span> so'm</span>
            </p>
          </div>

          {/* rating */}
          <div className="flex items-center gap-1.5">
            <span className="text-sm text-neutral-400 leading-none">4.8</span>

            {/* star */}
            <Icon
              size={14}
              alt="Star icon"
              src={starIcon}
              className="size-3.5"
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
