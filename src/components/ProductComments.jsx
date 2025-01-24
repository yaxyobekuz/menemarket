import React, { useEffect, useState } from "react";

// Components
import Icon from "../components/Icon";

// Utils
import { getAvatarByIndex } from "../utils";

// Redux
import { useDispatch } from "react-redux";
import { updateModal } from "../store/features/modalSlice";

// Services
import productService from "../api/services/productService";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";
import ProductCommentsSkeleton from "./ProductCommentsSkeleton";

const ProductComments = ({
  product,
  comments,
  renderStars,
  updateComments = () => {},
}) => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const { _id: productId, images } = product || {};
  const [avatarsIndex, setAvatarsIndex] = useState([]);
  const [isLoading, setIsLoading] = useState(!comments);
  const [ratingStats, setRatingStats] = useState({
    counts: [],
    average: "0.0",
    percentages: [],
  });

  const updateAvatarsIndex = (comments) => {
    let indexes = [];
    let maleIndex = 0;
    let femaleIndex = 0;

    comments.map(({ gender }) => {
      if (gender === "male") {
        maleIndex++;
        indexes.push(maleIndex);
      } else {
        femaleIndex++;
        indexes.push(femaleIndex);
      }
    });

    setAvatarsIndex(indexes);
  };

  const updateRatingStats = (comments) => {
    const totalRatings = comments.length;
    const counts = [0, 0, 0, 0, 0];
    let totalScore = 0;

    comments.forEach(({ rating }) => {
      const roundedRating = Math.floor(rating);
      if (roundedRating >= 1 && roundedRating <= 5) {
        counts[roundedRating - 1]++;
      }
      totalScore += rating;
    });

    const percentages = counts.map((count) =>
      Math.round((count / totalRatings) * 100)
    );

    const average =
      totalRatings > 0 ? (totalScore / totalRatings).toFixed(1) : 0;

    setTimeout(() => {
      setRatingStats({ average, counts, percentages });
    }, 300);
  };

  // Load products
  const loadComments = () => {
    setHasError(false);
    setIsLoading(true);

    productService
      .getProductComments(productId)
      .then((comments) => {
        updateComments(comments);
        updateRatingStats(comments);
        updateAvatarsIndex(comments);
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  const handleOpenCommentModal = () => {
    dispatch(
      updateModal({
        data: { productId },
        isOpen: true,
        name: "createComment",
        title: "Sharh qoldirish",
        buttons: {
          secondary: { label: "Yopish" },
          primary: { label: "Yuborish", action: "createComment" },
        },
      })
    );
  };

  useEffect(() => {
    if (!comments) loadComments();
    else {
      updateRatingStats(comments);
      updateAvatarsIndex(comments);
    }
  }, []);

  return (
    <>
      {/* Comments */}
      {!isLoading && !hasError ? (
        <div className="flex flex-col-reverse items-start gap-5 md:flex-row">
          <div className="w-full">
            {/* Reviews */}
            {comments?.length > 0 ? (
              <ul className="space-y-5">
                {comments.map((comment, index) => {
                  const {
                    rating,
                    gender,
                    commentor: name,
                    comment: description,
                  } = comment || {};
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3.5 w-full bg-white p-3.5 rounded-xl border transition-colors duration-200 hover:bg-neutral-50/50 xs:p-4 xs:gap-4 sm:p-5 sm:gap-5"
                    >
                      {/* User avatar */}
                      <Icon
                        size={48}
                        alt="User avatar"
                        src={getAvatarByIndex(
                          gender || "default",
                          avatarsIndex[index]
                        )}
                        className="size-10 shrink-0 bg-gray-light object-cover rounded-full xs:size-11 sm:size-12"
                      />

                      {/* details */}
                      <div className="w-full space-y-1.5">
                        <div className="flex items-center justify-between">
                          <h3
                            aria-label="Author name"
                            className="font-medium line-clamp-1 text-base sm:text-lg"
                          >
                            {name}
                          </h3>

                          {renderStars(rating, false)}
                        </div>

                        {/* description */}
                        <p className="text-neutral-400 text-sm xs:text-base">
                          {description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : null}

            {comments?.length === 0 || comments?.length ? (
              <b className="text-lg font-medium sm:text-xl">
                Hech qanday sharhlar mavjud emas!
              </b>
            ) : null}
          </div>

          {/* Rating */}
          <div className="w-full space-y-5 md:max-w-md md:min-w-96">
            <div className="w-full p-3.5 space-y-5 rounded-xl border xs:p-4 sm:p-5">
              {/* header */}
              <div className="flex items-center justify-between">
                <b className="text-base font-medium sm:text-lg">Reyting</b>

                {renderStars(ratingStats.average)}
              </div>

              {/* body */}
              <ul className="space-y-1.5">
                {Array.from({ length: 5 }).map((_, index) => {
                  return (
                    <li key={index} className="flex items-center gap-3.5">
                      <span className="w-2 text-center xs:w-2.5">
                        {index + 1}
                      </span>
                      <div className="grow h-2.5 bg-gray-light rounded-full xs:h-3.5">
                        <div
                          style={{
                            width: `${ratingStats.percentages[index] || 0}%`,
                          }}
                          className="h-full bg-primary-default rounded-full transition-[width] duration-1000"
                        />
                      </div>
                      <span className="w-8 text-right text-sm xs:w-10 xs:text-base">
                        {ratingStats.percentages[index] || 0}%
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Open add review modal btn */}
            <button
              onClick={handleOpenCommentModal}
              className="btn-primary w-full h-11 rounded-xl font-normal xs:font-medium"
            >
              Sharh qoldirish
            </button>
          </div>
        </div>
      ) : null}

      {/* Loading animation */}
      {!hasError && isLoading && <ProductCommentsSkeleton />}

      {/* Reload button */}
      {hasError && !isLoading && (
        <div className="flex justify-center py-16">
          <button
            title="Reload"
            className="p-1.5"
            aria-label="Reload"
            onClick={loadComments}
          >
            <Icon src={reloadIcon} alt="Reload icon" />
          </button>
        </div>
      )}
    </>
  );
};

export default ProductComments;
