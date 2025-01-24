import React, { useEffect, useState } from "react";

// Services
import blogService from "../api/services/blogService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateBlogs } from "../store/features/blogSlice";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Components
import Icon from "../components/Icon";
import BlogItem from "../components/BlogItem";
import BlogItemSkeleton from "../components/BlogItemSkeleton";

const Blogs = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const allBlogs = useSelector((state) => state.blogs.data);
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs);

  const loadBlogs = () => {
    setHasError(false);
    setIsLoading(true);

    blogService
      .getBlogs()
      .then((blogs) => {
        setFilteredBlogs(blogs);
        dispatch(updateBlogs(blogs));
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
    <section className="py-8 sm:py-10">
      <div className="container space-y-6">
        {/* Title */}
        <h1>Barcha yangiliklar</h1>

        {/* News */}
        {!isLoading && !hasError && filteredBlogs?.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {filteredBlogs.map((blog) => (
              <BlogItem key={blog._id} data={blog} />
            ))}
          </ul>
        ) : null}

        {/* Loading animation */}
        {isLoading && !hasError && (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {Array.from({ length: 9 }).map((_, index) => (
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

export default Blogs;
