import React from "react";

// Components
import Icon from "./Icon";

// Data
import avatars from "@/data/avatars";

// Utils
import { formatDate, formatTime } from "../utils";

const DonateItem = ({ data = {} }) => {
  const {
    fund: amount,
    anonim: anonym,
    created_at: timestamp,
    user_id: { avatar, name, username },
  } = data || {};
  const validAvatar = anonym ? false : avatar?.small.startsWith("https");

  return (
    <li className="group flex items-center h-16 pl-3.5 xs:h-[68px] xs:pl-4">
      <div className="flex items-center gap-2 size-full xs:gap-3.5">
        <Icon
          size={48}
          alt="User avatar"
          src={validAvatar ? avatar?.small : avatars["default"][2]}
          className="size-10 bg-white rounded-full object-cover xs:size-11 sm:size-12"
        />

        <div className="flex flex-col justify-center gap-1 w-[calc(100%-48px)] h-full pr-3.5 border-b border-neutral-300/70 group-last:border-b-0 xs:pr-4 xs:w-[calc(100%-58px)] sm:w-[calc(100%-62px)]">
          {/* Top */}
          <div className="flex items-center justify-between gap-1.5">
            {/* Title */}
            <h3 className="font-medium truncate sm:text-[17px]">
              {anonym ? "Anonim foydalanuvchi" : name}
            </h3>

            {/* Amount */}
            <p className="font-medium text-[15px] xs:text-base text-right sm:text-[17px]">
              +{amount?.toLocaleString() || 0} so'm
            </p>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-1.5">
            <p className="text-neutral-500 truncate text-sm sm:text-base">
              @{anonym ? "foydalanuvchi_nomi" : username}
            </p>

            <div className="flex items-center gap-2.5 shrink-0 text-sm sm:gap-3.5 sm:text-base">
              <span className="text-neutral-500">{formatDate(timestamp)}</span>
              <span className="text-neutral-500">{formatTime(timestamp)}</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default DonateItem;
