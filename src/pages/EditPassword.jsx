import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Toaster (For notification)
import { notification } from "@/notification";

// Services
import recoveryService from "@/api/services/recoveryService";

// Components
import LoadingText from "@/components/LoadingText";
import AdminPagesHeader from "@/components/AdminPagesHeader";
import FormInputWrapper from "@/components/FormInputWrapper";

const EditPassword = () => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = "Mene Market | Parolni o'zgartirish";
  }, []);

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const handleUpdatePasswordByPassword = (e) => {
    e.preventDefault();
    if (isLoading) return;

    const {
      old_password: oldPassword,
      new_password: newPassword,
      confirm_new_password: confirmPassword,
    } = formData || {};

    if (newPassword !== confirmPassword) {
      return notification.error("Yangi parollar bir biriga mos emas!");
    }

    if (oldPassword === newPassword) {
      return notification.error("Hozirgi va yangi parol bir xil");
    }

    setIsLoading(true);

    recoveryService
      .changePassword(formData)
      .then((data) => {
        if (data) notification.success("Parol muvaffaqiyatli o'zgartirildi");
        else throw new Error();
      })
      .catch(() => notification.error("Parolni o'zgartirishda xatolik"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader link="/admin/profile" title="Parolni o'zgartirish" />

      {/* Main content */}
      <div className="container">
        <div className="flex flex-col items-center gap-5 bg-gradient-gray rounded-xl p-5 sm:items-start sm:flex-row">
          {/* Update password form */}
          <form
            className="w-full space-y-5"
            onSubmit={handleUpdatePasswordByPassword}
          >
            {/* Current Password */}
            <FormInputWrapper
              required
              type="password"
              name="password"
              disabled={isLoading}
              label="Hozirgi parol *"
              className="w-full white-input"
              placeholder="Kamida 8ta belgi"
              onChange={(value) => handleInputChange("old_password", value)}
            />

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

            <div>
              <span className="inline-block">Parolni unutdingizmi?</span>
              <Link
                className="text-primary-default"
                to="/admin/profile/forgot-password"
              >
                <span> Qayta tiklash</span>
              </Link>
            </div>

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

export default EditPassword;
