import React, { useCallback, useState } from "react";

// Toaster (For notification)
import { notification } from "@/notification";

// Services
import userService from "@/api/services/userService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/store/features/userSlice";

// Components
import LoadingText from "@/components/LoadingText";
import AvatarUploader from "@/components/AvatarUploader";
import AdminPagesHeader from "@/components/AdminPagesHeader";
import FormInputWrapper from "@/components/FormInputWrapper";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { name, _id: id, bio } = useSelector((state) => state.user.data) || {};
  const [formData, setFormData] = useState({ name, bio });

  // Update form data based on input changes
  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  const handleUserDataChange = (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    userService
      .updateProfile(id, formData)
      .then((data) => {
        const { name, email, _id: id } = data;
        if (name && email && id) {
          dispatch(updateUser(data));
          notification.success("Ma'lumotlar muvaffaqiyatli o'zgartirildi");
        } else throw new Error();
      })
      .catch(() => notification.error("Ma'lumotlarni o'zgartirishda xatolik"))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader link="/admin/profile" title="Profilni tahrirlash" />

      {/* Main content */}
      <div className="container">
        <form
          onSubmit={handleUserDataChange}
          className="flex flex-col items-center gap-5 bg-gradient-gray rounded-xl p-5 sm:items-start sm:flex-row"
        >
          <AvatarUploader className="size-20" />

          <div className="w-full space-y-5">
            {/* First name */}
            <FormInputWrapper
              required
              name="name"
              label="Ism *"
              maxLength={112}
              disabled={isLoading}
              placeholder="Falonchi"
              defaultValue={name || ""}
              className="w-full white-input"
              onChange={(value) => handleInputChange("name", value)}
            />

            {/* Bio */}
            <FormInputWrapper
              required
              name="bio"
              label="Bio"
              as="textarea"
              disabled={isLoading}
              defaultValue={bio || ""}
              className="w-full white-input"
              placeholder="O'zingiz haqingizda"
              onChange={(value) => handleInputChange("bio", value)}
            />

            {/* Submit btn */}
            <button
              disabled={isLoading}
              className="btn-primary w-full h-11 sm:w-32 md:w-40"
            >
              <LoadingText text="O'zgartirish" loader={isLoading} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
