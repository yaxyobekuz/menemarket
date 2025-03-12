import React, { useCallback, useEffect, useState } from "react";

// Utils
import { emailRegex } from "@/utils";

// Toaster (For notification)
import { notification } from "@/notification";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/store/features/userSlice";

// Services
import recoveryService from "@/api/services/recoveryService";

// Components
import LoadingText from "@/components/LoadingText";
import AdminPagesHeader from "@/components/AdminPagesHeader";
import FormInputWrapper from "@/components/FormInputWrapper";

const EditEmail = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { email } = useSelector((state) => state.user.data) || {};

  useEffect(() => {
    document.title = "Mene Market | E-pochtani o'zgartirish";
  }, []);

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const { new_email: newEmail, old_password: password } = formData || {};

    // Validate email format
    if (!emailRegex?.test(newEmail)) {
      return notification.error("E-pochta formati noto'g'ri");
    }

    if (!password?.length) {
      return notification.error("Parol noto'g'ri kiritldi");
    }

    setIsLoading(true);

    recoveryService
      .changeEmail(formData)
      .then(({ updated_user: data }) => {
        if (data) {
          dispatch(updateUser(data));
          notification.success("E-pochta muvaffaqiyatli o'zgartirildi");
        } else throw new Error();
      })
      .catch(() => notification.error("E-pochtani o'zgartirishda xatolik"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader link="/admin/profile" title="E-pochtani o'zgartirish" />

      {/* Main content */}
      <div className="container">
        <div className="flex flex-col items-center gap-5 bg-gradient-gray rounded-xl p-5 sm:items-start sm:flex-row">
          {/* Update email form */}
          <form onSubmit={handleUpdateEmail} className="w-full space-y-5">
            {/* First name */}
            <FormInputWrapper
              required
              name="email"
              type="email"
              maxLength={112}
              disabled={isLoading}
              label="Yangi E-pochta *"
              defaultValue={email || ""}
              placeholder="misol@gmail.com"
              className="w-full white-input"
              onChange={(value) => handleInputChange("new_email", value)}
            />

            {/* Bio */}
            <FormInputWrapper
              required
              label="Parol *"
              type="password"
              name="password"
              disabled={isLoading}
              className="w-full white-input"
              placeholder="Kamida 8ta belgi"
              onChange={(value) => handleInputChange("old_password", value)}
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

export default EditEmail;
