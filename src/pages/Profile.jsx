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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Profile */}
          <div className="flex items-center justify-between gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:p-5">
            {/* Profile */}
            <div className="flex items-center gap-3 2xl:gap-4">
              <Icon
                alt="User avatar"
                className="size-12 rounded-full md:size-14 lg:size-16"
                src="https://i1.sndcdn.com/artworks-000360728946-bilq7t-t500x500.jpg"
              />

              {/* Details */}
              <div className="overflow-hidden space-y-1">
                <h1 className="text-lg font-semibold truncate md:text-xl lg:text-2xl">
                  Samandar
                </h1>

                {/* username */}
                <p className="text-neutral-400 truncate">@samandar345</p>
              </div>
            </div>

            <button
              aria-label="Edit profile"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon src={editIcon} alt="Edit icon" />
            </button>
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
                <p className="text-neutral-400 truncate">example@gmail.com</p>
              </div>
            </div>

            <button
              disabled
              aria-label="Edit profile"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon src={editIcon} alt="Edit icon" />
            </button>
          </section>

          {/* Id */}
          <div className="flex flex-col justify-center gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:p-5 2xl:col-span-1">
            <b className="text-lg font-semibold md:text-xl">ID raqamingiz</b>

            <button className="flex items-center justify-between text-start">
              <span className="text-neutral-400 truncate">{uuidv4()}</span>

              <Icon
                size={64}
                src={copyIcon}
                alt="Copy icon"
                className="size-6 shrink-0"
              />
            </button>
          </div>

          {/* Tg */}
          <section className="flex items-center justify-between gap-1.5 bg-gradient-gray p-3.5 rounded-xl md:col-span-2 sm:p-4 lg:p-5 2xl:col-span-3">
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
                  Samandar B.
                </h2>

                <p className="text-neutral-400 truncate">
                  Tg Botga bog'langan akkaunt
                </p>
              </div>
            </div>

            <button className="btn shrink-0 size-10 bg-white rounded-full sm:size-12">
              <Icon src={linkIcon} alt="Link icon" />
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
