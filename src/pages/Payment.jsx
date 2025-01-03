import React, { useCallback, useState } from "react";

// Utils
import { getRandomNumber } from "../utils";

// Components
import Icon from "../components/Icon";
import ToggleEyeButton from "../components/ToggleEyeBtn";
import FormInputWrapper from "../components/FormInputWrapper";

// Images
import sendIcon from "../assets/images/icons/send.svg";
import receiveIcon from "../assets/images/icons/receive.svg";

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
      <div className="container space-y-4">
        {/* Top */}
        <div className="grid grid-cols-2 gap-4">
          {/* Payment card */}
          <div
            style={{
              backgroundImage:
                "url(https://img.freepik.com/free-vector/wave-blue-gradient-modern-abstract-background_343694-3710.jpg)",
            }}
            className="flex items-center relative h-56 bg-gradient-gray bg-center bg-cover p- rounded-xl overflow-hidden"
          >
            <div
              style={{
                backgroundImage:
                  "url(https://s44885.pcdn.co/wp-content/uploads/2023/06/WP-FILs-VV-QA-Image-800x416-1.jpg)",
              }}
              className="w-2/3 h-full rounded-xl bg-center bg-cover"
            ></div>
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
        <section className="bg-gradient-gray p-4 rounded-xl space-y-5">
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
            <button className="btn-primary h-10 px-16 font-normal">
              Yuborish
            </button>
          </form>
        </section>

        {/* Balance history */}
        <section className="bg-gradient-gray p-4 space-y-4 rounded-xl">
          <h2 className="font-semibold text-xl">Balans tarixi</h2>

          <ul className="space-y-3.5">
            {Array.from({ length: 6 }).map((_, index) => {
              const isOdd = getRandomNumber() % 2 === 0;
              return (
                <li
                  key={index}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <Icon
                      size={48}
                      className="size-12"
                      src={isOdd ? receiveIcon : sendIcon}
                    />

                    <div className="space-y-0.5">
                      <h3
                        className={`${
                          isOdd ? "text-green-500" : "text-red-500"
                        } font-medium text-[17px]`}
                      >
                        {isOdd ? "Qabul qilindi" : "Yuborildi"}
                      </h3>

                      <p className="text-neutral-500">O'tkazma izohi</p>
                    </div>
                  </div>

                  <div className="space-y-0.5">
                    <h3
                      className={`${
                        isOdd ? "text-green-500" : "text-red-500"
                      } font-medium text-[17px] text-right`}
                    >
                      {isOdd ? "+" : "-"}
                      {getRandomNumber(0, 999999).toLocaleString()}
                    </h3>

                    <div className="flex items-center gap-3.5">
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
