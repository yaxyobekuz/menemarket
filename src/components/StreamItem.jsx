import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";
import CopyButton from "./CopyButton";

// Utils
import { formatDate, formatTime } from "../utils";

// Redux
import { useDispatch } from "react-redux";
import { updateModal } from "@/store/features/modalSlice";

// Images
import deleteIcon from "../assets/images/icons/delete.svg";

const StreamItem = ({ data = {} }) => {
  const dispatch = useDispatch();
  const { _id: id, created_at: timestamp, name, product, isNew } = data || {};
  const { _id: productId, title: productTitle } = product || {};
  const url = `menemarket.uz/o/${id}`;

  const handleOpenDeleteStreamModal = () => {
    dispatch(
      updateModal({
        isOpen: true,
        name: "deleteStream",
        title: "Oqimni o'chirish",
        data: { stream: { id, name } },
        buttons: {
          secondary: { label: "Bekor qilish" },
          primary: { label: "O'chirish" },
        },
      })
    );
  };

  return (
    <li className="space-y-0.5">
      {/* Top */}
      <div className="flex items-center justify-between gap-[1px] bg-white p-3.5 rounded-t-lg sm:p-4 sm:gap-2">
        <h3 className="font-semibold truncate text-[17px] sm:text-lg">
          {name || "Oqim nomi mavjud emas!"}
        </h3>

        <button
          disabled={isNew}
          onClick={handleOpenDeleteStreamModal}
          className="btn shrink-0 size-8 disabled:opacity-50"
        >
          <Icon src={deleteIcon} alt="Delete icon" />
        </button>
      </div>

      {/* Main */}
      <div className="flex flex-col justify-between h-[180px] bg-white px-3.5 py-3 sm:h-[196px] sm:p-4">
        {/* Product */}
        <div className="space-y-1">
          <b className="font-medium sm:text-[17px]">Mahsulot</b>
          <Link
            to={`/products/product/${productId}`}
            className="line-clamp-2 text-neutral-500 transition-colors duration-200 hover:text-primary-default"
          >
            {productTitle || "Mahsulot mavjud emas!"}
          </Link>
        </div>

        <div className="space-y-3.5">
          {/* Url */}
          <div className="bg-gradient-gray py-2 px-3 rounded-lg">
            <div className="overflow-hidden">{isNew ? "Yangi oqim" : url}</div>
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
          disabled={isNew}
          text={"https://" + url}
          notificationText="Havoladan nusxa olindi"
          className="btn-primary w-full h-10 max-sm:font-normal"
        >
          Nusxa olish
        </CopyButton>
      </div>
    </li>
  );
};

export default StreamItem;
