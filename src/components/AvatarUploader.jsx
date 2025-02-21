import React, { useState } from "react";

// Api config
import api from "@/api/axiosConfig";

// Components
import Icon from "@/components/Icon";

// Data
import avatars from "@/data/avatars";

// Endpoints
import apiEndpoints from "@/api/apiEndpoints";

// Toaster (For notification)
import { notification } from "@/notification";

// Services
import userService from "@/api/services/userService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "@/store/features/userSlice";

// images
import cameraIcon from "../assets/images/icons/camera.svg";

const AvatarUploader = ({ className = "" }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { _id: userId, avatar } = useSelector((state) => state.user.data) || {};

  const resetLoading = () => {
    setIsLoading(false);
    setUploadProgress(100);
    setTimeout(() => setUploadProgress(0), 1500);
  };

  const updateUserAvatar = (avatar) => {
    userService
      .updateProfile(userId, { avatar })
      .then((data) => {
        const { name, email, _id: id } = data;
        if (name && email && id) dispatch(updateUser(data));
        else throw new Error();
      })
      .catch(() => notification.error("Rasmni yuklashda xatolik"))
      .finally(resetLoading);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    if (isLoading || !files?.length) return;

    setIsLoading(true);
    let maxProgress = 0;
    setUploadProgress(0);
    const formData = new FormData();
    formData.append("file", files[0]);

    api
      .post(apiEndpoints.uploadProfileImage, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) => {
          const progress = Math.round((e.loaded / e.total) * 100);

          // Update progress
          if (progress === 100) {
            setUploadProgress(maxProgress);
          } else {
            maxProgress = progress;
            setUploadProgress(progress);
          }
        },
      })
      .then(({ message, urls }) => {
        if (message === "uploaded") updateUserAvatar(urls);
        else throw new Error();
      })
      .catch(() => {
        resetLoading();
        notification.error("Rasmni yuklashda xatolik");
      });
  };

  return (
    <label
      title="Rasm yuklash"
      className={`relative shrink-0 cursor-pointer ${className}`}
    >
      <Icon
        size={80}
        alt="User avatar"
        src={avatar?.small || avatars["default"][2]}
        className="size-full bg-white rounded-full filter brightness-[.55]"
      />

      {/* Camera icon */}
      {!isLoading && (
        <Icon
          size={32}
          alt="Camera icon"
          src={cameraIcon}
          className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 size-7 xs:size-8"
        />
      )}

      {/* Progress */}
      {isLoading && (
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 size-full">
          <div className="flex items-center justify-center relative size-full">
            <span className="absolute font-medium text-white">
              {uploadProgress}%
            </span>

            <svg viewBox="0 0 36 36" className="size-full">
              <path
                stroke="white"
                strokeWidth={1.5}
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={`${uploadProgress}, 100`}
                className="transition-all duration-300"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
          </div>
        </div>
      )}

      {/* File input */}
      <input
        type="file"
        className="hidden"
        disabled={isLoading}
        onChange={handleFileInputChange}
        accept="image/png, image/jpg, image/jpeg"
      />
    </label>
  );
};

export default AvatarUploader;
