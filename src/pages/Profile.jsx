import React from "react";

// UUID
import { v4 as uuidv4 } from "uuid";

// Components
import Icon from "../components/Icon";

// Images
import editIcon from "../assets/images/icons/edit.svg";
import linkIcon from "../assets/images/icons/link.svg";
import copyIcon from "../assets/images/icons/copy.svg";
import emailIcon from "../assets/images/icons/email-gradient.svg";
import telegramLogo from "../assets/images/others/telegram-logo.png";

const Profile = () => {
  return (
    <div className="w-full pt-3.5 pb-8">
      <div className="container space-y-4">
        <div className="grid grid-cols-4 gap-4">
          {/* Profile */}
          <div className="flex items-center justify-between gap-4 col-span-2 bg-gradient-to-r from-gray-light to-gray-medium/20 p-5 rounded-xl">
            {/* Profile */}
            <div className="flex items-center gap-4 col-span-3">
              <Icon
                alt="User avatar"
                className="size-16 rounded-full"
                src="https://i1.sndcdn.com/artworks-000360728946-bilq7t-t500x500.jpg"
              />

              {/* Details */}
              <div className="space-y-1">
                <h1 className="text-2xl font-semibold">Samandar</h1>
                <p className="text-neutral-400">@samandar345</p>
              </div>
            </div>

            <button
              aria-label="Edit profile"
              className="btn size-12 bg-white rounded-full"
            >
              <Icon src={editIcon} alt="Edit icon" />
            </button>
          </div>

          {/* Email */}
          <section className="flex items-center justify-between gap-4 col-span-2 bg-gradient-to-r from-gray-light to-gray-medium/20 p-5 rounded-xl">
            <div className="flex items-center gap-4 col-span-3">
              <Icon
                src={emailIcon}
                alt="Email icon"
                className="size-16 rounded-full"
              />

              {/* Details */}
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">E-pochta</h2>
                <p className="text-neutral-400">example@gmail.com</p>
              </div>
            </div>

            <button
              disabled
              aria-label="Edit profile"
              className="btn size-12 bg-white rounded-full"
            >
              <Icon src={editIcon} alt="Edit icon" />
            </button>
          </section>

          {/* Id */}
          <div className="flex flex-col justify-center gap-1.5 bg-gradient-to-r from-gray-light to-gray-medium/20 p-5 rounded-xl">
            <b className="text-xl font-semibold">ID raqamingiz</b>

            <button className="flex items-center text-start">
              <span className="text-neutral-400 line-clamp-1">{uuidv4()}</span>

              <Icon
                src={copyIcon}
                alt="Copy icon"
                className="size-6 shrink-0"
              />
            </button>
          </div>

          {/* Tg */}
          <section className="flex items-center justify-between gap-4 col-span-3 bg-gradient-to-r from-gray-light to-gray-medium/20 p-5 rounded-xl">
            <div className="flex items-center gap-4 col-span-3">
              <Icon
                src={telegramLogo}
                alt="Telegram logo png"
                className="size-16 rounded-full"
              />

              {/* Details */}
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">Samandar B.</h2>
                <p className="text-neutral-400">Tg Botga bog'langan akkaunt</p>
              </div>
            </div>

            <button className="btn size-12 bg-white rounded-full">
              <Icon src={linkIcon} alt="Link icon" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
