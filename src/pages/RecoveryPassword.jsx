import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const RecoveryPassword = () => {
  const navigate = useNavigate();
  const pageTitle = "Parolni qayta tiklash";
  const [isLoading, setIsLoading] = useState(false);
  const forgotStorage = JSON.parse(localStorage.getItem("forgotData"));
  const [email, setEmail] = useState(forgotStorage?.email || "");

  const handleAddDataToStorage = ({ userid: userId, email }) => {
    const newTimestamp = new Date();

    localStorage.setItem(
      "forgotData",
      JSON.stringify({ userId, email, timestamp: newTimestamp })
    );

    navigate("/auth/forgot-sent");
  };

  const sendOtpCodeToEmail = (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (forgotStorage?.email === email) {
      const elapsedTime = Math.floor(
        (new Date() - new Date(forgotStorage.timestamp)) / 1000
      );

      if (elapsedTime < 1800) {
        return navigate("/auth/forgot-sent");
      }
    }

    setIsLoading(true);

    recoveryService
      .sendOtpCodeToEmail({ email })
      .then(({ status, data }) => {
        if (status === "KUTILMOQDA") {
          handleAddDataToStorage(data);
          notification.success("Kod e-pochtangizga muvaffaqiyatli yuborildi");
        } else {
          throw new Error();
        }
      })
      .catch(() => notification.error("Kodni yuborishda xatolik"))
      .finally(() => setIsLoading(false));
  };

  // Update doc title
  useEffect(() => {
    document.title = `Mene Market | ${pageTitle}`;
  }, []);

  return (
    <div className="flex justify-center gap-3.5 size-full">
      <form
        onSubmit={sendOtpCodeToEmail}
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
        <Link to="/auth/login" className="btn max-w-max">
          <Icon
            size={20}
            src={arrowRightIcon}
            alt="Arrow right icon"
            className="rotate-180 size-5"
          />
          <span>Ortga qaytish</span>
        </Link>

        <h1 className="text-2xl xs:text-[26px]">{pageTitle}</h1>

        {/* Email */}
        <FormInputWrapper
          type="email"
          maxLength="244"
          required={true}
          label="E-pochta *"
          name="phone number"
          onChange={setEmail}
          disabled={isLoading}
          className="!rounded-xl"
          placeholder="misol@gmail.com"
          defaultValue={forgotStorage?.email || ""}
        />

        <p>
          Parolingizni qayta tiklash uchun avval ro'yxatdan o'tgan
          e-pochtangizdan foydalaning.
        </p>

        <button
          disabled={isLoading}
          className="btn-primary w-full h-11 rounded-xl"
        >
          <LoadingText loader={isLoading} text="Davom etish" />
        </button>

        <p className="text-neutral-400">© 2023 - 2025. "Mene Market"</p>
      </form>
    </div>
  );
};

export default RecoveryPassword;
