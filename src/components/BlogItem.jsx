import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ data = {} }) => {
  const { banner: image, _id: id, desc: description, title } = data || {};

  return (
    <li className="w-full">
      <Link to={`/blogs/blog/${id}`} className="w-full group space-y-1.5">
        {/* Image */}
        <img
          src={image}
          loading="lazy"
          alt="Blog image"
          className="w-full h-auto aspect-[5/3] object-cover bg-gray-light rounded-xl"
        />

        {/* Title */}
        <h3 className="line-clamp-3 font-medium transition-colors duration-200 group-hover:text-primary-default sm:text-lg">
          {title || "Yangilik sarlavhasi"}
        </h3>

        {/* Description */}
        <p className="line-clamp-2 text-neutral-500">
          {description?.slice(0, 144) || "Yangilik haqida"}
        </p>
      </Link>
    </li>
  );
};

export default BlogItem;
