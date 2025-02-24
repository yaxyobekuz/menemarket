import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Images
import starIcon from "../assets/images/icons/mono-star-filled.svg";

const ProductItem = ({ data = {} }) => {
  const {
    title,
    price,
    images,
    _id: id,
    discount_price: discountPrice,
  } = data || {};
  const isValidDiscountPrice = discountPrice > price;
  const image = images?.length ? images[0]?.medium : "";

  return (
    <li className="relative">
      {/* Image wrapper */}
      <div className="relative overflow-hidden mb-1.5 rounded-xl">
        <img
          src={image}
          alt={title}
          width={232}
          height={309}
          loading="lazy"
          className="w-full h-auto aspect-[3/4] object-cover bg-gray-light"
        />
      </div>

      {/* Product details */}
      <div className="flex flex-col justify-between h-[88px] px-1.5">
        {/* title */}
        <h3
          className={`text-sm leading-[18px] ${
            isValidDiscountPrice ? "line-clamp-2" : "line-clamp-3"
          }`}
        >
          {title || "Sarlavha mavjud emas!"}
        </h3>

        {/* bottom */}
        <div className="flex items-start justify-between relative">
          {/* price wrapper */}
          <div>
            {isValidDiscountPrice && (
              <del className="inline-block text-sm text-neutral-400">
                {discountPrice?.toLocaleString() || "0"}
              </del>
            )}

            {/* price */}
            <p className="text-[15px] leading-4 font-medium">
              {price?.toLocaleString() || "0"}
              <span> so'm</span>
            </p>
          </div>

          {/* rating */}
          <div
            className={`${
              isValidDiscountPrice && "top-1"
            } flex items-center gap-1.5 absolute right-0`}
          >
            <span className="text-sm text-neutral-400 leading-none">4.8</span>

            {/* star */}
            <Icon
              size={14}
              src={starIcon}
              alt="Star icon"
              className="size-3.5"
            />
          </div>
        </div>
      </div>

      {/* Link */}
      <Link
        aria-label="Product details"
        to={`/products/product/${id}`}
        className="absolute inset-0 size-full rounded-xl"
      />
    </li>
  );
};

export default ProductItem;
