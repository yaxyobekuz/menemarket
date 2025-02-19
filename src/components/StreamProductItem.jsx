import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Images
import starIcon from "../assets/images/icons/mono-star-filled.svg";

const StreamProductItem = ({ data = {}, onBtnClick = () => {} }) => {
  const {
    title,
    price,
    images,
    _id: id,
    total: count,
    for_seller: bonusPrice,
    discount_price: discountPrice,
  } = data || {};
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
          className="w-full h-auto aspect-[3/4] bg-gray-light"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col gap-1.5 px-1.5">
        {/* title */}
        <div className="h-9">
          <Link
            to={`/products/product/${id}`}
            children={title || "Sarlavha mavjud emas!"}
            className="text-sm leading-[18px] line-clamp-2 hover:text-primary-default"
          />
        </div>

        {/* price & rating */}
        <div className="flex items-start justify-between">
          {/* price wrapper */}
          <div className="h-10">
            <del className="inline-block text-sm text-neutral-400">
              {discountPrice?.toLocaleString() || 0}
            </del>

            {/* price */}
            <p className="text-[15px] leading-4 font-medium">
              {price?.toLocaleString() || 0}
              <span> so'm</span>
            </p>
          </div>

          {/* rating */}
          <div className="flex items-center gap-1.5">
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

        {/* prize */}
        <div className="flex items-end gap-1">
          <span className="text-sm text-neutral-400">To'lov</span>
          <span className="block grow pb-1 border-t-2 border-neutral-400 border-dotted" />
          <span className="text-sm text-green-600">
            {bonusPrice?.toLocaleString() || 0}
          </span>
        </div>

        {/* count */}
        <div className="flex items-end gap-1 pb-2">
          <span className="text-sm text-neutral-400">Mavjud</span>
          <span className="block grow pb-1 border-t-2 border-neutral-400 border-dotted" />
          <span className="text-sm text-neutral-400">
            {count?.toLocaleString() || 0}
          </span>
        </div>

        {/* btn */}
        <button
          onClick={() => onBtnClick(data)}
          className="btn-primary h-8 font-normal text-sm rounded-lg sm:rounded-xl xs:h-9 sm:h-10"
        >
          Oqim yaratish
        </button>
      </div>
    </li>
  );
};

export default StreamProductItem;
