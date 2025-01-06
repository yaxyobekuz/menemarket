import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

// Utils
import { getRandomNumber } from "../utils";

// Components
import Icon from "../components/Icon";
import ToggleEyeButton from "../components/ToggleEyeBtn";
import FormInputWrapper from "../components/FormInputWrapper";

// Images
import sendIcon from "../assets/images/icons/send.svg";
import receiveIcon from "../assets/images/icons/receive.svg";
import waveBlueGradientBg from "../assets/images/backgrounds/wave-blue-gradient.avif";

const Payment = () => {
  const [balance] = useState(getRandomNumber(0, 9999999));
  const hideBalanceStorage = localStorage.getItem("hideBalance");
  const [hideBalance, setHideBalance] = useState(hideBalanceStorage === "true");
  const [formData, setFormData] = useState({
    amount: "",
    fullName: "",
    cardNumber: "",
    description: "",
  });

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const handleChangeHideBalance = () => {
    setHideBalance(!hideBalance);
    localStorage.setItem("hideBalance", String(!hideBalance));
  };

  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container space-y-4 max-sm:px-1">
        {/* Top */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Payment card */}
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
                0000 0000 0000 0000
              </p>

              <p className="text-lg font-medium text-white sm:text-xl">
                Falonchiyev Falonchi
              </p>
            </div>
          </div>

          {/* Balance */}
          <div className="h-56 bg-gradient-gray rounded-xl">
            {/* header */}
            <div className="flex items-center justify-between p-1 pl-4 border-b-2 border-white">
              <b className="text-xl font-semibold">Balans</b>

              <ToggleEyeButton
                hide={hideBalance}
                onClick={handleChangeHideBalance}
              />
            </div>

            {/* main */}
            <div className="flex flex-col items-start justify-between h-[calc(100%-54px)] px-4 py-3.5">
              {/* current balance */}
              <div className="space-y-1.5">
                <div className="text-base text-neutral-500 sm:text-lg">
                  Hozirgi
                </div>

                <div className="text-lg font-medium sm:text-xl">
                  {hideBalance ? "********" : balance.toLocaleString()} so'm
                </div>
              </div>

              {/* current balance */}
              <div className="space-y-1.5">
                <div className="text-base text-neutral-500 sm:text-lg">
                  Tahminiy
                </div>

                <div className="text-lg font-medium sm:text-xl">
                  {hideBalance
                    ? "********"
                    : (balance + 999999).toLocaleString()}{" "}
                  so'm
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main */}
        <section className="bg-gradient-gray px-3.5 py-4 rounded-xl space-y-5 xs:p-4">
          <h2 className="font-semibold text-xl">
            To'lov uchun so'rov yuborish
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-2">
              {/* Card number */}
              <FormInputWrapper
                type="card"
                maxLength="19"
                name="Full name"
                label="Karta raqam *"
                className="white-input"
                placeholder="0000 0000 0000 0000"
                onChange={(value) => handleInputChange("fullName", value)}
              />

              {/* Full name */}
              <FormInputWrapper
                maxLength="72"
                name="Card number"
                label="Karta egasi *"
                className="white-input"
                placeholder="Falonchi Falonchiyev"
                onChange={(value) => handleInputChange("fullName", value)}
              />
            </div>

            <div className="grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-2">
              {/* Card number */}
              <FormInputWrapper
                type="text"
                name="Amount"
                maxLength="7"
                label="Qiymat *"
                className="white-input"
                placeholder="Max 5,000,000 so'm"
                onChange={(value) => handleInputChange("fullName", value)}
              />

              {/* Description */}
              <FormInputWrapper
                label="Izoh"
                maxLength="72"
                name="Description"
                className="white-input"
                placeholder="Ixtiyoriy"
                onChange={(value) => handleInputChange("description", value)}
              />
            </div>

            {/* Btn */}
            <button className="btn-primary w-full h-10 px-16 font-normal xs:w-auto">
              Yuborish
            </button>
          </form>
        </section>

        {/* Balance history */}
        <section className="bg-gradient-gray px-3.5 py-4 space-y-4 rounded-xl xs:p-4">
          <h2 className="font-semibold text-xl">Balans tarixi</h2>

          <ul className="space-y-3.5">
            {Array.from({ length: 6 }).map((_, index) => {
              const isOdd = getRandomNumber() % 2 === 0;
              return (
                <li
                  key={index}
                  className="flex items-center justify-between gap-1 xs:gap-3.5 sm:gap-4"
                >
                  <div className="flex items-center gap-2 xs:gap-3.5">
                    <Icon
                      size={48}
                      src={isOdd ? receiveIcon : sendIcon}
                      className="size-10 xs:size-11 sm:size-12"
                      alt={isOdd ? "Receive icon" : "Send icon"}
                    />

                    <div className="space-y-1 sm:space-y-0.5">
                      <h3
                        className={`${
                          isOdd ? "text-green-500" : "text-red-500"
                        } font-medium sm:text-[17px]`}
                      >
                        {isOdd ? "Qabul qilindi" : "Yuborildi"}
                      </h3>

                      <p className="text-neutral-500 line-clamp-1 text-sm sm:text-base">
                        O'tkazma izohi
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-0.5">
                    <p
                      className={`${
                        isOdd ? "text-green-500" : "text-red-500"
                      } font-medium sm:text-[17px] text-right`}
                    >
                      {isOdd ? "+" : "-"}
                      {getRandomNumber(0, 999999).toLocaleString()}
                    </p>

                    <div className="flex items-center gap-2.5 text-sm sm:gap-3.5 sm:text-base">
                      <span className="text-neutral-500">12/08/2025</span>
                      <span className="text-neutral-500">12:00</span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Payment;
