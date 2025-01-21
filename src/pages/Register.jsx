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
import FormCheckbox from "../components/FormCheckbox";
import FormInputWrapper from "../components/FormInputWrapper";

const Register = () => {
  const navigate = useNavigate();
  const [isAgree, setIsAgree] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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

    if (!isAgree && isLoading) return;

    setIsLoading(true);

    // Call the API to create a new user
    userService
      .createUser(formData)
      .then((res) => {
        const { userid, email } = res.data;

        // Save OTP data to local storage+
        localStorage.setItem(
          "otpData",
          JSON.stringify({
            ...formData,
            email,
            userId: userid,
            timestamp: new Date(),
          })
        );

        // Navigate to Verify OTP
        navigate("/auth/verify-otp");
      })
      .catch(() => {
        notification.error("Nimadir xato ketdi");
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

        <h1 className="text-2xl xs:text-[26px]">Ro'yxatdan o'tish</h1>

        <div>
          <p className="inline-block">Allaqachon akkauntingiz bormi?</p>
          <Link to="/auth/login" className="text-primary-default">
            {" "}
            Akkuntga kirish
          </Link>
        </div>

        {/* First name */}
        <FormInputWrapper
          label="Ism *"
          maxLength="72"
          required={true}
          autoFocus={true}
          name="first name"
          disabled={isLoading}
          placeholder="Falonchi"
          onChange={(value) => handleInputChange("name", value)}
        />

        {/* Telephone number */}
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
          maxLength="244"
          type="password"
          name="password"
          label="Parol *"
          required={true}
          disabled={isLoading}
          placeholder="Kamida 8ta belgi"
          onChange={(value) => handleInputChange("password", value)}
        />

        <div className="flex items-center gap-3.5">
          <FormCheckbox
            defaultChecked={true}
            onChecked={(value) => setIsAgree(value)}
          />

          <p>
            <span>Men</span>
            <Link to="/" className="text-primary-default">
              {" "}
              Foydalanish shartlari{" "}
            </Link>
            <span>bilan tanishdim</span>
          </p>
        </div>

        <button
          disabled={!isAgree || isLoading}
          className="btn-primary w-full h-11 rounded-xl"
        >
          <LoadingText loader={isLoading} text="Davom etish" />
        </button>

        <p className="text-neutral-400">© 2023-2024. "Mene Market"</p>
      </form>
    </div>
  );
};

export default Register;
