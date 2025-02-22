import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

// Lottie (For stickers)
import Lottie from "lottie-react";

// Redux
import { useSelector } from "react-redux";

// Utils
import { extractNumbers } from "../utils";

// Toaster (For notification)
import { notification } from "../notification";

// Services
import paymentService from "../api/services/paymentsService";

// Stickers
import likeOutSticker from "../assets/stickers/like-out.json";

// Components
import LoadingText from "@/components/LoadingText";
import ToggleEyeButton from "../components/ToggleEyeBtn";
import FormInputWrapper from "../components/FormInputWrapper";

// Images
import waveBlueGradientBg from "../assets/images/backgrounds/wave-blue-gradient.avif";

const Payment = () => {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state) => state.user.data);
  const hideBalanceStorage = localStorage.getItem("hideBalance");
  const [hideBalance, setHideBalance] = useState(hideBalanceStorage === "true");
  const { balance } = userData || {};

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const { card_number: cardNumber } = formData || {};

    if (extractNumbers(cardNumber)?.length !== 16) {
      return notification.error("Karta raqam noto'g'ri kiritildi");
    }

    setIsLoading(true);

    paymentService
      .createPayment(formData)
      .then(() => {
        setFormData({});
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2500);
      })
      .catch(({ response: res }) => {
        const message = res.data?.message;
        notification.error(message || "Nimadir xato ketdi");
      })
      .finally(() => setIsLoading(false));
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
        <section className="bg-gradient-gray px-3.5 py-4 rounded-xl xs:p-4">
          {success ? (
            <div className="flex flex-col items-center justify-center gap-3.5 w-full h-80">
              <Lottie
                animationData={likeOutSticker}
                className="size-28 xs:size-32 sm:size-36 md:size-40"
              />
              <b className="text-lg font-semibold text-center sm:text-xl">
                So'rov muvaffaqiyatli <br /> yuborildi!
              </b>
            </div>
          ) : (
            <div className="space-y-5">
              <h2 className="font-semibold text-xl">
                To'lov uchun so'rov yuborish
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-2">
                  {/* Card number */}
                  <FormInputWrapper
                    required
                    type="card"
                    maxLength="19"
                    name="Full name"
                    disabled={isLoading}
                    label="Karta raqam *"
                    placeholder="0000 0000 0000 0000"
                    className="white-input !rounded-lg"
                    onChange={(value) =>
                      handleInputChange("card_number", value)
                    }
                  />

                  {/* Full name */}
                  <FormInputWrapper
                    required
                    maxLength="72"
                    name="Card number"
                    disabled={isLoading}
                    label="Karta egasi *"
                    placeholder="Falonchi Falonchiyev"
                    className="white-input !rounded-lg"
                    onChange={(value) => handleInputChange("card_owner", value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-y-4 gap-x-5 md:grid-cols-2">
                  {/* Amount */}
                  <FormInputWrapper
                    required
                    type="number"
                    name="Amount"
                    maxLength="7"
                    max={5000000}
                    label="Qiymat *"
                    disabled={isLoading}
                    placeholder="Max 5,000,000 so'm"
                    className="white-input !rounded-lg"
                    onChange={(value) => handleInputChange("payment", value)}
                  />

                  {/* Description */}
                  <FormInputWrapper
                    label="Izoh"
                    maxLength="72"
                    name="Description"
                    disabled={isLoading}
                    placeholder="Ixtiyoriy"
                    className="white-input !rounded-lg"
                    onChange={(value) => handleInputChange("comment", value)}
                  />
                </div>

                {/* Btn */}
                <button
                  disabled={isLoading}
                  className="btn-primary w-full h-10 px-16 font-normal xs:w-auto"
                >
                  <LoadingText loader={isLoading} text="Yuborish" />
                </button>
              </form>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Payment;
