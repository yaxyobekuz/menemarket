import React from "react";

// Utils
import { getRandomNumber } from "../utils";

// Components
import TransactionItem from "../components/TransactionItem";
import AdminPagesHeader from "../components/AdminPagesHeader";

// Images
import sendIcon from "../assets/images/icons/send.svg";
import receiveIcon from "../assets/images/icons/receive.svg";

const BalanceHistory = () => {
  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Balans tarixi" />

      {/* Main content */}
      <div className="container">
        <div className="bg-gradient-gray rounded-xl">
          {/* Total balance */}
          <div className="flex items-center justify-between gap-3.5 h-[62px] px-3.5 border-b-2 border-white xs:justify-end xs:px-4">
            {/* Receive */}
            <div>
              <span className="font-medium">Kirim: </span>
              <span className="text-green-500 xs:text-lg">
                {getRandomNumber(0, 9999999).toLocaleString()}
              </span>
            </div>

            {/* Send */}
            <div>
              <span className="font-medium">Chiqim: </span>
              <span className="text-red-500 xs:text-lg">
                {getRandomNumber(0, 9999999).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Transactions */}
          <ul className="py-3.5">
            {Array.from({ length: 12 }).map((_, index) => {
              const isOdd = getRandomNumber() % 2 === 0;
              return (
                <TransactionItem
                  key={index}
                  type={isOdd ? "receive" : "send"}
                  amount={getRandomNumber(0, 999999)}
                  icon={isOdd ? receiveIcon : sendIcon}
                  alt={isOdd ? "Receive icon" : "Send icon"}
                  title={isOdd ? "Qabul qilindi" : "Yuborildi"}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BalanceHistory;
