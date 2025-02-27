import React, { useEffect, useState } from "react";

// UI components
import { Skeleton } from "@/components/ui/skeleton";

// Services
import donateService from "@/api/services/donateService";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

// Components
import Icon from "@/components/Icon";
import DonatesList from "@/components/DonatesList";
import AdminPagesHeader from "../components/AdminPagesHeader";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "@/store/features/modalSlice";
import { updateDonatesTotalAmount } from "@/store/features/donateSlice";

const DonateBox = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const totalAmount = useSelector((state) => state.donate.totalAmount);
  const [isLoading, setIsLoading] = useState(Number(totalAmount) === 0);

  const loadDonateBox = () => {
    setHasError(false);
    setIsLoading(true);

    donateService
      .getDonateBox()
      .then(({ box: { total_fund: amount } }) =>
        dispatch(updateDonatesTotalAmount(amount))
      )
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

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

  useEffect(() => {
    if (Number(totalAmount) === 0) loadDonateBox();
  }, []);

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Hayriya qutisi" />

      {/* Main content */}
      <div className="container">
        <div className="bg-gradient-gray rounded-xl">
          {/* Total balance */}
          <div className="flex items-center justify-between h-[62px] pl-5 pr-2.5 border-b-2 border-white">
            {!hasError && !isLoading && (
              <b className="block text-center text-lg font-normal truncate sm:text-xl">
                {totalAmount?.toLocaleString() || 0} so'm
              </b>
            )}

            {/* Loading animation */}
            {!hasError && isLoading && (
              <Skeleton className="w-40 h-6 bg-white" />
            )}

            {hasError && !isLoading && (
              <div className="flex justify-center py-16">
                <button
                  title="Reload"
                  aria-label="Reload"
                  onClick={loadDonateBox}
                >
                  <Icon src={reloadIcon} alt="Reload icon" />
                </button>
              </div>
            )}

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

          {/* Donates */}
          <DonatesList />
        </div>
      </div>
    </div>
  );
};

export default DonateBox;
