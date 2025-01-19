import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// Data
import categories from "../data/categories";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Services
import productService from "../api/services/productService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../store/features/productsSlice";

// Components
import Icon from "../components/Icon";
import ProductItem from "../components/ProductItem";
import ProductItemSkeleton from "../components/ProductItemSkeleton";

const Products = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const allProducts = useSelector((state) => state.products.data);
  const [filteredProducts, setFilteredProducts] = useState(allProducts || []);

  const loadProducts = () => {
    setHasError(false);
    setIsLoading(true);

    productService
      .getProducts()
      .then((products) => {
        setFilteredProducts(products);
        dispatch(updateProducts(products));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (allProducts?.length === 0) {
      loadProducts();
    } else {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);

  return (
    <div className="py-6 sm:pb-10 sm:pt-8">
      <div className="container">
        {/* Page title */}
        <h1 className="mb-8 sm:mb-8">Mahsulotlar</h1>

        {/* Filter */}
        <nav className="products-layout-tabs mb-8 sm:mb-14">
          <ul className="flex gap-x-3.5 relative w-full overflow-x-auto scroll-x-primary scroll-smooth p-0.5 pb-5 sm:gap-x-4 md:gap-x-5">
            <li className="shrink-0">
              <NavLink
                end
                to="/products"
                className="btn bg-gray-light px-5 py-2.5 text-sm hover:bg-neutral-200 sm:text-base"
              >
                Barchasi
              </NavLink>
            </li>

            {categories.map((category, index) => (
              <li key={index} className="shrink-0">
                <NavLink
                  to={`/products/${category.link.toLowerCase()}`}
                  className="btn bg-gray-light px-5 py-2.5 font-normal text-sm hover:bg-neutral-200 sm:font-medium sm:text-base"
                >
                  {category.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

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
              className="p-1.5"
              aria-label="Reload"
              onClick={loadProducts}
            >
              <Icon src={reloadIcon} alt="Reload icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
