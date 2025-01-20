import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Data
import brands from "../data/brands";
import features from "../data/features";
import categories from "../data/categories";

// Stickers
import Lottie from "lottie-react";
import magicSticker from "../assets/stickers/magic.json";

// Services
import blogService from "../api/services/blogService";
import productService from "../api/services/productService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateBlogs } from "../store/features/blogSlice";
import { updateProducts } from "../store/features/productsSlice";

// Swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Components
import Icon from "../components/Icon";
import BlogItem from "../components/BlogItem";
import ProductItem from "../components/ProductItem";
import BlogItemSkeleton from "../components/BlogItemSkeleton";
import ProductItemSkeleton from "../components/ProductItemSkeleton";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";
import topProductsBg from "../assets/images/backgrounds/top.jpg";
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const autoplay = {
  delay: 5000,
  disableOnInteraction: true,
};

const imagesUrl = [
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2024-08-01/QxK1c0D51nYdO0B3m3ljX6WZZdpVC4ZjLOmeLdjCDS6D4c0WvXZwhv6peAu3.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2024-09-16/zuYEKm2feO5WshCRY2MFT9sdk6TGf2CGW1hLDUAfq4t6K4t0e2hQO8R7CRV0.jpg",
  "https://olcha.uz/image/original/sliders/oz/cdn_1/2024-05-31/MdDJpVq9HPJhSyciehLeSAHjOtEzBzvMW2zbnaWAwHAbAEZ5yUvE6Xj3LFIS.jpg",
];

