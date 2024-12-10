import React from "react";
import { Link } from "react-router-dom";

// Data
import news from "../data/news";
import brands from "../data/brands";
import features from "../data/features";

// Data
import products from "../data/products";
import payments from "../data/payments";
import categories from "../data/categories";

// Components
import Icon from "../components/Icon";
import Divider from "../components/Divider";
import NewsItem from "../components/NewsItem";
import ProductItem from "../components/ProductItem";

// Stickers
import Lottie from "lottie-react";
import magicSticker from "../assets/stickers/magic.json";

// Swiper
import "swiper/css";
import "../css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";``
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Images
import telIcon from "../assets/images/icons/tel.svg";
import logoIcon from "../assets/images/icons/logo.svg";
import emailIcon from "../assets/images/icons/email.svg";
import locationIcon from "../assets/images/icons/location.svg";
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
  return (
    <div className="">
      {/* Hero (Swiper) */}
      <div className="pt-8 pb-10">
        <div className="container space-y-5">
          {/* swiper */}
          <Swiper
            loop={true}
            navigation={true}
            spaceBetween={20}
            autoplay={autoplay}
            modules={[Navigation, Pagination, Autoplay]}
            className="default-swiper-navigation-buttons w-full h-96 rounded-xl"
            pagination={{ el: ".default-pagination", clickable: true }}
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
          <div className="default-pagination"></div>
        </div>
      </div>

      {/* Categories */}
      <section className="pb-8">
        <div className="container space-y-6">
          {/* Section header (Title wrapper) */}
          <div className="flex items-center justify-between">
            <h2>Kategoriya</h2>

            {/* all products link */}
            <Link to="/products/all" className="group btn">
              <span className="text-neutral-600 transition-colors duration-200 group-hover:text-black">
                Barcha mahsulotlar
              </span>

              <Icon
                size={20}
                src={arrowRightIcon}
                alt="Right arrow icon"
                className="size-5 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Section content (Swiper) */}
          <Swiper
            loop={true}
            navigation={true}
            spaceBetween={20}
            slidesPerView={5}
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
                  className="flex items-end relative size-full p-4"
                >
                  <h3 className="z-10 text-xl font-semibold text-white">
                    {category.title}
                  </h3>

                  <div className="absolute inset-x-0 bottom-0 z-0 w-full h-32 bg-gradient-to-b from-transparent to-black/70"></div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <div className="container pt-10 pb-8">
        <img src={topProductsBg} alt="" className="rounded-xl object-cover" />
      </div>

      {/* New products */}
      <section className="py-10">
        <div className="container space-y-6">
          {/* Section title */}
          <h2 className="flex items-center gap-3.5">
            <span>Yangi mahsulotlar</span>
            <Lottie animationData={magicSticker} className="size-8" />
          </h2>

          {/* Section content */}
          <ul className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:gap-y-8 md:gap-5">
            {products.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>

          <div className="flex justify-center w-full pt-5">
            <button className="bg-gray-light px-32 py-2 rounded-xl text-lg transition-colors duration-200 hover:bg-gray-medium/50">
              Ko'proq ko'rsatish
            </button>
          </div>
        </div>
      </section>

      {/* Popular products */}
      <section className="pt-10 pb-14">
        <div className="container space-y-6">
          {/* Section title */}
          <h2>Ommabop mahsulotlar</h2>

          {/* Section content */}
          <ul className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:gap-y-8 md:gap-5">
            {products.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>

          <div className="flex justify-center w-full pt-5">
            <button className="bg-gray-light px-32 py-2 rounded-xl text-lg transition-colors duration-200 hover:bg-gray-medium/50">
              Ko'proq ko'rsatish
            </button>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-light py-14">
        <div className="container space-y-6">
          {/* Section header (Title wrapper) */}
          <div className="flex items-center justify-between">
            <h2>Brendlar</h2>

            {/* brands page link */}
            <Link to="/brands" className="group btn">
              <span className="text-neutral-600 transition-colors duration-200 group-hover:text-black">
                Barcha brendlar
              </span>

              <Icon
                size={20}
                src={arrowRightIcon}
                alt="Right arrow icon"
                className="size-5 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Section content */}
          <ul className="grid grid-cols-1 gap-4 gap-y-6 sm:grid-cols-2 md:gap-5 md:grid-cols-3">
            {brands.map((brand, index) => (
              <li key={index} className="bg-white px-5 py-6 rounded-xl">
                <div className="flex items-center justify-between mb-5">
                  <Icon src={brand.logo} className="size-12" />

                  <Link to="/brands" className="group btn">
                    <span className="text-neutral-600 transition-colors duration-200 group-hover:text-black">
                      Brend mahsulotlari
                    </span>

                    <Icon
                      size={20}
                      src={arrowRightIcon}
                      alt="Right arrow icon"
                      className="size-5 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <img
                  src={brand.image}
                  alt=""
                  className="w-full h-32 bg-gray-light"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Discount products */}
      <section className="py-10">
        <div className="container space-y-6">
          {/* Section title */}
          <h2>Chegirmadagi mahsulotlar</h2>

          {/* Section content */}
          <ul className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5 md:gap-y-8 md:gap-5">
            {products.map((product, index) => (
              <ProductItem key={index} data={product} />
            ))}
          </ul>

          <div className="flex justify-center w-full pt-5">
            <button className="bg-gray-light px-32 py-2 rounded-xl text-lg transition-colors duration-200 hover:bg-gray-medium/50">
              Ko'proq ko'rsatish
            </button>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="py-10">
        <div className="container space-y-6">
          {/* Section title */}
          <div className="flex items-center justify-between">
            <h2>So'nggi yangiliklar</h2>

            {/* brands page link */}
            <Link to="/news" className="group btn">
              <span className="text-neutral-600 transition-colors duration-200 group-hover:text-black">
                Barcha yangiliklar
              </span>

              <Icon
                size={20}
                src={arrowRightIcon}
                alt="Right arrow icon"
                className="size-5 -translate-x-0.5 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* News */}
          <ul className="grid grid-cols-1 gap-3.5 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {news.slice(0, 3).map((data, index) => (
              <NewsItem key={index} data={data} />
            ))}
          </ul>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gradient-to-b from-white to-gray-light pt-10 pb-14">
        <div className="container">
          <ul className="grid grid-cols-2 gap-3.5 md:grid-cols-2 md:gap-5 lg:grid-cols-3 bg-white px-5 py-8 rounded-xl">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3.5">
                <Icon
                  size={48}
                  src={feature.icon}
                  alt="Feature icon"
                  className="size-12"
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

      {/* Footer */}
      <footer className="bg-gray-light">
        {/* Main content */}
        <div className="container pt-6 pb-14">
          <div className="flex items-start justify-between gap-5">
            <div className="space-y-5">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-1">
                {/* logo icon */}
                <img
                  width={90}
                  height={48}
                  src={logoIcon}
                  className="h-12"
                  alt="Mene Market logo svg icon"
                />
              </Link>

              <div className="space-y-2.5">
                {/* Tel */}
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={20}
                    src={telIcon}
                    alt="Phone icon"
                    className="size-5"
                  />
                  <a href="tel:+998990000000" className="font-medium">
                    +998 (99) 000-00-00
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={20}
                    src={emailIcon}
                    alt="Email icon"
                    className="size-5"
                  />
                  <a
                    className="text-neutral-500"
                    href="mailto:menemarketuz@gmail.com"
                  >
                    menemarketuz@gmail.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2.5">
                  <Icon
                    size={20}
                    src={locationIcon}
                    alt="Phone icon"
                    className="size-5"
                  />

                  <address className="text-neutral-500 not-italic">
                    Chilonzor, Toshkent
                  </address>
                </div>
              </div>
            </div>

            {/* Nav */}
            <nav>
              <ul className="flex gap-10">
                {/* For users */}
                <li className="space-y-5">
                  <h3 className="text-lg font-medium">Foydalanuvchilarga</h3>
                  <ul className="space-y-1.5">
                    <li>
                      <Link
                        to="/about"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Asosiy sahifa
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Mahsulotlar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Kompaniya haqida
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Yordam olish
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* For partners */}
                <li className="space-y-5">
                  <h3 className="text-lg font-medium">
                    Hamkorlar & Tadbirkorlarga
                  </h3>
                  <ul className="space-y-1.5">
                    <li>
                      <Link
                        to="/"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Targetologga aylaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/admin/dashboard/"
                        className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                      >
                        Targetolog kabineti
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-primary-default hover:underline"
                      >
                        Bizda mahsulotlaringizni soting
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* Payments */}
            <ul className="grid grid-cols-3 gap-5">
              {payments.map((pay, index) => (
                <li key={index} className="max-h-max">
                  <a
                    href={pay.link}
                    target="_blank"
                    title={pay.name}
                    aria-label={pay.name}
                    className="inline-block bg-white p-3.5 rounded-xl transition-colors duration-200 hover:bg-neutral-200"
                  >
                    <img
                      width={72}
                      height={24}
                      src={pay.icon}
                      alt={pay.name}
                      className="w-[72px] h-6"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider />

        {/* Sub content */}
        <div className="container py-5">
          <div className="flex items-center justify-between gap-5 text-neutral-500">
            <p className="text-inherit">© 2023-2024. "Mene Market"</p>

            {/* Privacy Policy */}
            <div className="flex items-center gap-3.5">
              <Link
                to="/"
                className="text-inherit transition-colors duration-200 hover:text-primary-default"
              >
                Ommaviy oferta
              </Link>

              <span>•</span>

              <Link
                to="/"
                className="text-inherit transition-colors duration-200 hover:text-primary-default"
              >
                Maxfiylik siyosati
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
