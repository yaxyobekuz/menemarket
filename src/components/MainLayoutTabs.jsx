import React from "react";
import { NavLink } from "react-router-dom";

const MainLayoutTabs = () => {
  return (
    <nav className="main-layout-tabs fixed bottom-0 inset-x-0 w-full bg-white border-t md:hidden">
      <ul className="flex h-16 sm:h-[72px]">
        {/* Home */}
        <li className="w-1/4 h-full">
          <NavLink
            to="/"
            className="flex flex-col items-center justify-center gap-0.5 size-full"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 28 28"
              className="size-[26px] xs:size-7"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-colors duration-300"
                d="M25.1431 20.6487V11.396C25.1431 9.81742 24.3216 8.35454 22.9792 7.54235L16.2935 3.4976C14.8821 2.64366 13.1185 2.64366 11.7071 3.4976L5.02138 7.54235C3.67887 8.35454 2.85742 9.81742 2.85742 11.396V20.6487C2.85742 23.1307 4.85295 25.1429 7.31457 25.1429H20.686C23.1475 25.1429 25.1431 23.1307 25.1431 20.6487Z"
              />
              <path
                fill="white"
                d="M10.2852 20.5C10.2852 19.9872 10.7009 19.5714 11.2137 19.5714H16.7852C17.298 19.5714 17.7137 19.9872 17.7137 20.5C17.7137 21.0129 17.298 21.4286 16.7852 21.4286H13.9994H11.2137C10.7009 21.4286 10.2852 21.0129 10.2852 20.5Z"
              />
            </svg>

            <span className="text-[13px] leading-normal text-inherit transition-colors duration-300 xs:text-sm">
              Asosiy
            </span>
          </NavLink>
        </li>

        {/* Products */}
        <li className="w-1/4 h-full">
          <NavLink
            to="/products"
            className="flex flex-col items-center justify-center gap-0.5 size-full"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              className="size-[26px] xs:size-7"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="3"
                x="3"
                rx="2"
                width="10"
                height="10"
                className="transition-colors duration-300"
              />
              <rect
                y="3"
                x="15"
                rx="2"
                width="10"
                height="10"
                className="transition-colors duration-300"
              />
              <path
                className="transition-colors duration-300"
                d="M15 17C15 15.8954 15.8954 15 17 15H23C24.1046 15 25 15.8954 25 17V23C25 24.1046 24.1046 25 23 25H17C15.8954 25 15 24.1046 15 23V17Z"
              />
              <rect
                x="3"
                rx="2"
                y="15"
                width="10"
                height="10"
                className="transition-colors duration-300"
              />
            </svg>

            <span className="text-[13px] leading-normal text-inherit transition-colors duration-300 xs:text-sm">
              Mahsulotlar
            </span>
          </NavLink>
        </li>

        {/* Search */}
        <li className="w-1/4 h-full">
          <NavLink
            to="/search"
            className="flex flex-col items-center justify-center gap-0.5 size-full"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              className="size-[26px] xs:size-7"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                rx="9"
                x="3.5"
                y="3.5"
                width="18"
                height="18"
                className="transition-colors duration-300"
              />
              <rect
                x="15"
                rx="1"
                width="2"
                y="16.4142"
                height="12.3669"
                transform="rotate(-45 15 16.4142)"
                className="transition-colors duration-300"
              />
            </svg>

            <span className="text-[13px] leading-normal text-inherit transition-colors duration-300 xs:text-sm">
              Qidirish
            </span>
          </NavLink>
        </li>

        {/* Account */}
        <li className="w-1/4 h-full">
          <NavLink
            to="/login"
            className="flex flex-col items-center justify-center gap-0.5 size-full"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              className="size-[26px] xs:size-7"
              viewBox="0 0 28 28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="transition-colors duration-300"
                d="M18.1791 15.8571H9.82199C7.00139 15.8571 4.71484 18.1437 4.71484 20.9643C4.71484 23.7849 7.00139 26.0714 9.82199 26.0714H18.1791C20.9997 26.0714 23.2863 23.7849 23.2863 20.9643C23.2863 18.1437 20.9997 15.8571 18.1791 15.8571Z"
              />
              <path
                className="transition-colors duration-300"
                d="M20.0363 7.96427C20.0363 4.63084 17.334 1.92856 14.0006 1.92856C10.6671 1.92856 7.96484 4.63084 7.96484 7.96427C7.96484 11.2977 10.6671 14 14.0006 14C17.334 14 20.0363 11.2977 20.0363 7.96427Z"
              />
            </svg>

            <span className="text-[13px] leading-normal text-inherit transition-colors duration-300 xs:text-sm">
              Kirish
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainLayoutTabs;
