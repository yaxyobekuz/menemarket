import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Toaster (For notification)
import { notification } from "../notification";

// Services
import userService from "../api/services/userService";

// Components
import Icon from "../components/Icon";
import LoadingText from "../components/LoadingText";
import FormInputWrapper from "../components/FormInputWrapper";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const VerifyOTP = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const otpStorage = JSON.parse(localStorage.getItem("otpData"));

  // Depend on navigate and otpStorage
  useEffect(() => {
    if (otpStorage) {
      const elapsedTime = Math.floor(
        (new Date() - new Date(otpStorage.timestamp)) / 1000
      );

      if (elapsedTime > 1800) {
        // Navigate and clear OTP storage if time has expired
        localStorage.removeItem("otpData");
        navigate("/auth/register");
      } else {
        // Set initial timer value
        setTimer(Math.max(60 - elapsedTime, 0));
      }
    } else {
      // Redirect if no OTP data exists
      navigate("/auth/register");
    }

    document.title = "Mene Market | Akkauntni tasdiqlash";
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

  // Handle resend OTP code
  const handleResendCode = () => {
    const newTimestamp = new Date();
    localStorage.setItem(
      "otpData",
      JSON.stringify({ ...otpStorage, timestamp: newTimestamp })
    );
    setTimer(60);
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Otp
    const sanitizeOtp = (otp) => otp.replace(/\s+/g, "");
    const otp = sanitizeOtp(code?.trim() || "");

    if (isLoading) return;

    // Verify OTP
    if (otp.length === 4) {
      setIsLoading(true);

      const formData = {
        otp,
        userid: otpStorage.userId,
      };

      userService
        .verifyOtp(formData)
        .then(({ status, message }) => {
          if (status === "TEKSHIRILDI") {
            navigate("/auth/login");
            localStorage.removeItem("otpData");
            notification.success("Akkauntingiz muvaffaqiyatli tasdiqlandi");
          } else {
            notification.error(message);
          }
        })
        .catch(() => {
          notification.error("Kodni tekshirishda noma'lum xatolik yuz berdi");
        })
        .finally(() => setIsLoading(false));
    } else notification.error("Kod noto'g'ri kiritildi");
  };

  return (
    <div className="flex justify-center gap-3.5 size-full">
      <form
        onSubmit={handleSubmit}
        className="max-w-[476px] w-full my-auto py-5 space-y-5"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 max-w-max">
          <img
            width={90}
            height={48}
            src={logoIcon}
            alt="Mene Market logo svg icon"
            className="w-[75px] h-10 xs:w-[82.5px] xs:h-11 md:w-[90px] md:h-12"
          />
        </Link>

        {/* back */}
        <Link to="/auth/register" className="btn max-w-max">
          <Icon
            size={20}
            src={arrowRightIcon}
            alt="Arrow right icon"
            className="rotate-180 size-5"
          />
          <span>Ortga qaytish</span>
        </Link>

        {/* title */}
        <h1 className="text-2xl xs:text-[26px]">Akkauntni tasdiqlash</h1>

        <p>
          <span>Akkauntingizni tasdiqlash uchun </span>
          <span className="font-semibold">{otpStorage?.email} </span>
          <span className="text-nowrap">
            e-pochtangizga kelgan koddan foydalaning
          </span>
        </p>

        {/* OTP input */}
        <FormInputWrapper
          name="otp"
          type="otp"
          label="Kod *"
          maxLength="7"
          required={true}
          onChange={setCode}
          placeholder="_ _ _ _"
        />

        {timer > 0 ? (
          // Timer
          <div>
            <span>Tasdiqlash kodini </span>
            <span className="font-semibold">
              {`00:${timer < 10 ? `0${timer}` : timer}`}{" "}
            </span>
            <span>soniyadan so'ng qayta yuborishingiz mumkin</span>
          </div>
        ) : (
          // Resend Code Button
          <button
            type="button"
            onClick={handleResendCode}
            className="underline underline-offset-2 text-primary-default"
          >
            Kodni qayta yuborish
          </button>
        )}

        <button
          disabled={isLoading}
          className="btn-primary w-full h-11 rounded-xl"
        >
          <LoadingText loader={isLoading} text="Tasdiqlash" />
        </button>

        <p className="text-neutral-400">© 2023-2024. "Mene Market"</p>
      </form>
    </div>
  );
};

export default VerifyOTP;
