import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Components
import Icon from "@/components/Icon";

// Notification
import { notification } from "@/notification";

// Utils
import { formatDate, formatTime } from "@/utils";

// Ui components
import { Skeleton } from "@/components/ui/skeleton";

// Services
import blogService from "@/api/services/blogService";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

const Blog = () => {
  const location = useLocation();
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const {
    title,
    banner: image,
    desc: description,
    created_at: timestamp,
  } = blog || {};

  useEffect(() => {
    document.title = "Mene Market | Yangilik";
  }, []);

  const loadBlog = () => {
    const validId = blogId?.length > 16;

    if (!validId) {
      setTimeout(() => notification.error("Yangilik topilmadi"), 0);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setHasError(false);
    setIsLoading(true);

    // Fetch blog from API
    blogService
      .getBlogsById(blogId)
      .then((blog) => {
        setBlog(blog);
        document.title = `Mene Market | Yangilik: ${blog?.title || ""}`;
      })
      .catch(() => {
        setHasError(true);
        notification.error("Yangilikni yuklashda xatolik");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (blog?._id !== blogId) loadBlog();
    else {
      setTimeout(() => {
        setHasError(false);
        setIsLoading(false);
      }, 500);
    }
  }, [location.pathname]);

  return (
    <div className="py-6 sm:pb-10 sm:pt-8">
      <div className="container !max-w-5xl">
        {/* Blog */}
        {!hasError && !isLoading && blog && (
          <div className="space-y-5">
            {/* Top */}
            <div className="flex items-center gap-3.5 sm:gap-5">
              {/* Date */}
              <span className="text-gray-400 sm:text-[17px]">
                {formatDate(timestamp)}
              </span>

              {/* Time */}
              <span className="text-gray-400 sm:text-[17px]">
                {formatTime(timestamp)}
              </span>
            </div>

            {/* Image */}
            <img
              width={1024}
              height={738}
              alt="Blog image"
              src={image?.large}
              className="w-full h-auto bg-gray-light object-cover aspect-[4/3] rounded-sm"
            />

            {/* Title */}
            <h1 className="text-2xl md:text-3xl">{title}</h1>

            {/* Description */}
            <div className="space-y-4">
              {(description || "").split("\n").map((item, index) => (
                <p className="xs:text-lg md:text-[19px]" key={index}>
                  {item?.trim()}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Loading animation */}
        {!hasError && isLoading && (
          <div className="space-y-5">
            {/* Top */}
            <div className="flex items-center gap-3.5 sm:gap-5">
              <Skeleton className="w-40 h-6" />
              <Skeleton className="w-20 h-6" />
            </div>

            {/* Image */}
            <Skeleton className="w-full h-auto aspect-[4/3]" />

            {/* Title */}
            <Skeleton className="w-2/3 h-6 sm:h-7 md:h-8" />

            {/* Description */}
            <div className="space-y-5">
              <div className="space-y-2.5">
                <Skeleton className="w-full h-4 sm:h-5" />
                <Skeleton className="w-full h-4 sm:h-5" />
              </div>
              <div className="space-y-2.5">
                <Skeleton className="w-2/3 h-4 sm:h-5" />
                <Skeleton className="w-full h-4 sm:h-5" />
                <Skeleton className="w-full h-4 sm:h-5" />
                <Skeleton className="w-full h-4 sm:h-5" />
              </div>
            </div>
          </div>
        )}

        {/* Reload button */}
        {hasError && !isLoading && (
          <div className="flex justify-center py-16">
            <button
              title="Reload"
              className="p-1.5"
              onClick={loadBlog}
              aria-label="Reload"
            >
              <Icon src={reloadIcon} alt="Reload icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
