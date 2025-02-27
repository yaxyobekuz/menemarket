import React from "react";

// Utils
import { getRandomNumber } from "../utils";

// Redux
import { useDispatch } from "react-redux";
import { updateModal } from "@/store/features/modalSlice";

// Components
import TransactionItem from "../components/TransactionItem";
import AdminPagesHeader from "../components/AdminPagesHeader";

const DonateBox = () => {
  const dispatch = useDispatch();

  const handleOpenDonateModal = () => {
    dispatch(
      updateModal({
        data: null,
        isOpen: true,
        name: "donate",
        title: "Ehson qilish",
        buttons: {
          primary: { label: "Ehson qilish" },
          secondary: { label: "Bekor qilish" },
        },
      })
    );
  };

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Hayriya qutisi" />

      {/* Main content */}
      <div className="container">
        <div className="bg-gradient-gray rounded-xl">
          {/* Total balance */}
          <div className="flex items-center justify-between h-[62px] pl-5 pr-2.5 border-b-2 border-white">
            <b className="block text-center text-lg font-normal truncate sm:text-xl">
              {getRandomNumber(0, 99999999).toLocaleString()} so'm
            </b>

            {/* Button */}
            <button
              onClick={handleOpenDonateModal}
              className="btn-primary h-10 px-5 rounded-full max-xs:font-normal"
            >
              <span className="hidden xs:inline">Ehson qilish</span>
              <span className="text-2xl font-normal leading-none pb-0.5">
                +
              </span>
            </button>
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
