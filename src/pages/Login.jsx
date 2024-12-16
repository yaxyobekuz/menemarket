import React from "react";
import { Link } from "react-router-dom";

// Images
import logoIcon from "../assets/images/icons/logo.svg";

// Components
import FormInputWrapper from "../components/FormInputWrapper";

const Login = () => {
  return (
    <div className="flex justify-center gap-3.5 size-full">
      <div className="max-w-[476px] w-full my-auto py-5 space-y-5">
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

        <h1 className="text-2xl xs:text-[26px]">Akkauntg kirish</h1>

        <div>
          <p className="inline-block">Hali akkauntingiz yo'qmi?</p>
          <Link to="/auth/register" className="text-primary-default">
            {" "}
            Ro'yxatdan o'tish
          </Link>
        </div>

        {/* Telephone number */}
        <FormInputWrapper
          type="tel"
          maxLength="19"
          autoFocus={true}
          name="phone number"
          label="Telegram raqam *"
          placeholder="+998 (__) ___-__-__"
          onChange={(value) => handleInputChange("phoneNumber", value)}
        />

        {/* Password */}
        <FormInputWrapper
          maxLength="80"
          type="password"
          name="password"
          label="Parol *"
          placeholder="Kamida 8ta belgi"
          onChange={(value) => handleInputChange("password", value)}
        />

        <div>
          <p className="inline-block">Parolni unutdingizmi?</p>
          <Link to="/auth/register" className="text-primary-default">
            {" "}
            Qayta tiklash
          </Link>
        </div>

        <button className="btn-primary w-full h-11 rounded-xl">
          Akkauntga kirish
        </button>

        <p className="text-neutral-400">© 2023-2024. "Mene Market"</p>
      </div>
    </div>
  );
};

export default Login;
