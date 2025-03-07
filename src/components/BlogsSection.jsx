import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Services
import blogService from "../api/services/blogService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateBlogs } from "../store/features/blogSlice";

// Components
import Icon from "../components/Icon";
import BlogItem from "../components/BlogItem";
import BlogItemSkeleton from "../components/BlogItemSkeleton";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const BlogsSection = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const sliceBlogs = (blogs) => blogs?.slice(0, 3) || [];
  const allBlogs = useSelector((state) => state.blogs.data);
  const [filteredBlogs, setFilteredBlogs] = useState(sliceBlogs(allBlogs));

  const loadBlogs = () => {
    setHasError(false);
    setIsLoading(true);

    blogService
      .getBlogs()
      .then((blogs) => {
        dispatch(updateBlogs(blogs));
        setFilteredBlogs(sliceBlogs(blogs));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    // Blogs
    if (allBlogs?.length === 0) loadBlogs();
    else setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <section className="relative py-8 sm:py-10">
      <div className="container space-y-6">
        {/* Section title */}
        <div className="flex items-center justify-between sticky top-16 z-10 h-10 w-full  bg-white xs:h-12 sm:h-14 sm:top-[72px]">
          <h2>So'nggi yangiliklar</h2>

          {/* brands page link */}
          <Link to="/blogs" className="group btn">
            <span className="text-neutral-600 text-sm transition-colors duration-200 group-hover:text-black sm:text-base">
              Yangiliklar
            </span>

            <Icon
              size={20}
              src={arrowRightIcon}
              alt="Right arrow icon"
              className="size-4 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-5"
            />
          </Link>
        </div>

        {/* Blogs */}
        {!isLoading && !hasError && filteredBlogs?.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {filteredBlogs.map((blog) => (
              <BlogItem key={blog._id} data={blog} />
            ))}
          </ul>
        ) : null}

        {/* Loading animation */}
        {isLoading && !hasError && (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <BlogItemSkeleton key={index} />
            ))}
          </ul>
        )}

        {/* Reload button */}
        {hasError && !isLoading && (
          <div className="flex justify-center py-16">
            <button
              title="Reload"
              className="p-1.5"
              aria-label="Reload"
              onClick={loadBlogs}
            >
              <Icon src={reloadIcon} alt="Reload icon" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
