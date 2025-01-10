import React from "react";
import { Link } from "react-router-dom";

// Data
import products from "../data/products";

// Utils
import { getRandomNumber } from "../utils";

// Components
import Icon from "../components/Icon";
import TransactionItem from "../components/TransactionItem";
import AdminPagesHeader from "../components/AdminPagesHeader";

// Images
import warnIcon from "../assets/images/icons/warn.svg";
import crownIcon from "../assets/images/icons/crown.svg";
import usersIcon from "../assets/images/icons/users.svg";
import arrowRightIcon from "../assets/images/icons/arrow-right.svg";

const Contests = () => {
  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Konkurslar" />

      {/* Main content */}
      <div className="container">
        <ul className="space-y-4">
          {products.map((contest, index) => {
            return (
              <li
                key={index}
                className="flex flex-col gap-4 bg-gradient-gray p-3.5 rounded-xl xs:p-4 md:flex-row md:items-center md:h-56 lg:h-64 2xl:h-72"
              >
                {/* Banner */}
                <img
                  alt="Contest banner"
                  className="w-full h-auto aspect-[5/3] rounded-lg md:w-auto md:h-full"
                  src="https://media.istockphoto.com/id/598178344/vector/contest-banner-hand-lettering.jpg?s=612x612&w=0&k=20&c=d0MXnz1BbHMUa70dNfCtLC8GpBljkVeZD4uZWdoeXcQ="
                />

                {/* Content */}
                <div className="space-y-2.5 2xl:space-y-4">
                  {/* Title */}
                  <h3 className="font-medium text-lg line-clamp-1 lg:text-xl xl:text-[22px] 2xl:text-2xl">
                    Konkurs sarlavhasi
                  </h3>

                  {/* Product link */}
                  <Link
                    to="/products/product/pradakt-taytl"
                    className="line-clamp-1 text-neutral-500 text-sm transition-colors duration-200 hover:text-primary-default sm:text-base lg:text-lg"
                  >
                    {contest.title}
                  </Link>

                  <div className="flex flex-wrap items-center gap-5 overflow-x-auto">
                    {/* Total prize */}
                    <div className="flex items-center gap-1.5 lg:gap-2.5">
                      <Icon
                        size={28}
                        src={crownIcon}
                        alt="Crown icon"
                        className="size-6 lg:size-7"
                      />

                      <span className="font-medium text-sm lg:text-base">
                        {getRandomNumber(0, 20)} ta
                      </span>
                    </div>

                    {/* Minimal bid */}
                    <div className="flex items-center gap-1.5 lg:gap-2.5">
                      <Icon
                        size={28}
                        src={warnIcon}
                        alt="Warning icon"
                        className="size-6 lg:size-7"
                      />

                      <span className="font-medium text-sm lg:text-base">
                        {getRandomNumber(0, 99)}0 ta
                      </span>
                    </div>

                    {/* Total users */}
                    <div className="flex items-center gap-1.5 lg:gap-2.5">
                      <Icon
                        size={28}
                        src={usersIcon}
                        alt="Users icon"
                        className="size-6 lg:size-7"
                      />

                      <span className="font-medium text-sm lg:text-base">
                        {getRandomNumber(0, 9999).toLocaleString()} ta
                      </span>
                    </div>
                  </div>

                  <div className="font-medium">
                    <span className="xs:text-lg lg:text-xl">
                      {Number(
                        `${getRandomNumber(0, 999)}0000`
                      ).toLocaleString()}
                    </span>
                    <span className="text-neutral-500 lg:text-lg"> so'm</span>
                  </div>

                  {/* Detail link */}
                  <Link
                    to="/contests/contest/name"
                    className="btn-primary max-w-max rounded-full py-1.5 px-4 text-sm font-normal xs:font-medium lg:text-base lg:pl-7 lg:pr-6 lg:py-2"
                  >
                    <span>Ba'tafsil</span>
                    <Icon
                      src={arrowRightIcon}
                      alt="Arrow right icon"
                      className="size-5 sm:size-[22px] lg:size-6"
                    />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Contests;