const Home = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const slicedBlogs = (blogs) => blogs?.slice(0, 3) || [];
  const allBlogs = useSelector((state) => state.blogs.data);
  const [isLoadingBlogs, setIsLoadingBlogs] = useState(true);
  const allProducts = useSelector((state) => state.products.data);
  const slicedProducts = (products) => products?.slice(0, 10) || [];
  const [filteredBlogs, setFilteredBlogs] = useState(slicedBlogs(allBlogs));
  const [filteredProducts, setFilteredProducts] = useState(
    slicedProducts(allProducts)
  );

  const loadProducts = () => {
    setHasError(false);
    setIsLoading(true);

    productService
      .getProducts()
      .then((products) => {
        dispatch(updateProducts(products));
        setFilteredProducts(slicedProducts(products));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  const loadBlogs = () => {
    setIsLoadingBlogs(true);

    blogService
      .getBlogs()
      .then((blogs) => {
        console.log(blogs);

        dispatch(updateBlogs(blogs));
        setFilteredBlogs(slicedBlogs(blogs));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoadingBlogs(false));
  };

  useEffect(() => {
    // Products
    if (allProducts?.length === 0) loadProducts();
    else setTimeout(() => setIsLoading(false), 500);

    // Blogs
    if (allBlogs?.length === 0) loadBlogs();
    else setTimeout(() => setIsLoadingBlogs(false), 500);
  }, []);

  const showAllProducts = () => {
    if (isLoading) return;
    setFilteredProducts(allProducts);
  };

  return (
    <div className="">
      {/* Hero */}
      <div className="py-6 sm:pb-10 sm:pt-8">
        <div className="container space-y-3.5 sm:space-y-4 md:space-y-5">
          {/* swiper */}
          <Swiper
            loop={true}
            navigation={true}
            spaceBetween={14}
            autoplay={autoplay}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ el: ".main-swiper-pagination", clickable: true }}
            className="default-swiper-navigation-buttons w-full h-auto aspect-[16/7] xs:aspect-[16/6] rounded-xl"
            breakpoints={{
              640: {
                spaceBetween: 16,
              },
              768: {
                spaceBetween: 20,
              },
            }}
          >
            {imagesUrl.map((url, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundImage: `url(${url})` }}
                className="!flex items-center justify-center bg-gray-light bg-cover bg-center bg-no-repeat rounded-xl"
              ></SwiperSlide>
            ))}
          </Swiper>

          {/* swiper pagination */}
          <div className="main-swiper-pagination default-pagination"></div>
        </div>
      </div>

      {/* Categories */}
      <section className="pb-8 sm:pb-8">
        <div className="container space-y-6">
          {/* Section header (Title wrapper) */}
          <div className="flex items-center justify-between">
            <h2>Kategoriya</h2>

            {/* all products link */}
            <Link to="/products/all" className="group btn">
              <span className="text-neutral-600 text-sm transition-colors duration-200 group-hover:text-black sm:text-base">
                Barcha mahsulotlar
              </span>

              <Icon
                size={20}
                src={arrowRightIcon}
                alt="Right arrow icon"
                className="size-4 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-5"
              />
            </Link>
          </div>

          {/* Section content (Swiper) */}
          <Swiper
            loop={true}
            navigation={true}
            spaceBetween={14}
            breakpoints={{
              640: {
                spaceBetween: 16,
                slidesPerView: 4,
              },
              1024: {
                spaceBetween: 20,
                slidesPerView: 5,
              },
            }}
            slidesPerView={3}
            autoplay={autoplay}
            modules={[Navigation, Autoplay]}
            className="default-swiper-navigation-buttons w-full h-auto rounded-xl"
          >
            {categories.map((category, index) => (
              <SwiperSlide
                key={index}
                style={{ backgroundImage: `url(${category.image})` }}
                className="!flex items-center justify-center h-auto aspect-square bg-gray-light bg-cover bg-center bg-no-repeat rounded-xl   overflow-hidden"
              >
                <Link
                  to={`/products/${category.link}`}
                  className="flex items-end relative size-full p-2.5 sm:p-3.5 md:p-4"
                >
                  <h3 className="z-10 text-sm leading-4 font-semibold text-white sm:leading-7 sm:text-lg md:text-xl">
                    {category.title}
                  </h3>

                  <div className="absolute inset-x-0 bottom-0 z-0 w-full h-32 bg-gradient-to-b from-transparent to-black/70"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="container pb-6 sm:pt-10 sm:pb-8">
        <img
          src={topProductsBg}
          alt=""
          className="w-full rounded-xl object-cover h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28"
        />
      </div>

      {/* New products */}
      <section className="pb-8 sm:py-10">
        <div className="container space-y-6">
          {/* Section title */}
          <h2 className="flex items-center gap-3.5">
            <span>Yangi mahsulotlar</span>
            <Lottie animationData={magicSticker} className="size-8" />
          </h2>

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

          <div className="flex justify-center w-full pt-3.5 xs:pt-5">
            <button
              disabled={isLoading}
              onClick={showAllProducts}
              className="w-full bg-gray-light px-5 py-2 rounded-xl text-base font-medium transition-colors duration-200 hover:bg-gray-medium/50 disabled:opacity-50 sm:w-auto sm:px-28 sm:text-lg md:px-32"
            >
              Ko'proq ko'rsatish
            </button>
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="py-8 sm:pt-10 sm:pb-14">
        <div className="container space-y-6">
          {/* Section title */}
          <h2>Ommabop mahsulotlar</h2>

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

          <div className="flex justify-center w-full pt-3.5 xs:pt-5">
            <button
              disabled={isLoading}
              onClick={showAllProducts}
              className="w-full bg-gray-light px-5 py-2 rounded-xl text-base font-medium transition-colors duration-200 hover:bg-gray-medium/50 disabled:opacity-50 sm:w-auto sm:px-28 sm:text-lg md:px-32"
            >
              Ko'proq ko'rsatish
            </button>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-light py-8 sm:py-14">
        <div className="container space-y-6">
          {/* Section header (Title wrapper) */}
          <div className="flex items-center justify-between">
            <h2>Brendlar</h2>

            {/* brands page link */}
            <Link to="/brands" className="group btn">
              <span className="text-neutral-600 text-sm transition-colors duration-200 group-hover:text-black sm:text-base">
                Barcha brendlar
              </span>

              <Icon
                size={20}
                src={arrowRightIcon}
                alt="Right arrow icon"
                className="size-4 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-5"
              />
            </Link>
          </div>

          {/* Section content */}
          <ul className="grid grid-cols-1 gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand, index) => (
              <li
                key={index}
                className="bg-white rounded-xl sm:p-4 p-3.5 md:px-5 md:py-6"
              >
                <div className="flex items-center justify-between mb-5">
                  <Icon
                    size={48}
                    alt="Brand logo"
                    src={brand.logo}
                    className="size-10 sm:size-11 md:size-12"
                  />

                  <Link to="/brands" className="group btn">
                    <span className="text-neutral-600 text-sm transition-colors duration-200 group-hover:text-black sm:text-base">
                      Brend mahsulotlari
                    </span>

                    <Icon
                      size={20}
                      src={arrowRightIcon}
                      alt="Right arrow icon"
                      className="size-4 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-5"
                    />
                  </Link>
                </div>

                <img
                  width={360}
                  height={128}
                  src={brand.image}
                  alt="Brand products image"
                  className="w-full h-auto object-cover aspect-[45/16] bg-gray-light"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Discount products */}
      <section className="py-8 sm:py-10">
        <div className="container space-y-6">
          {/* Section title */}
          <h2>Chegirmadagi mahsulotlar</h2>

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

          <div className="flex justify-center w-full pt-3.5 xs:pt-5">
            <button
              disabled={isLoading}
              onClick={showAllProducts}
              className="w-full bg-gray-light px-5 py-2 rounded-xl text-base font-medium transition-colors duration-200 hover:bg-gray-medium/50 disabled:opacity-50 sm:w-auto sm:px-28 sm:text-lg md:px-32"
            >
              Ko'proq ko'rsatish
            </button>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="py-8 sm:py-10">
        <div className="container space-y-6">
          {/* Section title */}
          <div className="flex items-center justify-between">
            <h2>So'nggi yangiliklar</h2>

            {/* brands page link */}
            <Link to="/news" className="group btn">
              <span className="text-neutral-600 text-sm transition-colors duration-200 group-hover:text-black sm:text-base">
                Barcha yangiliklar
              </span>

              <Icon
                size={20}
                src={arrowRightIcon}
                alt="Right arrow icon"
                className="size-4 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5 sm:size-5"
              />
            </Link>
          </div>

          {/* News */}
          {!isLoadingBlogs && filteredBlogs?.length > 0 ? (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {filteredBlogs.map((blog) => (
                <BlogItem key={blog._id} data={blog} />
              ))}
            </ul>
          ) : null}

          {/* Loading animation */}
          {isLoadingBlogs && (
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
              {Array.from({ length: 3 }).map((_, index) => (
                <BlogItemSkeleton key={index} />
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-white to-gray-light pb-10 pt-0 sm:pt-10 sm:pb-14">
        <div className="container">
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 bg-white px-3.5 py-5 rounded-xl sm:px-4 md:px-5 sm:py-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3.5">
                <Icon
                  size={48}
                  src={feature.icon}
                  alt="Feature icon"
                  className="size-10 sm:size-11 md:size-12"
                />

                <div className="space-y-1.5">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-neutral-500">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
