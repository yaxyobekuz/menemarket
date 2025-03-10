// Components
import OrdersTable from "@/components/OrdersTable";
import AdminPagesHeader from "@/components/AdminPagesHeader";

const Orders = () => {
  return (
    <div className="w-full pt-3.5 pb-8 space-y-4">
      {/* Header */}
      <AdminPagesHeader title="Buyurtmalar" />

      <div className="container">
        <div className="bg-gradient-gray pb-4 rounded-xl">
          {/* Title */}
          <div className="flex items-center h-[60px] px-2.5 sm:px-4"></div>

          {/* Line */}
          <div className="h-0.5 w-full bg-white" />

          {/* Content */}
          <OrdersTable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
