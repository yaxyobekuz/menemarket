import React, { useEffect, useState } from "react";

// Components
import Icon from "./Icon";
import OrderItem from "./OrderItem";
import DotsLoader from "./DotsLoader";

// Services
import orderService from "@/api/services/orderService";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "@/store/features/ordersSlice";

// Images
import reloadIcon from "../assets/images/icons/reload.svg";

const OrdersTable = ({ currentActiveStatus }) => {
  const filterOrders = (data) => {
    if (!currentActiveStatus) {
      return data;
    } else {
      const filtered = data.filter(({ status }) => {
        return status?.toLowerCase() === currentActiveStatus?.toLowerCase();
      });

      return filtered;
    }
  };

  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const allOrders = useSelector((state) => state.orders.data);
  const [orders, setOrders] = useState(filterOrders(allOrders) || []);

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollLeft > 1);
  };

  const loadOrders = () => {
    setHasError(false);
    setIsLoading(true);

    orderService
      .getStreamsOrders()
      .then((orders) => {
        dispatch(updateOrders(orders));
        setOrders(filterOrders(orders));
      })
      .catch(() => setHasError(true))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!isLoading) setOrders(filterOrders(allOrders));
  }, [currentActiveStatus]);

  useEffect(() => {
    if (orders?.length === 0) loadOrders();
    else setTimeout(() => setIsLoading(false), 300);
  }, []);

  return (
    <div
      onScroll={handleScroll}
      className="w-full max-w-full overflow-x-auto scroll-x-primary"
    >
      {/* Table */}
      {!isLoading && !hasError && orders?.length ? (
        <table className="min-w-[1540px] max-w-full w-full table-auto">
          {/* Head */}
          <thead className="bg-neutral-50">
            <tr className="h-12">
              <th
                className={`${
                  isScrolled ? "custom-active-border-r" : null
                } sticky left-0 inset-y-0 w-14 bg-neutral-50 font-semibold transition-colors duration-200`}
              >
                No
              </th>
              <th className="w-52 font-semibold">Oqim nomi</th>
              <th className="font-semibold">Holati</th>
              <th className="w-64 font-semibold">Izoh</th>
              <th className="w-52 font-semibold">Foydalanuvchi</th>
              <th className="w-64 font-semibold">ID raqam</th>
              <th className="font-semibold">Manzil</th>
              <th className="font-semibold">Sana</th>
              <th className="w-28 font-semibold">Darajasi</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {orders?.map((order, index) => (
              <OrderItem
                data={order}
                index={index + 1}
                isScrolled={isScrolled}
                key={order?._id || index}
              />
            ))}
          </tbody>
        </table>
      ) : null}

      {!isLoading && !hasError && orders?.length === 0 && (
        <b className="block mt-12 mb-9 text-center font-medium">
          Buyurtmalar mavjud emas!
        </b>
      )}

      {/* Loader */}
      {isLoading && !hasError && (
        <div className="flex items-center justify-center h-40 w-full">
          <DotsLoader color="#0085FF" />
        </div>
      )}

      {/* Reload button */}
      {!isLoading && hasError && (
        <div className="flex items-center justify-center h-40 w-full">
          <button
            title="Reload"
            className="p-3"
            aria-label="Reload"
            onClick={loadOrders}
          >
            <Icon src={reloadIcon} alt="Reload icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default OrdersTable;
