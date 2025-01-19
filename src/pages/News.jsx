import React, { useEffect, useState } from "react";

// Services
import newsService from "../api/services/newsService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateNews } from "../store/features/newsSlice";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Components
import Icon from "../components/Icon";
import NewsItem from "../components/NewsItem";
import DotsLoader from "../components/DotsLoader";
import AdminPagesHeader from "../components/AdminPagesHeader";

const News = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const allNews = useSelector((state) => state.news.data);
  const [filteredNews, setFilteredNews] = useState(allNews || []);
  const [isLoading, setIsLoading] = useState(allNews?.length === 0);

  const loadNews = () => {
    setHasError(false);
    setIsLoading(true);

    newsService
      .getNews()
      .then((news) => {
        setFilteredNews(news);
        dispatch(updateNews(news));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (allNews?.length === 0) loadNews();
    else setTimeout(() => setIsLoading(false), 500);
  }, []);

  return (
    <div className="w-full pt-3.5 space-y-2 xs:space-y-4 xs:pb-8">
      {/* Header */}
      <AdminPagesHeader title="Yangiliklar" />

      {/* Main content */}
      <div className="container max-xs:!px-0">
        <div className="bg-gradient-to-b p-3.5 pb-8 space-y-4 from-transparent to-gray-medium xs:p-4 xs:pb-4 xs:from-gray-light xs:to-gray-medium/20 xs:rounded-xl">
          {/* News */}
          {!hasError && !isLoading && filteredNews?.length > 0 ? (
            <ul className="space-y-3.5">
              {filteredNews.map((news) => (
                <NewsItem data={news} key={news._id} />
              ))}
            </ul>
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

export default News;
