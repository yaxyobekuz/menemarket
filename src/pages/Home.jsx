import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Data
import brands from "../data/brands";
import features from "../data/features";
import categories from "../data/categories";

// Api
import api from "@/api/axiosConfig";
import apiEndpoints from "@/api/apiEndpoints";

// Redux
import {
  updateHomeProducts,
  updateHomeProductsError,
  updateHomeProductsLoading,
} from "@/store/features/homeProductsSlice";
import { useDispatch, useSelector } from "react-redux";

// Swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Components
import Icon from "../components/Icon";
import BlogsSection from "../components/BlogsSection";
import HomeProductsSection from "@/components/HomeProductsSection";

// Images
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
  const products = useSelector((state) => state.homeProducts.data);

  const loadProducts = () => {
    dispatch(updateHomeProductsError(false));
    dispatch(updateHomeProductsLoading(true));

    api
      .get(apiEndpoints.home)
      .then((data) => dispatch(updateHomeProducts(data)))
      .catch(() => dispatch(updateHomeProductsError(true)))
      .finally(() => dispatch(updateHomeProductsLoading(false)));
  };

  useEffect(() => {
    if (products?.length === 0) loadProducts();
  }, []);

  return (
    <>
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
      <HomeProductsSection
        action={loadProducts}
        title="Yangi mahsulotlar"
        dataName="latest_products"
      />

      {/* Popular products */}
      <HomeProductsSection
        action={loadProducts}
        dataName="popular_products"
        title="Ommabop mahsulotlar"
      />

      {/* Brands */}
      <section className="hidden bg-gray-light py-8 sm:py-14">
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
      <HomeProductsSection
        action={loadProducts}
        dataName="discount_products"
        title="Chegirmadagi mahsulotlar"
      />

      {/* Latest news */}
      <BlogsSection />

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
    </>
  );
};

export default Home;
