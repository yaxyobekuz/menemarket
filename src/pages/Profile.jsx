import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Data
import avatars from "@/data/avatars";

// Toaster (For notification)
import { notification } from "../notification";

// Components
import Icon from "../components/Icon";
import CopyButton from "../components/CopyButton";
import VerifiedIcon from "@/components/VerifiedIcon";

// Services
import userService from "../api/services/userService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/features/userSlice";

// Images
import editIcon from "../assets/images/icons/edit.svg";
import linkIcon from "../assets/images/icons/link.svg";
import copyIcon from "../assets/images/icons/copy.svg";
import emailIcon from "../assets/images/icons/email-gradient.svg";
import telegramLogo from "../assets/images/others/telegram-logo.png";
import passwordIcon from "../assets/images/icons/password-gradient.svg";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.data);
  const { _id, name, username, email, avatar } = userData || {};

  useEffect(() => {
    document.title = "Mene Market | Profil";
  }, []);

  const handleLogout = () => {
    notification.promise(
      userService.logout().then(() => {
        dispatch(updateUser(null));
        localStorage.removeItem("token");
        window.location.pathname = "/auth/login";
      }),
      {
        success: "Akkuntdan chiqildi",
        loading: "Akkauntdan chiqilmoqda",
        error: "Akkauntdan chiqishda xatolik",
      }
    );
  };

  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Profile */}
          <div className="flex items-center justify-between gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:px-4 lg:p-5">
            <div className="flex items-center gap-3 min-w-0 2xl:gap-4">
              <Icon
                size={64}
                alt="User avatar"
                src={avatar?.small || avatars["default"][2]}
                className="size-12 bg-white rounded-full md:size-14 lg:size-16"
              />

              {/* Details */}
              <div className="w- overflow-hidden space-y-1">
                <h1 className="text-lg font-semibold truncate md:text-xl lg:text-2xl">
                  {name || "Foydalanuvchi"}
                  <VerifiedIcon />
                </h1>

                {/* username */}
                <p className="text-neutral-400 truncate">
                  @{username || "foydalanuvchi_nomi"}
                </p>
              </div>
            </div>

            {/* Edit */}
            <Link
              to="/admin/profile/edit"
              aria-label="Edit profile"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon
                src={editIcon}
                alt="Edit icon"
                className="size-[21px] xs:size-6"
              />
            </Link>
          </div>

          {/* Email */}
          <section className="flex items-center justify-between gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:p-5">
            <div className="flex items-center gap-3 min-w-0 2xl:gap-4">
              <Icon
                size={64}
                src={emailIcon}
                alt="Email icon"
                className="size-12 rounded-full md:size-14 lg:size-16"
              />

              {/* Details */}
              <div className="overflow-hidden space-y-1">
                <h2 className="text-lg font-semibold truncate md:text-xl lg:text-2xl">
                  E-pochta
                </h2>
                <p className="text-neutral-400 truncate">
                  {email || "misol@gmail.com"}
                </p>
              </div>
            </div>

            <Link
              aria-label="Edit profile"
              to="/admin/profile/edit-email"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon
                src={editIcon}
                alt="Edit icon"
                className="size-[21px] xs:size-6"
              />
            </Link>
          </section>

          {/* Password */}
          <section className="flex items-center justify-between gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:p-5">
            <div className="flex items-center gap-3 min-w-0 2xl:gap-4">
              <Icon
                size={64}
                src={passwordIcon}
                alt="Password icon"
                className="size-12 rounded-full md:size-14 lg:size-16"
              />

              {/* Details */}
              <div className="overflow-hidden space-y-1">
                <h2 className="text-lg font-semibold truncate md:text-xl lg:text-2xl">
                  Parol
                </h2>
                <p className="text-neutral-400 truncate">Parolni boshqarish</p>
              </div>
            </div>

            <Link
              aria-label="Edit profile"
              to="/admin/profile/edit-password"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon
                src={editIcon}
                alt="Edit icon"
                className="size-[21px] xs:size-6"
              />
            </Link>
          </section>

          {/* Telegram account */}
          <section className="flex items-center justify-between gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:p-5">
            <div className="flex items-center gap-3 min-w-0 2xl:gap-4">
              <Icon
                size={64}
                src={telegramLogo}
                alt="Telegram logo png"
                className="size-12 rounded-full md:size-14 lg:size-16"
              />

              {/* Details */}
              <div className="overflow-hidden space-y-1">
                <h2 className="text-lg font-semibold truncate md:text-xl lg:text-2xl">
                  Telegram bot
                </h2>

                <p className="text-neutral-400 truncate">
                  Tg botga akkauntni bog'lash
                </p>
              </div>
            </div>

            <Link
              to="/admin/profile/connect-telegram"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon
                alt="Link"
                src={linkIcon}
                className="size-[21px] xs:size-6"
              />
            </Link>
          </section>
        </div>

        {/* Id */}
        <div className="flex flex-col justify-center gap-1.5 bg-gradient-gray p-3.5 rounded-xl sm:p-4 lg:p-5">
          <b className="text-lg font-semibold md:text-xl">ID raqamingiz</b>

          <CopyButton
            text={_id || "mavjud-emas"}
            notificationText="ID raqamdan nusxa olindi"
            className="flex items-center justify-between text-start disabled:opacity-50"
          >
            <span className="text-neutral-400 truncate">
              {_id || "mavjud-emas"}
            </span>

            <Icon
              size={64}
              src={copyIcon}
              alt="Copy icon"
              className="size-6 shrink-0"
            />
          </CopyButton>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="px-2.5 text-primary-default text-[17px] font-medium underline underline-offset-2 sm:text-lg"
        >
          Akkauntdan chiqish
        </button>
      </div>
    </div>
  );
};

export default Profile;
