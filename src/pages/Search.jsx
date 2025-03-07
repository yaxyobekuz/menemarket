import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Utils
import { getRandomNumber } from "@/utils";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Data
import searchSuggestions from "@/data/searchSuggestions";

// Images
import crossIcon from "@/assets/images/icons/cross.svg";
import searchIcon from "@/assets/images/icons/search.svg";

// Services
import productService from "@/api/services/productService";
import { updateProducts } from "@/store/features/productsSlice";

// Stickers
import Lottie from "lottie-react";
import dealOutSticker from "@/assets/stickers/deal-out.json";
import shruggingSticker from "@/assets/stickers/shrugging.json";

// Components
import Icon from "@/components/Icon";
import ProductItem from "@/components/ProductItem";
import ProductItemSkeleton from "@/components/ProductItemSkeleton";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";
  const [searchedProducts, setSearchedProducts] = useState(null);
  const allProducts = useSelector((state) => state.products.data);
  const [showClearBtn, setShowClearBtn] = useState(searchQuery?.length > 0);
  const [suggestions] = useState(() => {
    let suggestions = [];
    for (let index = 0; index < 20; ) {
      const randomIndex = getRandomNumber(0, searchSuggestions.length);
      const suggestion = searchSuggestions[randomIndex];
      if (!suggestions.includes(suggestion)) {
        index++;
        suggestions.push(suggestion);
      }
    }
    return suggestions;
  });

  // Load products
  const loadProducts = () => {
    setIsLoading(true);

    productService
      .getProducts()
      .then((products) => dispatch(updateProducts(products)))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    document.title = "Mene Market | Mahsulotlarni qidirish";

    if (allProducts?.length === 0 || !allProducts) loadProducts();
    else setTimeout(() => setIsLoading(false), 500);
  }, []);

  // Update products by query and new products loaded
  useEffect(() => {
    if (searchQuery && searchQuery?.length > 0) {
      updateProductsByQuery(searchQuery);
    }
  }, [allProducts?.length]);

  // Clear search input value and filtered products
  const handleClearSearchInputValue = () => {
    setShowClearBtn(false);
    setSearchedProducts([]);
    searchInputRef.current.value = "";
    navigate("/search", { replace: true });
  };

  const updateProductsByQuery = (q) => {
    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().includes(q?.toLowerCase());
    });

    setSearchedProducts(filteredProducts);
  };

  const handleProductsSearch = (e) => {
    e.preventDefault();
    const inputValue = e.target.querySelector("input")?.value?.trim();

    if (inputValue?.length > 0) {
      const newQuery = encodeURIComponent(inputValue);
      navigate(`/search?query=${newQuery}`, { replace: true });
      updateProductsByQuery(inputValue);
    } else {
      setSearchedProducts([]);
      navigate("/search", { replace: true });
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setShowClearBtn(value?.length > 0);
  };

  const handleSearchProductsBySuggestion = (suggestion) => {
    setShowClearBtn(true);
    updateProductsByQuery(suggestion);
    searchInputRef.current.value = suggestion;
    const query = encodeURIComponent(suggestion);
    navigate(`/search?query=${query}`, { replace: true });
  };

  return (
    <div className="py-6 sm:pb-10 sm:pt-8">
      <div className="container space-y-6 sm:space-y-8">
        <h1>Qidirish</h1>

        {/* Search suggestion */}
        <nav className="products-layout-tabs">
          <ul className="flex gap-x-3.5 relative w-full overflow-x-auto scroll-x-primary scroll-smooth p-0.5 pb-5 sm:gap-x-4 md:gap-x-5">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="shrink-0">
                <button
                  onClick={() => handleSearchProductsBySuggestion(suggestion)}
                  className="btn bg-gray-light px-5 py-2.5 font-normal text-sm hover:bg-neutral-200 sm:font-medium sm:text-base"
                >
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search form */}
        <form
          onSubmit={handleProductsSearch}
          className="sticky top-16 z-10 py-2 bg-white sm:top-[72px] sm:py-4 md:top-20"
        >
          <label className="group flex items-center justify-center gap-3.5 relative overflow-hidden bg-gray-light h-11 pl-4 pr-2.5 rounded-lg sm:h-12">
            {/* Search icon */}
            <Icon
              src={searchIcon}
              alt="Search icon"
              className="size-6 shrink-0"
            />

            {/* Input */}
            <input
              autoFocus
              type="search"
              maxLength={96}
              ref={searchInputRef}
              placeholder="Qidirish"
              defaultValue={searchQuery}
              onChange={handleInputChange}
              className="size-full bg-transparent outline-none"
            />

            {/* Cross button */}
            {showClearBtn && (
              <button
                type="button"
                className="p-1.5 shrink-0"
                onClick={handleClearSearchInputValue}
              >
                <Icon
                  src={crossIcon}
                  alt="Cross icon"
                  className="size-6 shrink-0"
                />
              </button>
            )}

            {/* Input active line */}
            <span className="inline-block absolute bottom-0 h-0.5 w-0 bg-transparent transition-[background-color,width] duration-300 group-focus-within:w-full group-focus-within:bg-primary-default"></span>
          </label>
        </form>

        {/* Search results */}
        {searchedProducts && searchedProducts?.length > 0 && !isLoading && (
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {searchedProducts.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>
        )}

        {/* Loading animation */}
        {isLoading && (
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
              <ProductItemSkeleton key={index} />
            ))}
          </ul>
        )}

        {!isLoading &&
          (searchedProducts?.length === 0 || !searchedProducts) && (
            <div className="flex flex-col items-center justify-center gap-5 pt-16 pb-24">
              {(searchQuery?.length === 0 || !searchQuery) && (
                <>
                  <Lottie
                    animationData={dealOutSticker}
                    className="size-28 sm:size-32"
                  />

                  <b className="text-[17px] font-semibold text-center sm:text-[19px]">
                    Bu yerda qidiruv natijalari <br />
                    chiqadi!
                  </b>
                </>
              )}

              {searchQuery?.length > 0 && searchQuery && (
                <>
                  <Lottie
                    className="size-28 sm:size-32"
                    animationData={shruggingSticker}
                  />

                  <b className="text-[17px] font-semibold text-center sm:text-[19px]">
                    Qidiruv natijasi bo'yicha hech <br /> qanday mahsulot
                    topilmadi!
                  </b>
                </>
              )}
            </div>
          )}
      </div>
    </div>
  );
};

export default Search;
