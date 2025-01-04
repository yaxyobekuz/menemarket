import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Components
import Icon from "../components/Icon";
import ProductItem from "../components/ProductItem";

// Data
import products from "../data/products";
import searchSuggestions from "../data/searchSuggestions";

// Images
import crossIcon from "../assets/images/icons/cross.svg";
import searchIcon from "../assets/images/icons/search.svg";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [suggestions, setSuggestions] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || "";
  const [searchedProducts, setSearchedProducts] = useState(null);
  const [searchInputValue, setSearchInputValue] = useState(searchQuery);

  useEffect(() => {
    // Update random search suggestions
    let suggestions = [];
    for (let index = 0; index < 20; index++) {
      const randomIndex = Math.floor(Math.random() * searchSuggestions.length);
      const suggestion = searchSuggestions[randomIndex];
      suggestions = [...suggestions, suggestion];
    }
    setSuggestions(suggestions);

    if (searchQuery && searchQuery?.length > 0) {
      updateProductsByQuery(searchQuery);
    }
  }, []);

  const handleClearSearchInputValue = () => {
    navigate("/search");
    setSearchInputValue("");
  };

  const updateProductsByQuery = (q) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(q.toLowerCase())
    );

    setSearchedProducts(filteredProducts);
  };

  const handleQueryChange = () => {
    const q = encodeURIComponent(searchInputValue.trim());
    if (searchInputValue.trim()) {
      updateProductsByQuery(q);
      navigate(`/search?query=${q}`);
    } else {
      navigate("/search");
    }
  };

  return (
    <div className="py-6 sm:pb-10 sm:pt-8">
      <div className="container space-y-8">
        {/* Search form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleQueryChange(e);
          }}
        >
          <label className="group flex items-center justify-center gap-3.5 relative overflow-hidden bg-gray-light h-11 pl-4 pr-2.5 rounded-xl">
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
              maxLength={1024}
              placeholder="Qidirish"
              value={searchInputValue}
              className="size-full bg-transparent outline-none"
              onChange={(e) => setSearchInputValue(e.target.value)}
            />

            {/* Cross button */}
            {searchInputValue && searchInputValue.length > 0 && (
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

        {/* Search suggestion */}
        <nav className="products-layout-tabs mb-8 sm:mb-14">
          <ul className="flex gap-x-3.5 relative w-full overflow-x-auto scroll-x-primary scroll-smooth p-0.5 pb-5 sm:gap-x-4 md:gap-x-5">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="shrink-0">
                <button className="btn bg-gray-light px-5 py-2.5 font-normal text-sm hover:bg-neutral-200 sm:font-medium sm:text-base">
                  {suggestion}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search results */}
        {searchedProducts && searchedProducts?.length > 0 ? (
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {searchedProducts.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>
        ) : (
          <div className="flex items-center justify-center h-52 text-center text-neutral-500">
            {searchQuery
              ? "Qidiruv natijasi bo'yicha hech qanday mahsulot topilmadi..."
              : "Bu yerda qidiruv natijalari chiqadi..."}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
