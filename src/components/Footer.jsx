import React from "react";
import { Link } from "react-router-dom";

// Data
import payments from "../data/payments";

// Components
import Icon from "../components/Icon";
import Divider from "../components/Divider";

// Images
import telIcon from "../assets/images/icons/tel.svg";
import logoIcon from "../assets/images/icons/logo.svg";
import emailIcon from "../assets/images/icons/email.svg";
import locationIcon from "../assets/images/icons/location.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-light">
      {/* Main content */}
      <div className="container space-y-8 pt-0 pb-8 sm:pt-6 sm:pb-14">
        <div className="flex flex-col items-start justify-between gap-8 md:gap-5 md:flex-row">
          <div className="space-y-5">
            {/* Logo */}
            <Link to="/" className="hidden items-center gap-1 md:flex">
              {/* logo icon */}
              <img
                width={90}
                height={48}
                src={logoIcon}
                className="h-12"
                alt="Mene Market logo svg icon"
              />
            </Link>

            <h3 className="text-base font-medium sm:text-lg md:hidden">
              Yordam uchun
            </h3>

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
                  href="mailto:menemarket.main@gmail.com"
                >
                  menemarket.main@gmail.com
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
                  O'zbekiston, Toshkent
                </address>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-col gap-8 md:gap-10 md:flex-row">
              {/* For users */}
              <li className="space-y-5">
                {/* Title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Foydalanuvchilarga
                </h3>

                {/* List */}
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      to="/"
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
                    <span className="text-neutral-500 transition-colors duration-200 opacity-50">
                      Kompaniya haqida
                    </span>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="text-neutral-500 transition-colors duration-200 hover:text-primary-default"
                    >
                      Yangiliklar
                    </Link>
                  </li>
                </ul>
              </li>

              {/* For partners */}
              <li className="space-y-5">
                {/* Title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Hamkorlar & Tadbirkorlarga
                </h3>

                {/* List */}
                <ul className="space-y-1.5">
                  <li>
                    <Link
                      to="/admin/dashboard"
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
                    <a
                      target="_blank"
                      href="https://t.me/menemarket"
                      className="text-primary-default hover:underline"
                    >
                      Bizda mahsulotlaringizni soting
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Payments */}
          <ul className="hidden grid-cols-3 gap-5 lg:grid">
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

        {/* Payments */}
        <ul className="grid grid-cols-2 gap-x-3.5 gap-y-4 xs:grid-cols-4 xs:gap-5 sm:flex sm:items-center md:justify-center lg:hidden">
          {payments.map((pay, index) => (
            <li key={index} className="max-h-max !w-full sm:!w-auto">
              <a
                href={pay.link}
                target="_blank"
                title={pay.name}
                aria-label={pay.name}
                className="flex items-center justify-center w-full bg-white p-3.5 rounded-xl transition-colors duration-200 hover:bg-neutral-200 sm:w-auto"
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

      <Divider />

      {/* Sub content */}
      <div className="container py-3.5 sm:py-4 md:py-5">
        <div className="flex flex-col items-center justify-between gap-3.5 text-neutral-500 sm:gap-4 sm:flex-row md:gap-5">
          <p className="text-sm text-inherit sm:text-base">
            © 2023 - 2025. "Mene Market"
          </p>

          {/* Privacy Policy */}
          <div className="flex items-center gap-3.5">
            <Link
              to="/"
              className="text-sm text-inherit transition-colors duration-200 hover:text-primary-default sm:text-base"
            >
              Ommaviy oferta
            </Link>

            <span>•</span>

            <Link
              to="/"
              className="text-sm text-inherit transition-colors duration-200 hover:text-primary-default sm:text-base"
            >
              Maxfiylik siyosati
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
