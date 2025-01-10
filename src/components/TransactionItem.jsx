import React from "react";
import Icon from "./Icon";
import { getRandomNumber } from "../utils";

const TransactionItem = ({
  alt,
  icon,
  type,
  amount = 1000000,
  title = "Sarlavha",
  description = "Izoh",
  time = new Date().toLocaleString(),
}) => {
  const getTextColor = () => {
    switch (type) {
      case "receive":
        return "text-green-500";
      case "send":
        return "text-red-500";
      default:
        return "text-neutral-dark";
    }
  };

  return (
    <li className="group flex items-center h-16 pl-3.5 xs:h-[68px] xs:pl-4">
      <div className="flex items-center gap-2 size-full xs:gap-3.5">
        <Icon
          alt={alt}
          size={48}
          src={icon}
          className="size-10 rounded-full object-cover xs:size-11 sm:size-12"
        />

        <div className="flex flex-col justify-center gap-1 w-[calc(100%-48px)] h-full pr-3.5 border-b border-neutral-300/70 group-last:border-b-0 xs:pr-4 xs:w-[calc(100%-58px)] sm:w-[calc(100%-62px)]">
          {/* Top */}
          <div className="flex items-center justify-between gap-1.5">
            <h3
              className={`${getTextColor()} font-medium truncate sm:text-[17px]`}
            >
              {title}
            </h3>

            <p
              className={`${getTextColor()} font-medium text-[15px] xs:text-base text-right sm:text-[17px]`}
            >
              {amount.toLocaleString()}
            </p>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between gap-1.5">
            <p className="text-neutral-500 truncate text-sm sm:text-base">
              {description}
            </p>

            <div className="flex items-center gap-2.5 shrink-0 text-sm sm:gap-3.5 sm:text-base">
              {time.split(",").map((time, index) => (
                <span key={index} className="text-neutral-500">
                  {time}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TransactionItem;
