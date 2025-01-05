import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "../components/Icon";
import ToggleEyeButton from "../components/ToggleEyeBtn";

// Images
import boxIcon from "../assets/images/icons/box-gradient.svg";
import settingsIcon from "../assets/images/icons/settings.svg";
import starIcon from "../assets/images/icons/star-gradient.svg";
import infoIcon from "../assets/images/icons/info-gradient.svg";
import newsIcon from "../assets/images/icons/news-gradient.svg";
import crownIcon from "../assets/images/icons/crown-gradient.svg";
import walletIcon from "../assets/images/icons/wallet-gradient.svg";
import messagesIcon from "../assets/images/icons/messages-gradient.svg";
import telegramIcon from "../assets/images/icons/telegram-gradient.svg";

const Dashboard = () => {
  const hideBalanceStorage = localStorage.getItem("hideBalance");
  const [hideBalance, setHideBalance] = useState(hideBalanceStorage === "true");

  const handleChangeHideBalance = () => {
    setHideBalance(!hideBalance);
    localStorage.setItem("hideBalance", String(!hideBalance));
  };

  return (
    <div className="w-full pt-3.5 space-y-4 xs:pb-8">
      {/* Top */}
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="flex items-center justify-between gap-4 bg-gradient-to-r from-gray-light to-gray-medium/20 px-4 py-5 rounded-xl lg:col-span-2 xl:col-span-3">
            {/* Profile */}
            <div className="flex items-center gap-4">
              <Icon
                alt="User avatar"
                className="size-12 rounded-full xs:size-14 md:size-16"
                src="https://i1.sndcdn.com/artworks-000360728946-bilq7t-t500x500.jpg"
              />

              {/* Details */}
              <div className="space-y-0.5 xs:space-y-1">
                <h1 className="line-clamp-1 text-[19px] font-semibold max-xs:leading-[30px] xs:text-xl md:text-[22px] lg:text-2xl">
                  Samandar
                </h1>
                <p className="text-neutral-400 line-clamp-1">@samandar345</p>
              </div>
            </div>

            {/* Settings */}
            <Link
              to="/admin/settings"
              aria-label="Settings"
              className="btn shrink-0 size-10 bg-white rounded-full sm:size-12"
            >
              <Icon src={settingsIcon} alt="Settings icon" />
            </Link>
          </div>

          {/* Balance */}
          <div className="flex items-center justify-between gap-1.5 relative h-24 bg-gradient-to-r from-gray-light to-gray-medium/20 rounded-xl p-4 md:py-5 md:h-auto">
            <div className="flex flex-col justify-between h-full md:justify-normal md:gap-1.5">
              <div className="text-base text-neutral-500 sm:text-lg">
                Balansingiz
              </div>

              <div className="text-lg font-medium sm:text-xl">
                {hideBalance ? "********" : (1099328).toLocaleString()} so'm
              </div>
            </div>

            {/* Toggle eye button */}
            <ToggleEyeButton
              hide={hideBalance}
              iconClassName="size-7"
              onClick={handleChangeHideBalance}
              className="size-10 shrink-0 top-2 right-1 bg-white rounded-full sm:size-12 lg:absolute lg:bg-transparent"
            />
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="container">
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
          {/* Appeals */}
          <li className="opacity-50">
            <div className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-1 py-4 xs:px-4 sm:py-5">
              {/* icon */}
              <Icon
                size={40}
                src={messagesIcon}
                alt="Messages icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Murojaatlar
              </h3>
            </div>
          </li>

          {/* Contests */}
          <li>
            <Link
              to="/admin/contests"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={starIcon}
                alt="Star icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Konkurslar
              </h3>
            </Link>
          </li>

          {/* History */}
          <li>
            <Link
              to="/admin/balance-history"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={walletIcon}
                alt="Wallet icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Balans tarixi
              </h3>
            </Link>
          </li>

          {/* Appeals */}
          <li>
            <Link
              to="/admin/donate"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={boxIcon}
                alt="Box icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Hayriya qutisi
              </h3>
            </Link>
          </li>

          {/* About */}
          <li>
            <Link
              to="/admin/about"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={infoIcon}
                alt="Info icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Dastur haqida
              </h3>
            </Link>
          </li>

          {/* Ads posts */}
          <li>
            <a
              target="_blank"
              href="https://t.me/menemarket"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={crownIcon}
                alt="Crown icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Reklama postlari
              </h3>
            </a>
          </li>

          {/* News */}
          <li>
            <Link
              to="/admin/news"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={newsIcon}
                alt="News icon"
                className="size-9 sm:size-10"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Yangiliklar
              </h3>
            </Link>
          </li>

          {/* Telegram */}
          <li>
            <Link
              to="/admin/telegram"
              className="flex flex-col items-center gap-3.5 bg-gradient-gray rounded-xl px-3.5 py-4 sm:px-4 sm:py-5"
            >
              {/* icon */}
              <Icon
                size={40}
                src={telegramIcon}
                className="size-9 sm:size-10"
                alt="Telegram logo icon"
              />

              {/* title */}
              <h3 className="text-center text-[15px] font-medium line-clamp-1 xs:text-base sm:text-lg">
                Telegram kanal
              </h3>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Latest news */}
      <div className="container max-xs:!px-0">
        <section className="bg-gradient-to-b p-4 pb-8 space-y-4 from-transparent to-gray-medium xs:pb-4 xs:from-gray-light xs:to-gray-medium/20 xs:rounded-xl">
          <h2 className="font-semibold text-xl">So'nggi yangiliklar</h2>

          {/* News */}
          <ul className="space-y-3.5">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <li key={index}>
                  <Link
                    to="/"
                    className="flex items-center gap-3.5 p-3.5 bg-white/70 rounded-xl"
                  >
                    {/* icon */}
                    <Icon
                      size={72}
                      alt="News image"
                      className="size-16 xs:size-[72px] rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ea/BBC_World_News_2022_%28Boxed%29.svg"
                    />

                    {/* details */}
                    <div className="max-sm:space-y-1">
                      <h3 className="font-medium line-clamp-1 max-w-full sm:text-lg">
                        Yangilikning asosiy sarlavhasi bu yerda bo'ladi
                      </h3>

                      <p className="text-neutral-500 line-clamp-2 text-sm sm:text-base">
                        Hurmatli adminlar, 25 iyul kuniga qadar “yetqazib berish
                        bepul” deb olingan oqimlarni yangilashingizni soraymiz.
                        Aks holda narxlarda xatoliklar kuzatilishi mumkin.
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
