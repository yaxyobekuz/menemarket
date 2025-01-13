import React, { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Toaster (For notification)
import { notification } from "../notification";

// Services
import userService from "../api/services/userService";

// Images
import logoIcon from "../assets/images/icons/logo.svg";

// Components
import LoadingText from "../components/LoadingText";
import FormInputWrapper from "../components/FormInputWrapper";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    userService
      .loginUser(formData)
      .then(({ token, success }) => {
        if (!success) return notification.error("Noma'lum xatolik yuz berdi");

        // Save JWT token to local storage
        localStorage.setItem("token", token);

        // Navigate to dashboard
        navigate("/admin/dashboard");
        notification.success("Akkauntingizga muvaffaqiyatli kirdingiz");
      })
      .catch(() => {
        notification.error("E-pochta yoki parol noto'g'ri");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex justify-center gap-3.5 size-full">
      <form
        onSubmit={handleSubmit}
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

        <h1 className="text-2xl xs:text-[26px]">Akkauntg kirish</h1>

        <div>
          <p className="inline-block">Hali akkauntingiz yo'qmi?</p>
          <Link to="/auth/register" className="text-primary-default">
            {" "}
            Ro'yxatdan o'tish
          </Link>
        </div>

        {/* Email */}
        <FormInputWrapper
          type="email"
          maxLength="244"
          required={true}
          name="phone number"
          label="E-pochta *"
          disabled={isLoading}
          placeholder="misol@gmail.com"
          onChange={(value) => handleInputChange("email", value)}
        />

        {/* Password */}
        <FormInputWrapper
          maxLength="80"
          type="password"
          name="password"
          label="Parol *"
          required={true}
          disabled={isLoading}
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

        <button
          disabled={isLoading}
          className="btn-primary w-full h-11 rounded-xl"
        >
          <LoadingText loader={isLoading} text="Akkauntga kirish" />
        </button>

        <p className="text-neutral-400">© 2023-2024. "Mene Market"</p>
      </form>
    </div>
  );
};

export default Login;
