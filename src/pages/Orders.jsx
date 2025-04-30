import { useState } from "react";

// Components
import OrdersTable from "@/components/OrdersTable";
import AdminPagesHeader from "@/components/AdminPagesHeader";

const orderStatuses = [
  { label: "Yangi", value: "pending" },
  { label: "Tekshirilmoqda", value: "checking" },
  { label: "Qabul qilindi", value: "checked" },
  { label: "Yetkazilmoqda", value: "sent" },
  { label: "Yetkazib berildi", value: "success" },
  { label: "Atkaz", value: "canceled" },
  { label: "Qaytib keldi", value: "returned" },
];

const Orders = () => {
  const [activeButtonValue, setActiveButtonValue] = useState(null);

  const handleButtonClick = (value) => {
    if (value === activeButtonValue) {
      return setActiveButtonValue(null);
    }

    setActiveButtonValue(value);
  };

  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Buyurtmalar" />

      <div className="container">
        <div className="bg-gradient-gray pb-4 rounded-xl">
          {/* Header */}
          <div className="flex items-center gap-3.5 overflow-x-auto scroll-hidden w-full h-[60px] px-3.5">
            {orderStatuses.map(({ label, value }, index) => {
              return (
                <button
                  key={index}
                  onClick={() => handleButtonClick(value)}
                  className={`${
                    activeButtonValue === value
                      ? "btn-primary"
                      : "btn bg-white hover:text-primary-default"
                  } shrink-0 h-10 px-5 rounded-full max-sm:font-normal`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Line */}
          <div className="h-0.5 w-full bg-white" />

          {/* Content */}
          <OrdersTable currentActiveStatus={activeButtonValue} />
        </div>
      </div>
    </div>
  );
};

export default Orders;
