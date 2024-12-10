import React from "react";
import { Link } from "react-router-dom";

const NewsItem = ({ data = {} }) => {
  return (
    <li className="w-full">
      <Link
        className="w-full group"
        to={`/blog/${encodeURIComponent(data.title)}`}
      >
        <img
          loading="lazy"
          alt="News image"
          src={data.image}
          className="w-full h-auto aspect-[5/3] object-cover bg-gray-light rounded-xl mb-3.5"
        />

        <h3 className="mb-3 line-clamp-3 text-lg font-medium transition-colors duration-200 group-hover:text-primary-default">
          {data.title}
        </h3>

        <p className="line-clamp-2 text-neutral-500">
          {data.description?.slice(0, 144)}
        </p>
      </Link>
    </li>
  );
};

export default NewsItem;
