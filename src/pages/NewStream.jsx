import React from "react";
import { NavLink } from "react-router-dom";

// Data
import products from "../data/products";
import categories from "../data/categories";

// Components
import ProductItem from "../components/ProductItem";

const NewStream = () => {
  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container">
        <div className="space-y-3 mb-6 sm:space-y-4 sm:mb-8">
          {/* Title */}
          <h1 className="text-2xl">Yangi oqim yaratish</h1>

          {/* Description */}
          <p className="text-neutral-400 sm:text-lg">
            Yangi oqim yaratib, foydalanuvchilarni saytga jalb qiling va ko'plab
            bonuslarga ega bo'ling!
          </p>
        </div>

        {/* Filter */}
        <nav className="products-layout-tabs mb-8 sm:mb-10">
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
        <ul className="grid grid-cols-2 gap-x-3.5 gap-y-6 sm:grid-cols-3 sm:gap-x-4 md:gap-x-5 md:gap-y-8 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductItem key={index} data={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewStream;
