import React, { useCallback, useEffect, useId, useState } from "react";

// Utils
import { extractNumbers } from "@/utils";

// Redux
import { useSelector } from "react-redux";

// Toaster (For notification)
import { notification } from "@/notification";

// Services
import recoveryService from "@/api/services/recoveryService";

// Components
import LoadingText from "@/components/LoadingText";
import AdminPagesHeader from "@/components/AdminPagesHeader";
import FormInputWrapper from "@/components/FormInputWrapper";

const ForgotPassword = () => {
  const [timer, setTimer] = useState(0);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const otpStorage = JSON.parse(localStorage.getItem("otpData"));
  const [isSendingOtpCode, setIsSendingOtpCode] = useState(false);
  const { email, _id: userId } = useSelector((state) => state.user.data) || {};

  // Handle reset timer & otp storage
  const handleResetTimer = () => {
    const newTimestamp = new Date();
    localStorage.setItem(
      "otpData",
      JSON.stringify({ ...otpStorage, timestamp: newTimestamp })
    );
    setTimer(60);
  };

  const sendOtpCodeToEmail = () => {
    if (timer > 0 || isSendingOtpCode) return;

    setIsSendingOtpCode(true);

    recoveryService
      .sendOtpCodeToEmail({ email })
      .then(({ status }) => {
        if (status === "KUTILMOQDA") {
          handleResetTimer();
          notification.success("Kod e-pochtangizga muvaffaqiyatli yuborildi");
        } else {
          throw new Error();
        }
      })
      .catch(() => notification.error("Kodni yuborishda xatolik"))
      .finally(() => setIsSendingOtpCode(false));
  };

  // Update password
  const handleUpdatePasswordByOtp = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const {
      otp,
      new_password: newPassword,
      confirm_new_password: confirmPassword,
    } = formData || {};

    if (String(userId)?.length < 10) {
      return notification.error("ID raqam noto'g'ri");
    }

    if (newPassword !== confirmPassword) {
      return notification.error("Yangi parollar bir biriga mos emas!");
    }

    if (extractNumbers(otp)?.length !== 4) {
      return notification.error("Kod noto'g'ri kiritildi");
    }

    setIsLoading(true);

    recoveryService
      .changePasswordByOtp({ ...formData, userid: userId, otp: otp })
      .then((data) => {
        if (data) notification.success("Parol muvaffaqiyatli o'zgartirildi");
        else throw new Error();
      })
      .catch(({ response }) => {
        const { message } = response?.data || {};
        notification.error(message || "Parolni qayta tiklashda xatolik");
      })
      .finally(() => setIsLoading(false));
  };

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  // Update local storage, doc title & timer
  useEffect(() => {
    if (otpStorage) {
      const elapsedTime = Math.floor(
        (new Date() - new Date(otpStorage.timestamp)) / 1000
      );

      // Clear OTP storage if time has expired
      if (elapsedTime > 1800) localStorage.removeItem("otpData");
      // Set initial timer value
      else setTimer(Math.max(60 - elapsedTime, 0));
    } else {
      sendOtpCodeToEmail();
    }

    // Update doc title
    document.title = "Mene Market | Parolni qayta tiklash";
  }, []);

  // Update timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader link="/admin/profile" title="Parolni qayta tiklash" />

      {/* Main content */}
      <div className="container">
        <div className="flex flex-col items-center gap-5 bg-gradient-gray rounded-xl p-5 sm:items-start sm:flex-row">
          {/* Update password form */}
          <form
            className="w-full space-y-5"
            onSubmit={handleUpdatePasswordByOtp}
          >
            <p>
              <span>Parolingizni qayta tiklash uchun </span>
              <span className="font-semibold">{email} </span>
              <span className="text-nowrap">
                e-pochtangizga kelgan koddan foydalaning
              </span>
            </p>

            {/* Otp */}
            <div className="flex items-end gap-5">
              <FormInputWrapper
                required
                type="otp"
                label="Kod *"
                name="otp-code"
                disabled={isLoading}
                placeholder="_ _ _ _"
                className="w-full white-input"
                onChange={(value) =>
                  handleInputChange("otp", extractNumbers(value))
                }
              />

              <button
                type="button"
                onClick={sendOtpCodeToEmail}
                disabled={timer > 0 || isSendingOtpCode}
                className="btn-primary shrink-0 w-40 h-11"
              >
                <LoadingText
                  text={
                    timer > 0
                      ? `00:${timer < 10 ? `0${timer}` : timer}`
                      : "Qayta yuborish"
                  }
                  loader={isSendingOtpCode}
                />
              </button>
            </div>

            {/* New Password */}
            <FormInputWrapper
              required
              type="password"
              name="new-password"
              disabled={isLoading}
              label="Yangi parol *"
              placeholder="Kamida 8ta belgi"
              className="w-full white-input"
              onChange={(value) => handleInputChange("new_password", value)}
            />

            {/* Confirm New Password */}
            <FormInputWrapper
              required
              type="password"
              disabled={isLoading}
              name="confirm-new-password"
              placeholder="Kamida 8ta belgi"
              className="w-full white-input"
              label="Yangi parolni takrorlash *"
              onChange={(v) => handleInputChange("confirm_new_password", v)}
            />

            {/* Submit btn */}
            <button
              disabled={isLoading}
              className="btn-primary w-full h-11 sm:w-32 md:w-40"
            >
              <LoadingText text="O'zgartirish" loader={isLoading} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
