import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

// Toaster (For notification)
import { notification } from "../notification";

// Utils
import { formatDate, formatTime } from "../utils";

// Services
import newsService from "../api/services/newsService";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Components
import Icon from "../components/Icon";
import DotsLoader from "../components/DotsLoader";
import AdminPagesHeader from "../components/AdminPagesHeader";

const NewsDetail = () => {
  const location = useLocation();
  const { newsId } = useParams();
  const [news, setNews] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadNews = () => {
    const validId = newsId?.length > 16;

    if (!validId) {
      setTimeout(() => notification.error("Yangilik topilmadi"), 0);
      setHasError(true);
      setIsLoading(false);
      return;
    }

    setHasError(false);
    setIsLoading(true);

    newsService
      .getNewsById(newsId)
      .then((news) => {
        if (news?._id) setNews(news);
        else {
          setHasError(true);
          notification.error("Yangilik topilmadi");
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (news?._id !== newsId) loadNews();
    else {
      setTimeout(() => {
        setHasError(false);
        setIsLoading(false);
      }, 500);
    }
  }, [location.pathname]);

  const {
    title,
    banner: image,
    desc: description,
    created_at: timestamp,
  } = news || {};

  const screenWidth = window.innerWidth;

  return (
    <div className="w-full pt-3.5 pb-6 space-y-3.5 xs:space-y-4 xs:pb-8">
      {/* Header */}
      <AdminPagesHeader
        title="Yangilik"
        className="!max-w-5xl"
        link="/admin/dashboard/news"
      />

      {/* Main content */}
      <div className="container !max-w-5xl">
        <div className="overflow-hidden bg-gradient-gray rounded-xl">
          {/* News */}
          {news && !hasError && !isLoading ? (
            <>
              <div className="relative xs:pb-20">
                <img
                  width={984}
                  height={288}
                  alt="News banner"
                  src={image[screenWidth > 425 ? "small" : "large"]}
                  className="w-full h-auto object-cover bg-gray-light xs:h-64 xs:aspect-auto xs:brightness-50 xs:blur md:h-72"
                />

                <Icon
                  size={288}
                  alt="News image"
                  src={image?.large}
                  className="hidden absolute left-5 bottom-0 size-64 object-cover bg-gray-light border-8 border-gray-light rounded-xl xs:inline-block md:size-72 md:left-10"
                />

                {/* Timestamp */}
                <div className="hidden items-center gap-3.5 absolute top-5 right-5 xs:flex md:top-10 md:right-10">
                  <p className="text-white md:text-lg">
                    {formatDate(timestamp)}
                  </p>
                  <p className="text-white md:text-lg">
                    {formatTime(timestamp)}
                  </p>
                </div>
              </div>

              {/* Timestamp (For mobile) */}
              <div className="flex items-center gap-3.5 p-3.5 pb-0 xs:hidden">
                <p>{formatDate(timestamp)}</p>
                <p>{formatTime(timestamp)}</p>
              </div>

              {/* Details */}
              <div className="p-3.5 space-y-3.5 xs:px-6 xs:pt-4 xs:pb-8 md:pt-5 md:px-12">
                {/* Title */}
                <h1 className="text-xl sm:text-2xl lg:text-[28px]">{title}</h1>

                {/* Description */}
                <div className="space-y-4">
                  {(description || "").split("\n").map((item, index) => (
                    <p
                      key={index}
                      className="text-neutral-500 text-[17px] sm:text-lg md:text-[19px]"
                    >
                      {item?.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {/* Loading animation */}
          {!hasError && isLoading && (
            <div className="py-20">
              <DotsLoader color="#0085FF" />
            </div>
          )}

          {/* Reload button */}
          {hasError && !isLoading && (
            <div className="flex justify-center py-16">
              <button
                title="Reload"
                className="p-1.5"
                onClick={loadNews}
                aria-label="Reload"
              >
                <Icon src={reloadIcon} alt="Reload icon" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
