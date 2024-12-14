import React from "react";

// Components
import Icon from "./Icon";

// Redux
import { useDispatch } from "react-redux";
import { updateModal } from "../store/features/modalSlice";

// Images
import telIcon from "../assets/images/icons/tel-gradient.svg";
import timeIcon from "../assets/images/icons/time-gradient.svg";
import emailIcon from "../assets/images/icons/email-gradient.svg";
import robotIcon from "../assets/images/icons/robot-gradient.svg";
import locationIcon from "../assets/images/icons/location-gradient.svg";
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const ContactModalContent = () => {
  const dispatch = useDispatch();
  const handleOpenCallOrderModal = () => {
    dispatch(
      updateModal({
        data: null,
        isOpen: true,
        name: "callOrder",
        title: "Qo'ng'iroqqa buyurtma",
        buttons: {
          primary: {
            label: "Yuborish",
            action: "sendUserCallOrderToServer",
          },
          secondary: {
            label: "Bekor qilish",
            action: false,
          },
        },
      })
    );
  };

  return (
    <div className="">
      <div className="space-y-5">
        <ul className="space-y-5">
          {/* Email */}
          <li className="flex items-center gap-3.5">
            {/* Icon */}
            <Icon
              size={48}
              src={emailIcon}
              alt="Email icon"
              className="size-10 sm:size-11 md:size-12"
            />

            {/* Details */}
            <div>
              <h3 className="font-medium xs:text-lg">E-pochta</h3>
              <a
                href="mailto:menemarketuz@gmail.com"
                className="text-sm text-neutral-500 xs:text-base"
              >
                menemarketuz@gmail.com
              </a>
            </div>
          </li>

          {/* Tel */}
          <li className="flex items-center gap-3.5">
            {/* Icon */}
            <Icon
              size={48}
              src={telIcon}
              alt="Telephone icon"
              className="size-10 sm:size-11 md:size-12"
            />

            {/* Details */}
            <div>
              <h3 className="font-medium xs:text-lg">Tel raqam</h3>
              <a
                href="tel:+998990000000"
                className="text-sm text-neutral-500 xs:text-base"
              >
                +998 (99) 000-00-00
              </a>
            </div>
          </li>

          {/* Bot */}
          <li className="flex items-center gap-3.5">
            {/* Icon */}
            <Icon
              size={48}
              src={robotIcon}
              alt="Robot icon"
              className="size-10 sm:size-11 md:size-12"
            />

            {/* Details */}
            <div>
              <h3 className="font-medium xs:text-lg">Telegram bot</h3>
              <a
                target="_blank"
                href="https://t.me/mene_market"
                className="text-sm text-neutral-500 xs:text-base"
              >
                @mene_market
              </a>
            </div>
          </li>

          {/* Address */}
          <li className="flex items-center gap-3.5">
            {/* Icon */}
            <Icon
              size={48}
              src={locationIcon}
              alt="Location icon"
              className="size-10 sm:size-11 md:size-12"
            />

            {/* Details */}
            <div>
              <h3 className="font-medium xs:text-lg">Manzil</h3>
              <address className="text-sm text-neutral-500 not-italic xs:text-base">
                Chilonzor, Toshkent
              </address>
            </div>
          </li>
        </ul>

        {/* Order */}
        <button
          onClick={handleOpenCallOrderModal}
          className="group flex items-center justify-between gap-3.5 w-full rounded-xl text-start"
        >
          <div className="flex items-center gap-3.5">
            <Icon
              size={48}
              src={timeIcon}
              alt="Time icon"
              className="size-10 sm:size-11 md:size-12"
            />

            {/* Details */}
            <div>
              <h3 className="font-medium transition-colors duration-200 group-hover:text-primary-default xs:text-lg">
                Qo'ng'iroqqa buyurtma
              </h3>
              <p className="text-sm text-neutral-500 xs:text-base">
                2 kun ichida siz bilan bog'lanishadi
              </p>
            </div>
          </div>

          {/* Arrow right */}
          <Icon
            alt="Time icon"
            src={arrowRightIcon}
            className="size-5 transition-transform duration-200 -translate-x-0.5 group-hover:translate-x-0.5 xs:size-6"
          />
        </button>
      </div>
    </div>
  );
};

export default ContactModalContent;
