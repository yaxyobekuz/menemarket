import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";
import CopyButton from "./CopyButton";

// Utils
import { formatDate, formatTime } from "../utils";

// Images
import deleteIcon from "../assets/images/icons/delete.svg";

const StreamItem = ({ data = {} }) => {
  const { _id: id, created_at: timestamp, name, product } = data || {};
  const { _id: productId, title: productTitle } = product || {};
  const url = `menemarket.uz/oqim/${id}`;

  return (
    <li className="space-y-0.5">
      {/* Top */}
      <div className="flex items-center justify-between gap-[1px] bg-white p-3.5 rounded-t-lg sm:p-4 sm:gap-2">
        <h3 className="text-[15px] font-semibold truncate xs:text-base sm:text-lg">
          {name || "Oqim nomi mavjud emas!"}
        </h3>

        <button disabled className="btn size-8">
          <Icon src={deleteIcon} alt="Delete icon" />
        </button>
      </div>

      {/* Main */}
      <div className="flex flex-col justify-between h-[180px] bg-white px-3.5 py-3 sm:h-[196px] sm:p-4">
        {/* Product */}
        <div className="space-y-1">
          <b className="font-medium text-[15px] sm:text-[17px]">Mahsulot</b>
          <Link
            to={`/products/product/${productId}`}
            className="line-clamp-2 text-neutral-500 text-[15px] transition-colors duration-200 hover:text-primary-default sm:text-base"
          >
            {productTitle || "Mahsulot nomi mavjud emas!"}
          </Link>
        </div>

        <div className="space-y-3.5">
          {/* Url */}
          <div className="bg-gradient-gray py-2 px-3 rounded-lg">
            <div className="overflow-hidden text-sm sm:text-base">{url}</div>
          </div>

          {/* Date & Time */}
          <div className="flex items-center justify-end gap-3.5">
            <span className="text-neutral-500 text-sm">
              {formatDate(timestamp)}
            </span>

            <span className="text-neutral-500 text-sm">
              {formatTime(timestamp)}
            </span>
          </div>
        </div>
      </div>

      {/* Sub */}
      <div className="flex items-center justify-between gap-3.5 bg-white p-3.5 rounded-b-lg sm:p-4">
        <CopyButton
          text={"https://" + url}
          notificationText="Havoladan nusxa olindi"
          className="btn-primary w-full h-10 font-normal text-sm xs:text-base"
        >
          Nusxa olish
        </CopyButton>
      </div>
    </li>
  );
};

export default StreamItem;
