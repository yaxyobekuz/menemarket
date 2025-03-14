import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Utils
import { extractNumbers } from "@/utils";

// Toaster (For notification)
import { notification } from "@/notification";

// Services
import recoveryService from "@/api/services/recoveryService";

// Components
import Icon from "@/components/Icon";
import LoadingText from "@/components/LoadingText";
import FormInputWrapper from "@/components/FormInputWrapper";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const ForgotSent = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(0);
  const pageTitle = "E-pochtani tasdiqlash";
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingOtpCode, setIsSendingOtpCode] = useState(false);
  const forgotStorage = JSON.parse(localStorage.getItem("forgotData"));
  const { email, userId } = forgotStorage || {};

  // Handle reset timer & otp storage
  const handleResetTimer = () => {
    const newTimestamp = new Date();
    localStorage.setItem(
      "forgotData",
      JSON.stringify({ ...forgotStorage, timestamp: newTimestamp })
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

    const { otp, password } = formData || {};

    if (String(userId)?.length < 10) {
      return notification.error("ID raqam noto'g'ri");
    }

    if (extractNumbers(otp)?.length !== 4) {
      return notification.error("Kod noto'g'ri kiritildi");
    }

    setIsLoading(true);

    recoveryService
      .changePasswordByOtp({
        otp,
        userid: userId,
        new_password: password,
        confirm_new_password: password,
      })
      .then(({ status, message, token }) => {
        if (status === "TEKSHIRILDI") {
          localStorage.removeItem("otpData");
          localStorage.removeItem("forgotData");
          notification.success("Akkauntingiz muvaffaqiyatli tasdiqlandi");

          if (token) {
            // Save JWT token to local storage
            localStorage.setItem("token", token);

            // Navigate to dashboard
            return navigate("/admin/dashboard");
          }

          navigate("/auth/login");
        } else {
          notification.error(message || "Nimadir xato ketdi");
        }
      })
      .catch(({ response }) => {
        const { message } = response?.data || {};
        notification.error(message || "Parolni o'zgartirishda xatolik");
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
    if (forgotStorage) {
      const elapsedTime = Math.floor(
        (new Date() - new Date(forgotStorage.timestamp)) / 1000
      );

      // Clear OTP storage if time has expired
      if (elapsedTime > 1800) localStorage.removeItem("forgotData");
      // Set initial timer value
      else setTimer(Math.max(60 - elapsedTime, 0));
    } else navigate("/auth/forgot");

    // Update doc title
    document.title = "Mene Market | " + pageTitle;
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
    <div className="flex justify-center gap-3.5 size-full">
      <form
        onSubmit={handleUpdatePasswordByOtp}
        className="max-w-[476px] w-full my-auto py-5 space-y-5"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 max-w-max">
          {/* logo icon */}
          <img
            width={90}
            height={48}
            src={logoIcon}
            alt="Mene Market logo svg icon"
            className="w-[75px] h-10 xs:w-[82.5px] xs:h-11 md:w-[90px] md:h-12"
          />
        </Link>

        {/* Back */}
        <Link to="/auth/forgot" className="btn max-w-max">
          <Icon
            size={20}
            src={arrowRightIcon}
            alt="Arrow right icon"
            className="rotate-180 size-5"
          />
          <span>Ortga qaytish</span>
        </Link>

        <h1 className="text-2xl xs:text-[26px]">{pageTitle}</h1>

        <p>
          <span>Parolni o'zgartirish uchun </span>
          <span className="font-semibold">{forgotStorage?.email} </span>
          <span>nomli e-pochtangizga kelgan koddan foydalaning</span>
        </p>

        {/* Otp */}
        <FormInputWrapper
          required
          type="otp"
          label="Kod *"
          name="otp-code"
          disabled={isLoading}
          placeholder="_ _ _ _"
          className="!rounded-xl"
          onChange={(value) => handleInputChange("otp", extractNumbers(value))}
        />

        {/* New Password */}
        <FormInputWrapper
          required
          type="password"
          name="password"
          disabled={isLoading}
          label="Yangi parol *"
          className="!rounded-xl"
          placeholder="Kamida 8ta belgi"
          onChange={(value) => handleInputChange("password", value)}
        />

        {/* Timer & Resend Code Button */}
        {timer > 0 ? (
          <div>
            <span>Tasdiqlash kodini </span>
            <span className="font-semibold">
              {`00:${timer < 10 ? `0${timer}` : timer}`}{" "}
            </span>
            <span>soniyadan so'ng qayta yuborishingiz mumkin</span>
          </div>
        ) : (
          <button
            type="button"
            disabled={isSendingOtpCode}
            onClick={sendOtpCodeToEmail}
            className="underline underline-offset-2 text-primary-default disabled:opacity-50"
          >
            Kodni qayta yuborish
          </button>
        )}

        {/* Submit button */}
        <button
          disabled={isLoading}
          className="btn-primary w-full h-11 rounded-xl"
        >
          <LoadingText loader={isLoading} text="O'zgartirish" />
        </button>

        {/* Copyright */}
        <p className="text-neutral-400">© 2023 - 2025. "Mene Market"</p>
      </form>
    </div>
  );
};

export default ForgotSent;
