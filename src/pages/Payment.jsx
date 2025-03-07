import React, { useCallback, useEffect, useState } from "react";

// Lottie (For stickers)
import Lottie from "lottie-react";

// Utils
import { extractNumbers } from "@/utils";

// Toaster (For notification)
import { notification } from "@/notification";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/store/features/userSlice";

// Services
import paymentService from "@/api/services/paymentsService";

// Stickers
import likeOutSticker from "@/assets/stickers/like-out.json";

// Components
import LoadingText from "@/components/LoadingText";
import ToggleEyeButton from "@/components/ToggleEyeBtn";
import LastPaymentCard from "@/components/LastPaymentCard";
import FormInputWrapper from "@/components/FormInputWrapper";

const Payment = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const userData = useSelector((state) => state.user.data);
  const hideBalanceStorage = localStorage.getItem("hideBalance");
  const [hideBalance, setHideBalance] = useState(hideBalanceStorage === "true");
  const { balance } = userData || {};

  useEffect(() => {
    document.title = "Mene Market | To'lov";
  }, []);

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

    const {
      comment,
      payment: amount,
      card_owner: cardOwner,
      card_number: cardNumber,
    } = formData || {};

    console.log(formData);

    if (
      amount < 50000 ||
      amount > 5000000 ||
      cardOwner?.length < 2 ||
      extractNumbers(cardNumber)?.length !== 16
    ) {
      return notification.error("Ma'lumotlar noto'g'ri kiritildi");
    }

    setIsLoading(true);
    const formattedFormData = {
      ...formData,
      card_number: extractNumbers(cardNumber),
    };

    if (comment?.trim()?.length === 0) {
      formattedFormData.comment = `${formattedFormData?.card_number} Karta raqamiga to'lov qilish.`;
    }

    paymentService
      .createPayment(formattedFormData)
      .then(({ your_balance: newBalance }) => {
        if (!newBalance) return notification.error("Nimadir xato ketdi");

        setFormData({});
        setSuccess(true);
        setTimeout(() => setSuccess(false), 2500);
        dispatch(updateUser({ ...userData, balance: newBalance }));
        localStorage.setItem(
          "lastPaymentCard",
          JSON.stringify({
            author: formData.card_owner,
            number: formData.card_number,
          })
        );
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
          <LastPaymentCard />

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
                  {hideBalance ? "****" : balance?.toLocaleString()} so'm
                </div>
              </div>

              {/* current balance */}
              <div className="space-y-1.5">
                <div className="text-base text-neutral-500 sm:text-lg">
                  Tahminiy
                </div>

                <div className="text-lg font-medium sm:text-xl">Tez kunda</div>
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
                    min={50000}
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
                  className="btn-primary w-full h-10 font-normal xs:w-52"
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
