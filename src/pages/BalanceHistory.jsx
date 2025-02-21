import React, { useEffect, useState } from "react";

// Data
import { getStatusByValue } from "@/data/statuses";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";
import paymentService from "@/api/services/paymentsService";

// Components
import DotsLoader from "@/components/DotsLoader";
import AdminPagesHeader from "../components/AdminPagesHeader";
import BalanceHistoryItem from "@/components/BalanceHistoryItem";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateBalanceHistory } from "@/store/features/balanceHistorySlice";

const BalanceHistory = () => {
  const dispatch = useDispatch();
  const [stats, setStats] = useState({});
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const allBalanceHistory = useSelector((state) => state.balanceHistory.data);
  const [filteredBalanceHistory, setFilteredBalanceHistory] =
    useState(allBalanceHistory);

  const calculateStats = (data) => {
    let newStats = {};

    data.forEach(({ status, payment: amount }) => {
      if (!newStats[status]) newStats[status] = 0;
      newStats[status] += amount;
    });
    return newStats;
  };

  const loadBalanceHistory = () => {
    paymentService
      .getPayments()
      .then((data) => {
        if (data?.length) {
          setStats(calculateStats(data));
          setFilteredBalanceHistory(data);
          dispatch(updateBalanceHistory(data));
        } else {
          setFilteredBalanceHistory([]);
          dispatch(updateBalanceHistory([]));
        }
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!allBalanceHistory) loadBalanceHistory();
    else {
      setTimeout(() => setIsLoading(false), 500);
      setStats(calculateStats(allBalanceHistory));
    }
  }, []);

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Balans tarixi" />

      {/* Main content */}
      <div className="container">
        <div className="bg-gradient-gray rounded-xl">
          <div className="flex items-center gap-3.5 overflow-x-auto scroll-hidden h-[62px] px-3.5 border-b-2 border-white xs:justify-en xs:px-5">
            {Object.keys(stats)?.map((status, index) => {
              const statusColor = getStatusByValue(status)?.color;
              const statusLabel = getStatusByValue(status)?.label;
              return (
                <div key={index} className="shrink-0 min-w-max">
                  <span className="font-medium">{statusLabel}: </span>
                  <span className="md:text-lg" style={{ color: statusColor }}>
                    {stats[status]?.toLocaleString() || 0} so'm
                  </span>
                </div>
              );
            })}
          </div>

          {/* Loading animation */}
          {isLoading && !hasError && (
            <div className="py-20">
              <DotsLoader color="#0085FF" />
            </div>
          )}

          {/* Reload button */}
          {hasError && !isLoading && (
            <div className="flex justify-center py-16">
              <button
                title="Reload"
                className="p-1.5"
                aria-label="Reload"
                onClick={loadBalanceHistory}
              >
                <Icon src={reloadIcon} alt="Reload icon" />
              </button>
            </div>
          )}

          {/* Transactions */}
          {filteredBalanceHistory?.length > 0 && !isLoading && !hasError ? (
            <ul className="py-3.5">
              {filteredBalanceHistory.map((balanceHistory, index) => (
                <BalanceHistoryItem key={index} data={balanceHistory} />
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BalanceHistory;
