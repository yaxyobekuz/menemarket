import React, { useEffect, useState } from "react";

// Toaster (For notification)
import { notification } from "@/notification";

// Services
import userService from "@/api/services/userService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/store/features/userSlice";

// Components
import LoadingText from "@/components/LoadingText";
import AdminPagesHeader from "@/components/AdminPagesHeader";
import FormInputWrapper from "@/components/FormInputWrapper";

// Images
import phoneImage1 from "@/assets/images/others/phone-1.png";
import phoneImage2 from "@/assets/images/others/phone-2.png";

const ConnectTelegram = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { telegram_id: currentTelegramId } =
    useSelector((state) => state.user.data) || {};
  const [newTelegramId, setNewTelegramId] = useState(currentTelegramId || "");

  useEffect(() => {
    document.title = "Mene Market | Telegram botni bog'lash";
  }, []);

  const handleUpdateTelegramId = (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    userService
      .updateTelegramId({ chat_id: newTelegramId })
      .then(({ message, user }) => {
        if (message !== "linked") throw new Error();
        dispatch(updateUser(user));
        notification.success("Telegram bot muvaffaqiyatli bog'landi");
      })
      .catch(() => notification.error("Telegram botni bog'lashda xatolik"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader
        link="/admin/profile"
        className="!max-w-5xl"
        title="Telegram botni bog'lash"
      />

      {/* Main content */}
      <div className="container !max-w-5xl">
        <div className="bg-gradient-gray rounded-xl p-5 space-y-6 2xl:py-12">
          {/* List */}
          <div className="max-w-[832px] mx-auto">
            <ol className="space-y-3.5 md:text-lg">
              {/* 1 */}
              <li className="flex items-start gap-2">
                <h3 className="text-inherit font-semibold">1.</h3>
                <p className="text-inherit text-neutral-500">
                  <span>Telegram ilovangizga kirib </span>
                  <a
                    target="_blank"
                    href="https://t.me/menemarket_bot"
                    className="text-primary-default underline-offset-2 hover:underline"
                  >
                    @menemarket_bot
                  </a>
                  <span> ga kirib</span>
                  <b className="font-medium text-neutral-dark"> /start </b>
                  <span>buyrug'ini yuboring</span>
                </p>
              </li>

              {/* 2 */}
              <li className="flex items-start gap-2">
                <h3 className="text-inherit font-semibold">2.</h3>
                <p className="text-inherit text-neutral-500">
                  <span>Bot sizga yuborgan </span>
                  <b className="font-medium text-neutral-dark"> ID </b>
                  <span>raqamni nusxalab oling</span>
                </p>
              </li>

              {/* 3 */}
              <li className="flex items-start gap-2">
                <h3 className="text-inherit font-semibold">3.</h3>
                <p className="text-inherit text-neutral-500">
                  Quyida keltirilgan shaklga (formaga) ID raqamni kiritib
                  bog'lash tugmasini bosing. Barchasi tayyor! Endi sizning
                  oqimingizdan kelgan buyurtmalar holati haqida bot doimiy
                  ma'lumotlarni yuborib turadi.
                </p>
              </li>
            </ol>
          </div>

          {/* Steps */}
          <div className="overflow-x-auto scroll-x-primary pb-5 xs:pb-0">
            <div className="flex gap-8 max-w-max shrink-0 mx-auto">
              <img
                alt="Phone"
                width={256}
                height={537}
                src={phoneImage1}
                className="w-full h-auto bg-white rounded-[32px] xs:w-64 xs:h-[537px]"
              />
              <img
                alt="Phone"
                width={256}
                height={537}
                src={phoneImage2}
                className="w-full h-auto bg-white rounded-[32px] xs:w-64 xs:h-[537px]"
              />
              <img
                alt="Phone"
                width={256}
                height={537}
                src={phoneImage2}
                className="w-full h-auto bg-white rounded-[32px] xs:w-64 xs:h-[537px]"
              />
            </div>
          </div>

          {/* Connect telegram account form */}
          <form
            onSubmit={handleUpdateTelegramId}
            className="max-w-[832px] mx-auto"
          >
            <div className="w-full space-y-5">
              {/* First name */}
              <FormInputWrapper
                min={6}
                required
                label="ID *"
                type="number"
                maxLength={12}
                name="telegram-id"
                disabled={isLoading}
                onChange={setNewTelegramId}
                className="w-full white-input"
                placeholder="Telegram ID raqam"
                defaultValue={currentTelegramId}
              />

              {/* Submit btn */}
              <button
                disabled={isLoading}
                className="btn-primary w-full h-10 xs:w-52"
              >
                <LoadingText text="Bog'lash" loader={isLoading} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectTelegram;
