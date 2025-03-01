import React from "react";
import { Link } from "react-router-dom";

// Images
import waveBlueGradientBg from "../assets/images/backgrounds/wave-blue-gradient.avif";

const LastPaymentCard = () => {
  const card = JSON.parse(localStorage.getItem("lastPaymentCard"));
  const { author, number } = card || {};

  return (
    <div
      style={{ backgroundImage: `url(${waveBlueGradientBg})` }}
      className="flex flex-col justify-between relative h-56 bg-gradient-gray bg-center bg-cover p-4 pb-5 rounded-xl overflow-hidden xs:p-5 xs:pb-6"
    >
      {/* header content */}
      <div className="flex items-center justify-between">
        <b className="text-xl font-medium text-white xs:font-semibold">
          Oxirgi kartangiz
        </b>

        <Link to="/">
          <svg
            width="36"
            height="36"
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M20 1V13H21L29 5H31V17.0237L32 17L40 9H42V40L33 48H32V21H31V36L22 44H21V17H20V32L11 40H10V14L8 16H6V13L10 9L18 1H20Z"
            />
          </svg>
        </Link>
      </div>

      {/* Sub content */}
      <div className="space-y-3.5">
        <p className="text-xl font-medium text-white sm:text-2xl">
          {number || "0000 0000 0000 0000"}
        </p>

        <p className="text-lg font-medium text-white sm:text-xl">
          {author || "Mavjud emas!"}
        </p>
      </div>
    </div>
  );
};

export default LastPaymentCard;
