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
    <div className="w-full pt-3.5 pb-8">
      <div className="container space-y-4">
        {/* Top */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex items-center justify-between gap-4 col-span-3 bg-gradient-to-r from-gray-light to-gray-medium/20 p-5 rounded-xl">
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

            <Link
              to="/admin/settings"
              aria-label="Settings"
              className="btn size-12 bg-white rounded-full"
            >
              <Icon src={settingsIcon} alt="Settings icon" />
            </Link>
          </div>

          {/* Balance */}
          <div className="flex flex-col justify-between gap-1.5 relative bg-gradient-to-r from-gray-light to-gray-medium/20 p-5 rounded-xl">
            <div className="text-base text-neutral-500 sm:text-lg">
              Balansingiz
            </div>

            <div className="text-lg font-medium sm:text-xl">
              {hideBalance ? "********" : (1099328).toLocaleString()} so'm
            </div>

            {/* Toggle eye button */}
            <ToggleEyeButton
              hide={hideBalance}
              onClick={handleChangeHideBalance}
              className="absolute size-12 top-1 right-1"
            />
          </div>
        </div>

        {/* Menu */}
        <nav>
          <ul className="grid grid-cols-4 gap-4">
            {/* Appeals */}
            <li className="opacity-50">
              <div className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl">
                {/* icon */}
                <Icon
                  size={40}
                  src={messagesIcon}
                  alt="Messages icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Murojaatlar
                </h3>
              </div>
            </li>

            {/* Contests */}
            <li>
              <Link
                to="/admin/contests"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={starIcon}
                  alt="Star icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">Konkurslar</h3>
              </Link>
            </li>

            {/* History */}
            <li>
              <Link
                to="/admin/balance-history"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={walletIcon}
                  alt="Wallet icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Balans tarixi
                </h3>
              </Link>
            </li>

            {/* Appeals */}
            <li>
              <Link
                to="/admin/donate"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={boxIcon}
                  alt="Box icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Hayriya qutisi
                </h3>
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                to="/admin/about"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={infoIcon}
                  alt="Info icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Dastur haqida
                </h3>
              </Link>
            </li>

            {/* Ads posts */}
            <li>
              <a
                target="_blank"
                href="https://t.me/menemarket"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={crownIcon}
                  alt="Crown icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Reklama postlari
                </h3>
              </a>
            </li>

            {/* News */}
            <li>
              <Link
                to="/admin/news"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={newsIcon}
                  alt="News icon"
                  className="size-10"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Yangiliklar
                </h3>
              </Link>
            </li>

            {/* Telegram */}
            <li>
              <Link
                to="/admin/telegram"
                className="flex flex-col items-center gap-3.5 bg-gradient-gray px-4 py-5 rounded-xl"
              >
                {/* icon */}
                <Icon
                  size={40}
                  src={telegramIcon}
                  className="size-10"
                  alt="Telegram logo icon"
                />

                {/* title */}
                <h3 className="text-base font-medium sm:text-lg">
                  Telegram kanal
                </h3>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Latest news */}
        <section className="bg-gradient-gray p-4 rounded-xl space-y-4">
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
                      className="size-[72px] rounded-lg"
                      src="https://upload.wikimedia.org/wikipedia/commons/e/ea/BBC_World_News_2022_%28Boxed%29.svg"
                    />

                    {/* details */}
                    <div>
                      <h3 className="font-medium sm:text-lg">
                        Yangilikning asosiy sarlavhasi bu yerda bo'ladi
                      </h3>

                      <p className="text-neutral-500 line-clamp-2">
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
