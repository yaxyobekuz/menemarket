import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ data = {} }) => {
  return (
    <li className="w-full">
      <Link
        className="w-full group space-y-1.5"
        to={`/blog/${encodeURIComponent(data.title)}`}
      >
        <img
          loading="lazy"
          alt="News image"
          src={data.image}
          className="w-full h-auto aspect-[5/3] object-cover bg-gray-light rounded-xl"
        />

        <h3 className="line-clamp-3 font-medium transition-colors duration-200 group-hover:text-primary-default sm:text-lg">
          {data.title}
        </h3>

        <p className="line-clamp-2 text-neutral-500">
          {data.description?.slice(0, 144)}
        </p>
      </Link>
    </li>
  );
};

export default BlogItem;
