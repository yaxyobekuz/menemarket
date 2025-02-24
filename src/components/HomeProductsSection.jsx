import React, { useState } from "react";

// Redux
import { useSelector } from "react-redux";

// Components
import Icon from "./Icon";
import ProductItem from "./ProductItem";
import ProductItemSkeleton from "./ProductItemSkeleton";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

const HomeProductsSection = ({
  dataName = "",
  title = "Sarlavha",
  action = () => {},
}) => {
  const [index, setIndex] = useState(1);
  const { hasError, isLoading, data } = useSelector(
    (state) => state.homeProducts
  );
  const allProducts = data[dataName];
  const filteredProducts = allProducts?.slice(0, index * 10);

  return (
    <section className="relative py-8 sm:pt-10 sm:pb-14">
      <div className="container space-y-6">
        {/* Section title */}
        <div className="flex items-center sticky top-16 z-10 h-10 w-full bg-white xs:h-12 sm:h-14 sm:top-[72px] md:top-20">
          <h2>{title}</h2>
        </div>

        {/* Products */}
        {!hasError && !isLoading && filteredProducts?.length > 0 ? (
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {filteredProducts.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>
        ) : null}

        {/* Loading animation */}
        {!hasError && isLoading && (
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductItemSkeleton key={index} />
            ))}
          </ul>
        )}

        {/* Reload button */}
        {hasError && !isLoading && (
          <div className="flex justify-center py-16">
            <button
              title="Reload"
              onClick={action}
              className="p-1.5"
              aria-label="Reload"
            >
              <Icon src={reloadIcon} alt="Reload icon" />
            </button>
          </div>
        )}

        {/* Show more products button */}
        {filteredProducts?.length !== allProducts?.length && (
          <div className="flex justify-center w-full pt-3.5 xs:pt-5">
            <button
              disabled={isLoading}
              onClick={() => setIndex(index + 1)}
              className="w-11/12 bg-gray-light px-5 py-2 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-gray-medium/50 disabled:opacity-50 xs:w-3/4 sm:w-auto sm:px-28 sm:text-lg sm:rounded-xl md:px-32"
            >
              Ko'proq ko'rsatish
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeProductsSection;
