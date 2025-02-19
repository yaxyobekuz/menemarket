import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

const NewsItem = ({ data = {} }) => {
  const { _id: id, title, desc: description, banner: image } = data || {};
  return (
    <li>
      <Link
        to={`/admin/dashboard/news/${id}`}
        className="flex items-center gap-3.5 p-3.5 bg-white/70 rounded-xl"
      >
        {/* icon */}
        <Icon
          size={72}
          alt="News image"
          src={image?.small}
          className="size-16 object-cover bg-neutral-200 xs:size-[72px] rounded-lg"
        />

        {/* details */}
        <div className="max-sm:space-y-1">
          <h3 className="font-medium line-clamp-1 max-w-full sm:text-lg">
            {title || "Yangilik arlavhasi"}
          </h3>

          <p className="text-neutral-500 line-clamp-2 text-sm sm:text-base">
            {description || "Ba'tafsil ma'lumot"}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default NewsItem;
