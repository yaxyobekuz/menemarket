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

        <div className="flex items-center justify-between size-full pr-3.5 border-b border-neutral-300/70 group-last:border-b-0 xs:pr-4">
          <div className="space-y-1 sm:space-y-0.5">
            <h3 className={`${getTextColor()} font-medium sm:text-[17px]`}>
              {title}
            </h3>

            <p className="text-neutral-500 line-clamp-1 text-sm sm:text-base">
              {description}
            </p>
          </div>

          {/* Amount */}
          <div className="space-y-1 sm:space-y-0.5">
            <p
              className={`${getTextColor()} font-medium text-[15px] xs:text-base text-right sm:text-[17px]`}
            >
              {amount.toLocaleString()}
            </p>

            <div className="flex items-center gap-2.5 text-sm sm:gap-3.5 sm:text-base">
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
