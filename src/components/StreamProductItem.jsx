import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Utils
import { checkUrl } from "@/utils";

// Images
import starIcon from "../assets/images/icons/mono-star-filled.svg";

const StreamProductItem = ({ data = {}, onBtnClick = () => {} }) => {
  const {
    sold,
    title,
    price,
    images,
    _id: id,
    total: count,
    ads_post: adsPost,
    for_seller: bonusPrice,
    discount_price: discountPrice,
  } = data || {};
  const isValidAdsPost = checkUrl(adsPost);
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
        <div className="flex items-start relative">
          {/* price wrapper */}
          <div className="h-10">
            <del className="inline-block text-sm text-neutral-400">
              {isValidDiscountPrice ? discountPrice?.toLocaleString() : "-"}
            </del>

            {/* price */}
            <p className="text-[15px] leading-4 font-medium">
              {price?.toLocaleString() || 0}
              <span> so'm</span>
            </p>
          </div>

          {/* rating */}
          <div className="flex items-center gap-1.5 absolute top-1.5 right-0">
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
        <div className="flex items-end gap-1">
          <span className="text-sm text-neutral-400">Mavjud</span>
          <span className="block grow pb-1 border-t-2 border-neutral-400 border-dotted" />
          <span className="text-sm text-neutral-400">
            {(count - sold || 0)?.toLocaleString() || 0}
          </span>
        </div>

        {/* Link to Ads post */}
        {isValidAdsPost ? (
          <a
            href={adsPost}
            target="_blank"
            rel="noopener noreferrer"
            className="h-7 transition-colors duration-200 hover:text-primary-default"
          >
            Reklama posti
          </a>
        ) : (
          <span className="inline-block min-h-7 text-sm text-neutral-500">
            Reklama posti mavjud emas!
          </span>
        )}

        {/* btn */}
        <button
          onClick={() => onBtnClick(data)}
          className="btn-primary h-9 font-normal text-sm rounded-lg sm:rounded-[10px] sm:h-10"
        >
          Oqim yaratish
        </button>
      </div>
    </li>
  );
};

export default StreamProductItem;
