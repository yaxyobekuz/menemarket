import React from "react";

// Utils
import { getRandomNumber } from "../utils";

// Components
import TransactionItem from "../components/TransactionItem";
import AdminPagesHeader from "../components/AdminPagesHeader";

const DonateBox = () => {
  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Hayriya qutisi" />

      {/* Main content */}
      <div className="container">
        <div className="bg-gradient-gray rounded-xl">
          {/* Total balance */}
          <div className="flex items-center justify-center h-[62px] border-b-2 border-white">
            <b className="block text-center text-lg font-normal truncate sm:text-xl">
              {getRandomNumber(0, 99999999).toLocaleString()} so'm
            </b>
          </div>

          {/* Transactions */}
          <ul className="py-3.5">
            {Array.from({ length: 6 }).map((_, index) => {
              const isOdd = getRandomNumber() % 2 === 0;
              return (
                <TransactionItem
                  key={index}
                  alt="User profile picture"
                  title="Sanobar Jonibekova"
                  amount={getRandomNumber(0, 999999)}
                  icon="https://i.pinimg.com/236x/4b/12/fb/4b12fbe8012b0f175bc1e9cad35880a3.jpg"
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DonateBox;
