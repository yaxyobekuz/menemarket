import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  const [iIsCollapse, setIsCollapse] = useState(false);

  return (
    <div className="flex min-h-screen">
      <Sidebar iIsCollapse={iIsCollapse} setIsCollapse={setIsCollapse} />

      <main
        className={`${
          iIsCollapse ? "w-[calc(100%-96px)]" : "w-[calc(100%-320px)]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
