import React from "react";
import { NavLink } from "react-router-dom";

import categories from "../data/categories";
import products from "../data/products";
import ProductItem from "../components/ProductItem";

const Products = () => {
  return (
    <div>
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

          {/* Section content */}
          <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:grid-cols-4 md:gap-x-5 md:gap-y-8 lg:grid-cols-5">
            {products.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
