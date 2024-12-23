import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Components
import Icon from "./Icon";

// Utils
import { getRandomNumber } from "../utils";

// Images
import emailIcon from "../assets/images/icons/email-gradient.svg";

const Sidebar = () => {
  const [iIsCollapse, setIsCollapse] = useState(false);

  return (
    <div
      className={`${
        iIsCollapse ? "w-24" : "w-80"
      } sticky inset-y-0 left-0 shrink-0 h-screen p-3.5 pr-0`}
    >
      <div className="size-full bg-gradient-gray rounded-xl">
        {/* Header */}
        <div
          className={`${
            iIsCollapse ? "flex-col" : ""
          } flex items-center justify-between gap-4 px-3.5 py-3`}
        >
          {/* Logo */}
          <Link to="/">
            <svg
              width="36"
              height="36"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 1V13H21L29 5H31V17.0237L32 17L40 9H42V40L33 48H32V21H31V36L22 44H21V17H20V32L11 40H10V14L8 16H6V13L10 9L18 1H20Z"
                fill="#0085FF"
              />
            </svg>
          </Link>

          {/* Collapse btn */}
          <button
            className="group p-1.5 rounded-sm"
            aria-label="Collapse sidebar button"
            onClick={() => setIsCollapse((_) => !_)}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="text-neutral-700 transition-colors duration-300 group-hover:text-primary-default"
            >
              <path
                strokeWidth="1.5"
                stroke="currentColor"
                d="M2 17V7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17Z"
              />
              <path
                fill="currentColor"
                d="M2 6C2 4.89543 2.89543 4 4 4H15V20H4C2.89543 20 2 19.1046 2 18V6Z"
              />
            </svg>
          </button>
        </div>

        {/* Line */}
        <div className="w-full h-0.5 bg-white rounded-full" />

        {/* Main */}
        <div
          className={`${
            iIsCollapse ? "max-h-[calc(100%-112px)]" : "max-h-[calc(100%-62px)]"
          } flex flex-col justify-between overflow-y-auto scroll-hidden h-full`}
        >
          <div>
            {/* Profile */}
            <div
              className={`${
                iIsCollapse ? "justify-center" : "justify-normal"
              } flex items-center gap-2.5 p-4`}
            >
              <Icon
                size={48}
                alt="User avatar"
                className="size-8 rounded-full"
                src="https://i1.sndcdn.com/artworks-000360728946-bilq7t-t500x500.jpg"
              />

              <p className={`${iIsCollapse ? "hidden" : ""} font-medium`}>
                Samandar
                {getRandomNumber(0, 9)}
                {getRandomNumber(0, 9)}
                {getRandomNumber(0, 9)}
              </p>
            </div>

            {/* Menu */}
            <nav className="sidebar-layout-tabs">
              <ul>
                {/* Main */}
                <li>
                  <NavLink
                    to="/admin/dashboard"
                    className={`${
                      iIsCollapse ? "justify-center" : "justify-normal"
                    } flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-white/50`}
                  >
                    {/* icon */}
                    <svg
                      width="24"
                      height="24"
                      className="size-6"
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M25.1431 20.6487V11.396C25.1431 9.81742 24.3216 8.35454 22.9792 7.54235L16.2935 3.4976C14.8821 2.64366 13.1185 2.64366 11.7071 3.4976L5.02138 7.54235C3.67887 8.35454 2.85742 9.81742 2.85742 11.396V20.6487C2.85742 23.1307 4.85295 25.1429 7.31457 25.1429H20.686C23.1475 25.1429 25.1431 23.1307 25.1431 20.6487Z"
                      />
                      <path
                        fill="white"
                        d="M10.2852 20.5C10.2852 19.9872 10.7009 19.5714 11.2137 19.5714H16.7852C17.298 19.5714 17.7137 19.9872 17.7137 20.5C17.7137 21.0129 17.298 21.4286 16.7852 21.4286H13.9994H11.2137C10.7009 21.4286 10.2852 21.0129 10.2852 20.5Z"
                      />
                    </svg>

                    {/* text */}
                    <span
                      className={`${
                        iIsCollapse ? "!hidden" : ""
                      } transition-colors duration-300`}
                    >
                      Asosiy
                    </span>
                  </NavLink>
                </li>

                {/* New stream */}
                <li>
                  <NavLink
                    to="/admin/new-stream"
                    className={`${
                      iIsCollapse ? "justify-center" : "justify-normal"
                    } flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-white/50`}
                  >
                    {/* icon */}
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      className="size-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17316C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8078C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C21.9969 9.34879 20.9423 6.80707 19.0676 4.93239C17.1929 3.0577 14.6512 2.00313 12 2ZM16.5455 12.9091H12.9091V16.5455C12.9091 16.7866 12.8133 17.0178 12.6428 17.1883C12.4723 17.3588 12.2411 17.4545 12 17.4545C11.7589 17.4545 11.5277 17.3588 11.3572 17.1883C11.1867 17.0178 11.0909 16.7866 11.0909 16.5455V12.9091H7.45455C7.21344 12.9091 6.98221 12.8133 6.81172 12.6428C6.64124 12.4723 6.54546 12.2411 6.54546 12C6.54546 11.7589 6.64124 11.5277 6.81172 11.3572C6.98221 11.1867 7.21344 11.0909 7.45455 11.0909H11.0909V7.45454C11.0909 7.21344 11.1867 6.98221 11.3572 6.81172C11.5277 6.64123 11.7589 6.54545 12 6.54545C12.2411 6.54545 12.4723 6.64123 12.6428 6.81172C12.8133 6.98221 12.9091 7.21344 12.9091 7.45454V11.0909H16.5455C16.7866 11.0909 17.0178 11.1867 17.1883 11.3572C17.3588 11.5277 17.4545 11.7589 17.4545 12C17.4545 12.2411 17.3588 12.4723 17.1883 12.6428C17.0178 12.8133 16.7866 12.9091 16.5455 12.9091Z"
                      />
                    </svg>

                    {/* text */}
                    <span
                      className={`${
                        iIsCollapse ? "!hidden" : ""
                      } transition-colors duration-300`}
                    >
                      Yangi oqim
                    </span>
                  </NavLink>
                </li>

                {/* Streams */}
                <li>
                  <NavLink
                    to="/admin/streams"
                    className={`${
                      iIsCollapse ? "justify-center" : "justify-normal"
                    } flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-white/50`}
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      className="size-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M2 12C2 3.765 3.765 2 12 2C20.235 2 22 3.765 22 12C22 20.235 20.235 22 12 22C3.765 22 2 20.235 2 12ZM12 7.83332C12 8.29355 11.6269 8.66664 11.1667 8.66664H7.83336C7.37313 8.66664 7.00004 8.29355 7.00004 7.83332C7 7.37309 7.37309 7 7.83332 7H11.1666C11.6269 7 12 7.37309 12 7.83332ZM16.1667 12.8333C16.6269 12.8333 17 12.4602 17 12C17 11.5398 16.6269 11.1667 16.1667 11.1667H7.83336C7.37313 11.1667 7.00004 11.5398 7.00004 12C7.00004 12.4602 7.37313 12.8333 7.83336 12.8333H16.1667ZM13.6667 16.1667C13.6667 16.6269 13.2936 17 12.8334 17H7.83336C7.37313 17 7.00004 16.6269 7.00004 16.1667C7.00004 15.7064 7.37313 15.3334 7.83336 15.3334H12.8334C13.2936 15.3333 13.6667 15.7064 13.6667 16.1667Z"
                      />
                    </svg>

                    {/* text */}
                    <span
                      className={`${
                        iIsCollapse ? "!hidden" : ""
                      } transition-colors duration-300`}
                    >
                      Oqimlar
                    </span>
                  </NavLink>
                </li>

                {/* Statistics */}
                <li>
                  <NavLink
                    to="/admin/statistics"
                    className={`${
                      iIsCollapse ? "justify-center" : "justify-normal"
                    } flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-white/50`}
                  >
                    {/* icon */}
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      className="size-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M12 22C3.765 22 2 20.235 2 12C2 3.765 3.765 2 12 2C20.235 2 22 3.765 22 12C22 20.235 20.235 22 12 22ZM7.83332 12C8.29355 12 8.66664 12.3731 8.66664 12.8333V16.1666C8.66664 16.6269 8.29355 17 7.83332 17C7.37309 17 7 16.6269 7 16.1667V12.8334C7 12.3731 7.37309 12 7.83332 12ZM12.8333 7.83332C12.8333 7.37309 12.4602 7 12 7C11.5398 7 11.1667 7.37309 11.1667 7.83332V16.1666C11.1667 16.6269 11.5398 17 12 17C12.4602 17 12.8333 16.6269 12.8333 16.1666V7.83332ZM16.1667 10.3333C16.6269 10.3333 17 10.7064 17 11.1666V16.1666C17 16.6269 16.6269 17 16.1667 17C15.7064 17 15.3334 16.6269 15.3334 16.1666V11.1666C15.3333 10.7064 15.7064 10.3333 16.1667 10.3333Z"
                      />
                    </svg>

                    {/* text */}
                    <span
                      className={`${
                        iIsCollapse ? "!hidden" : ""
                      } transition-colors duration-300`}
                    >
                      Statistika
                    </span>
                  </NavLink>
                </li>

                {/* Payment */}
                <li>
                  <NavLink
                    to="/admin/payment"
                    className={`${
                      iIsCollapse ? "justify-center" : "justify-normal"
                    } flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-white/50`}
                  >
                    {/* icon */}
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      className="size-6"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M22 11.97V14.03C22 14.58 21.56 15.03 21 15.05H19.04C17.96 15.05 16.97 14.26 16.88 13.18C16.82 12.55 17.06 11.96 17.48 11.55C17.85 11.17 18.36 10.95 18.92 10.95H21C21.56 10.97 22 11.42 22 11.97Z"
                      />
                      <path
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M20.47 16.55H19.04C17.14 16.55 15.54 15.12 15.38 13.3C15.29 12.26 15.67 11.22 16.43 10.48C17.07 9.82 17.96 9.45 18.92 9.45H20.47C20.76 9.45 21 9.21 20.97 8.92C20.75 6.49 19.14 4.83 16.75 4.55C16.51 4.51 16.26 4.5 16 4.5H7C6.72 4.5 6.45 4.52 6.19 4.56C3.64 4.88 2 6.78 2 9.5V16.5C2 19.26 4.24 21.5 7 21.5H16C18.8 21.5 20.73 19.75 20.97 17.08C20.9756 17.0115 20.9668 16.9426 20.9441 16.8778C20.9213 16.8129 20.8852 16.7536 20.8381 16.7036C20.7909 16.6536 20.7338 16.6141 20.6704 16.5877C20.607 16.5612 20.5387 16.5484 20.47 16.55ZM13 10.75H7C6.59 10.75 6.25 10.41 6.25 10C6.25 9.59 6.59 9.25 7 9.25H13C13.41 9.25 13.75 9.59 13.75 10C13.75 10.41 13.41 10.75 13 10.75Z"
                      />
                    </svg>

                    {/* text */}
                    <span
                      className={`${
                        iIsCollapse ? "!hidden" : ""
                      } transition-colors duration-300`}
                    >
                      To'lov
                    </span>
                  </NavLink>
                </li>

                {/* Profile */}
                <li>
                  <NavLink
                    to="/admin/profile"
                    className={`${
                      iIsCollapse ? "justify-center" : "justify-normal"
                    } flex items-center gap-4 px-5 py-3.5 transition-colors duration-300 hover:bg-white/50`}
                  >
                    {/* icon */}
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="size-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="10"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="transition-colors duration-300"
                      />
                      <rect
                        x="3"
                        y="3"
                        rx="9"
                        width="18"
                        height="18"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                        className="transition-colors duration-300"
                        d="M12 3C16.9626 3 21 7.0374 21 12C21 16.9626 16.9626 21 12 21C7.0374 21 3 16.9626 3 12C3 7.0374 7.0374 3 12 3ZM17.616 16.5C16.9423 17.3424 16.0878 18.0224 15.1156 18.4898C14.1435 18.9571 13.0786 19.1998 12 19.1998C10.9214 19.1998 9.85653 18.9571 8.88438 18.4898C7.91224 18.0224 7.05768 17.3424 6.384 16.5C7.05768 15.6576 7.91224 14.9776 8.88438 14.5102C9.85653 14.0429 10.9214 13.8002 12 13.8002C13.0786 13.8002 14.1435 14.0429 15.1156 14.5102C16.0878 14.9776 16.9423 15.6576 17.616 16.5ZM12 12C12.3546 12 12.7057 11.9302 13.0332 11.7945C13.3608 11.6588 13.6585 11.4599 13.9092 11.2092C14.1599 10.9585 14.3588 10.6608 14.4945 10.3332C14.6302 10.0057 14.7 9.65457 14.7 9.3C14.7 8.94543 14.6302 8.59433 14.4945 8.26675C14.3588 7.93918 14.1599 7.64153 13.9092 7.39081C13.6585 7.14009 13.3608 6.94121 13.0332 6.80553C12.7057 6.66984 12.3546 6.6 12 6.6C11.2839 6.6 10.5972 6.88446 10.0908 7.39081C9.58446 7.89716 9.3 8.58392 9.3 9.3C9.3 10.0161 9.58446 10.7028 10.0908 11.2092C10.5972 11.7155 11.2839 12 12 12Z"
                      />
                    </svg>

                    {/* text */}
                    <span
                      className={`${
                        iIsCollapse ? "!hidden" : ""
                      } transition-colors duration-300`}
                    >
                      Profil
                    </span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Sub */}
          <div className="p-4 space-y-4">
            <button
              disabled
              className={`${
                iIsCollapse ? "!hidden" : ""
              } btn-primary w-full h-9 font-normal`}
            >
              Premium akkaunt
            </button>

            {/* Email */}
            <div
              className={`${
                iIsCollapse ? "justify-center" : "justify-normal"
              } flex items-center gap-3.5`}
            >
              <Icon
                size={48}
                src={emailIcon}
                alt="Email image"
                className="size-8 rounded-full"
              />

              <p
                className={`${
                  iIsCollapse ? "!hidden" : ""
                } text-sm text-neutral-400`}
              >
                example@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
